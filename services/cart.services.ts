import axios from "axios";
import "@/axiosConfig"; 

// Note: Using "http://127.0.0.1:8000/api/cart/" allows the test to pass, whereas using "/cart/" causes it to fail. While the full URL works, it's not an ideal solution.

const cartItems = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/cart/");
    console.log(response.data);
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
    const response = await axios.post("http://127.0.0.1:8000/api/cart/", {
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
