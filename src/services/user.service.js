import axios from "axios";
import authHeader from "./auth-header.js";

// TODO change to use environment variable, not hardcoded
// ideally the server provides the server url, not environment
const API_URL = "http://localhost:3000/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};


export default {
  getPublicContent,
  getUserBoard
};