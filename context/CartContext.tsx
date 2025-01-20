import useCart from "@/hooks/useCart";
import { createContext, useContext } from "react";

interface CartContextType {
  cardItems: any[];
  totalPrice: number;
  isLoading: boolean;
  error: Error | null;
  AddToCart: (id: number, quantity: number) => void;
  quantity: number;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { cardItems, totalPrice, isLoading, error, AddToCart, quantity } =
    useCart();
  return (
    <CartContext.Provider
      value={{ cardItems, totalPrice, isLoading, error, AddToCart, quantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
