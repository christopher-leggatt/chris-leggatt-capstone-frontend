import axios from "axios";
const { REACT_APP_BACKEND_URL } = process.env;

export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const getBanners = async () => {
  try {
    const response = await axios.get(`${REACT_APP_BACKEND_URL}/images/banners`);
    return response.data;
  } catch (error) {
    console.error("Error adding order:", error);
    throw error;
  }
};
