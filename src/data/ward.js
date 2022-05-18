import data from "./wards.data";

export const getWardFromDistrict = (district) => {
  if (!district) return [];
  const found = data.find((item) => item.district === district);

  return found.wards || [];
};
