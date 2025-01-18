import axios from "axios";

// This hook will be used to fetch data from the server "Get All method"
const useFetchData = async (type:string) => {
  try {
    const response = await axios.get(`/categories/${type}/plants`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export { useFetchData };
