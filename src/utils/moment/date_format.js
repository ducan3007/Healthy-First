import moment from "moment";

export const get_date = (date) => {
  if (!date) return "N/A";
  return moment(date).format("DD/MM/YYYY");
};
