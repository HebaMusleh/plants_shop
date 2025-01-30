import axios from "axios";
import "@/axiosConfig"; 


const cartItems = async () => {
  try {
    const response = await axios.get("/cart/");
    return response;
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

const addItems = async (id: number, quantity: number) => {
  try {
    const response = await axios.post("/cart/", {
      plant_id: id,
      quantity,
    });
    return response.data.message;
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

const removeItems = async (id: number, quantity: number) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:8000/api/cart/`, {
      data: { plant_id: id, quantity },
    });
    return response.data.message;
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

export { addItems, cartItems, removeItems };
