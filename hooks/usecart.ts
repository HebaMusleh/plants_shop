import { addItems, cartItems, removeItems } from "@/services/cart.services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useCart = () => {
  const queryClient = useQueryClient();
  const {
    data: items,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: cartItems,
  });
  const cardItems = items?.data?.items;
  const quantity = cardItems?.quantity;
  const totalPrice = items?.data?.total_price;

  const addToCartMutation = useMutation({
    mutationFn: ({ id, quantity }: { id: number; quantity: number }) =>
      addItems(id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const removeFromCartMutation = useMutation({
    mutationFn: ({ id }: { id: number }) => removeItems(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const addToCart = (id: number, quantity: number) => {
    addToCartMutation.mutate({ id, quantity });
  };

  const removeFromCart = (id: number) => {
    removeFromCartMutation.mutate({ id });
  };

  return {
    cardItems,
    totalPrice,
    isLoading,
    error,
    addToCart,
    quantity,
    removeFromCart,
  };
};

export default useCart;
