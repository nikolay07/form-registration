import axios from "axios";
const baseUrl = "https://5e98af0c5eabe7001681c458.mockapi.io/users";

export const fetchPutUser = (data) => {
  return axios.post(baseUrl, data).then((response) => {
    if (!response.ok) throw new Error("Failed to create user data");
  });
};

export const fetchGetUsers = () => {
  return axios.get(baseUrl);
};
