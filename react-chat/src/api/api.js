const axios = require("axios");

export const getUsers = () => axios.get("http:localhost:5000/users/get/all");