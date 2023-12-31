import "./_Checkout.scss";
import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { useTheme } from "@mui/material/styles";
import Payment from "./Payment";
import Shipping from "./Shipping";
import { loadStripe } from "@stripe/stripe-js";
import { createOrder } from "../../state/orderSlice";
import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  const theme = useTheme();
  const dispatch = useDispatch();
  const totalPrice = cart?.reduce((total, product) => {
    return total + product.count * product.price;
  }, 0);
  const formattedTotalPrice = formatPrice(totalPrice);
  const stripePromise = loadStripe(
    "pk_test_51Nw7l8Cw7jRcWAe8jDuzAXZqjE6PnaZtgvroTBIKOCKDe7HSpUqDIxtRA2ZmjG7ElUvTsC4sOgI2BezHDslp8WV1009HYC3azO"
  );

  const testUser = {
    username: "user1",
    email: "user1@example.com",
    user_id: "6cc40c68-b2bd-42a9-acb4-b2f3d2545975",
    billing_address_id: 1,
    shipping_address_id: 1,
    price_total: totalPrice,
  };

  document.title = "Checkout";

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);

    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }

    if (isSecondStep) {
      makePayment(values);
    }

    actions.setTouched({});
  };

  async function makePayment(values) {
    const stripe = await stripePromise;
    const requestBody = {
      ...testUser,
      products: cart.map(({ id, count, price, name, description }) => ({
        id,
        count,
        price,
        name,
        description,
      })),
    };

    try {
      const orderResponse = await dispatch(createOrder(requestBody)).unwrap();
      if (orderResponse.error) {
        console.error("Error processing order:", orderResponse.error);
        return;
      }
      const order = orderResponse.data;
      await stripe.redirectToCheckout({
        sessionId: order.id,
      });
    } catch (error) {
      console.log("🚀 ~ file: Checkout.jsx:62 ~ makePayment ~ error:", error);
      console.error("Error processing order:", error);
    }
  }

  return (
    <section className="checkout">
      <Box width="100%" m="100px auto">
        <Stepper
          activeStep={activeStep}
          sx={{
            mt: { xs: "24px", md: "36px" },
            mb: { xs: "16px", md: "24px" },
          }}
        >
          <Step>
            <StepLabel>Billing</StepLabel>
          </Step>
          <Step>
            <StepLabel>Payment</StepLabel>
          </Step>
        </Stepper>
        <Box>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema[activeStep]}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                {isFirstStep && (
                  <Shipping
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />
                )}
                {isSecondStep && (
                  <Payment
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />
                )}
                <Box display="flex" justifyContent="space-between" gap="50px">
                  {!isFirstStep && (
                    <Button
                      fullWidth
                      color="primary"
                      variant="contained"
                      sx={{
                        borderRadius: "22.5px",
                        padding: "15px 40px",
                      }}
                      onClick={() => setActiveStep(activeStep - 1)}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    fullWidth
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{
                      color: "white",
                      borderRadius: "22.5px",
                      padding: "15px 40px",
                    }}
                  >
                    {!isSecondStep ? "Next" : "Place Order"}
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </section>
  );
};

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    province: "",
    postalCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    province: "",
    postalCode: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      province: yup.string().required("required"),
      postalCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      province: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      postalCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
    }),
  }),

  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];

export default Checkout;
