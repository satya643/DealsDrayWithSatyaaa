import axios from "axios";

export const fetchEmployees = (config) => {
    return axios.get(`https://${process.env.REACT_APP_BASE_URL}/api/employees`, config);
  };
export const fetchEmployee = (id, config) => {
    return axios.get(`https://${process.env.REACT_APP_BASE_URL}/api/employees/${id}`, config);
  };
export const createEmployee = (employeeData, config) => {
    return axios.post(`https://${process.env.REACT_APP_BASE_URL}/api/employees/create`, employeeData, config);
  };
export const updateEmployee = (id, employeeData, config) => {
    return axios.put(`https://${process.env.REACT_APP_BASE_URL}/api/employees/update/${id}`, employeeData, config);
};
export const deleteEmployee = (id, config) => {
    return axios.delete(`https://${process.env.REACT_APP_BASE_URL}/api/employees/delete/${id}`, config);
};
