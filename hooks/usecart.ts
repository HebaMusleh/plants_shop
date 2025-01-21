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

  const cardItems = items?.data?.items || [];
  const totalPrice = items?.data?.total_price || 0;

  const quantity = (id: number) => {
    const item = cardItems.find(
      (item: { plant: { id: number } }) => item.plant.id === id
    );
    return item ? item.quantity : 0;
  };

  const addToCartMutation = useMutation({
    mutationFn: ({ id, quantity }: { id: number; quantity: number }) =>
      addItems(id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const removeFromCartMutation = useMutation({
    mutationFn: ({ id, quantity }: { id: number; quantity: number }) =>
      removeItems(id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const addToCart = (id: number, quantity: number) => {
    addToCartMutation.mutate({ id, quantity });
  };

  const removeFromCart = (id: number, quantity: number) => {
    removeFromCartMutation.mutate({ id, quantity });
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
