import axios from "axios";

const token = localStorage.getItem('token')

export const api = axios.create({
  baseURL: "https://nekit-desafio.herokuapp.com/"

});