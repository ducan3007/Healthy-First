import axios from "axios";

export const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const create_admin_account = (key, data) => API.post(`/register/admin/${key}`, data);
export const create_account = (data) => API.post("/register", data);

export const login = (data) => API.post("/login", data);
export const user_auth = () => API.get("/auth");
