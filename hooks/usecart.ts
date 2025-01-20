import { addItems, cartItems } from "@/services/cart.services";
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

  const { mutate } = useMutation({
    mutationFn: ({ id, quantity }: { id: number; quantity: number }) =>
      addItems(id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const AddToCart = (id: number, quantity: number) => {
    mutate({ id, quantity });
  };

  return {
    cardItems,
    totalPrice,
    isLoading,
    error,
    AddToCart,
    quantity,
  };
};

export default useCart;
