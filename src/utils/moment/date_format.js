import moment from "moment";

export const get_date = (date) => {
  if (!date) return "N/A";
  let date_iso = new Date(date);
  return moment(date_iso.toISOString()).format("DD/MM/YYYY");
};
