import moment from "moment";

export const get_date = (date) => {
  return moment(date).format("DD/MM/YYYY");
};
