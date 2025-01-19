import axios from "axios";
import "../axiosConfig";

const getAll = async (type: string) => {
  try {
    const response = await axios.get(`/categories/${type}/plants`);
    return response.data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log(err);
    }
  }
};

const getDetails = async (id: string | string[]) => {
  try {
    const response = await axios.get(`/plants/${id}`);
    return response.data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log(err);
    }
  }
};

export { getAll, getDetails };
