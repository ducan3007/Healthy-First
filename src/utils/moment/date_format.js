import moment from "moment";

export const get_date = (date) => {
  if (!date) return "N/A";
  if (date === "N/A") return date;
  let date_iso = new Date(date);
  console.log(date_iso);
  return moment(date_iso).format("DD/MM/YYYY");
};
