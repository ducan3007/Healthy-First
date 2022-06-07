import axios from "axios";

export const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const AUTH = {
  login: (data) => API.post("/login", data),
  user_auth: () => API.get("/auth"),
};

export const ACCOUNT = {
  create_admin_account: (key, data) => API.post(`/register/admin/${key}`, data),
  create_account: (data) => API.post("/register", data),
  get_accounts: (search = {}) => {
    let page = 1;
    if (Object.keys(search).length === 0) return API.get("/users", { params: { page } });
    return API.get("/users", { params: { search, page } });
  },
  get_account: (id) => API.get(`/user/${id}`),
  update_account: (id, data) => API.patch(`/user/${id}`, data),
  add_work_area: (id, data) => API.put(`/user/workarea/${id}`, data),
};

export const BUSINESS = {
  create_business: (data) => API.post(`/business`, data),
  get_many_business: (search = {}) => {
    let page = 1;
    if (Object.keys(search).length === 0) return API.get("/business", { params: { page } });
    return API.get("/business", { params: { search, page } });
  },

  get_business_detail: (id) => API.get(`/business/${id}`),
  update_business: (id, data) => API.patch(`/business/${id}`, data),
};

export const CERTIFICATE = {
  issue_cert: (id, data) => API.post(`/certificate/${id}`, data),
  revoke_cert: (id, data) => API.delete(`/certificate/${id}`, data),
  extend_cert: (id, data) => API.patch(`/certificate/${id}`, data),
};
export const PLAN = {
  create_plan: (data) => API.post(`/plan`, data),
  get_many_plan: (search = {}) => {
    let page = 1;
    if (Object.keys(search).length === 0) return API.get("/plan", { params: { page } });
    return API.get("/plan", { params: { search, page } });
  },
  get_plan_detail: (id) => API.get(`/plan/${id}`),
  update_plan: (data, id) => API.patch(`/plan/${id}`, data),
  add_samples: (id, data) => API.put(`/plan/sample/${id}`, data),
  updateSample: (data, id) => API.patch(`/plan/sample/${id}`, data),
};
