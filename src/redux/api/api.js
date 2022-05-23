import axios from "axios";

export const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const login = (data) => API.post("/login", data);
export const user_auth = () => API.get("/auth");
export const create_admin_account = (key, data) => API.post(`/register/admin/${key}`, data);

export const create_account = (data) => API.post("/register", data);
export const get_accounts = (search = {}) => {
  let page = 1;
  if (Object.keys(search).length === 0) {
    return API.get("/users", { params: { page } });
  }

  return API.get("/users", { params: { search, page } });
};
export const get_account = (id) => API.get(`/user/${id}`);
export const update_account = (id, data) => API.patch(`/user/${id}`, data);
export const add_work_area = (id, data) => API.put(`/user/workarea/${id}`, data);

export const create_business = (data) => API.post(`/business/create`, data);
export const get_many_business = (search = {}) => {
  let page = 1;
  if (Object.keys(search).length === 0) {
    return API.get("/business", { params: { page } });
  }

  return API.get("/business", { params: { search, page } });
};
