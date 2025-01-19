import { createContext, useContext } from "react";

const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <CartContext.Provider value={null}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
