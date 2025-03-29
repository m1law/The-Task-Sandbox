import axios from "axios";

// TODO don't hardcode server here
const API_URL = "http://localhost:3000/api/task/";

const create = (description) => {
  console.log("we in task service rn");
  console.log(API_URL + "create");
  return axios.post(API_URL + "create", {
    description,
  });
};

export default {
  create,
};
