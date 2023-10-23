import "./_AgeModal.scss";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ReactComponent as LogoIcon } from "../../assets/logo/convenient_cannabis_logo.svg";
import { Button } from "@mui/material";

const AgeModal = ({ onVerified }) => {
  const today = new Date();

  const calculateAge = (birthDate) => {
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }
    return age;
  };

  const validationSchema = Yup.object().shape({
    day: Yup.number()
      .min(1, "Invalid day")
      .max(31, "Invalid day")
      .required("Required"),
    month: Yup.number()
      .min(1, "Invalid month")
      .max(12, "Invalid month")
      .required("Required"),
    year: Yup.number()
      .min(1900, "Invalid year")
      .max(today.getFullYear(), "Invalid year")
      .required("Required"),
  });

  return (
    <section className="modal">
      <div className="modal-content">
        <LogoIcon className="logo-icon" />
        <h2 className="modal-content__heading">
          Welcome
        </h2>
        <p className="modal-content__text">
          Please confirm you are over the legal age
        </p>
        <Formik
          initialValues={{ day: "", month: "", year: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            const birthDate = new Date(
              values.year,
              values.month - 1,
              values.day
            );
            if (isNaN(birthDate)) {
              setErrors({
                day: "Invalid date",
                month: "Invalid date",
                year: "Invalid date",
              });
            } else if (calculateAge(birthDate) < 19) {
              setErrors({
                year: "You must be at least 19 years of age.",
              });
            } else {
              onVerified();
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="age-form">
                <div className="age-form__fields-wrapper">
              <Field className="age-form__field" type="number" name="day" placeholder="DD" />
              <ErrorMessage name="day" component="div" />

              <Field className="age-form__field" type="number" name="month" placeholder="MM" />
              <ErrorMessage name="month" component="div" />

              <Field className="age-form__field" type="number" name="year" placeholder="YYYY" />
              <ErrorMessage name="year" component="div" />
                </div>
              <Button
                className="age-form__confirm-btn"
                variant="contained"
                type="submit"
                color="primary"
                size="small"
                disabled={isSubmitting}
                sx={{
                    width: "214px",
                }}
              >
                Enter
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default AgeModal;
