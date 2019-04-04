import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "http://localhost:3000/api/v1.0/",
    withCredentials: false,
    headers:{
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
};
