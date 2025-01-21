import axios from "axios";
import "@/axiosConfig";

const getAll = async (type: string) => {
  try {
    const response = await axios.get(`/plants/${type}`);
    if (!response)
      throw new Error(
        "There was an error while fetching the data. Please try again later."
      );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(
        `An error occurred while fetching data: ${error.message}`
      );
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

const getDetails = async (id: string | string[]) => {
  try {
    const response = await axios.get(`/plants/${id}`);
    if (!response)
      throw new Error(
        "There was an error while fetching the data. Please try again later."
      );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(
        `An error occurred while fetching data: ${error.message}`
      );
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export { getAll, getDetails };
