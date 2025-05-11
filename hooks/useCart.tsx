"use client";
import { CardProductProps } from "@/types/cardProductProps";
import { CartContextProps, Props } from "@/types/cartContextProps";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

const CartContext = createContext<CartContextProps | null>(null);

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null);

  useEffect(() => {
    const getItem: any = localStorage.getItem("cart");
    const getItemParse: CardProductProps[] | null = JSON.parse(getItem);
    setCartPrdcts(getItemParse);
  }, []);

  const addToBasketIncrease = useCallback(
    (product: CardProductProps) => {
      let updatedCart;
      if (product.quantity == 10) {
        return toast.error("Daha fazla ekleyemezsin...");
      }
      if (cartPrdcts) {
        updatedCart = [...cartPrdcts];
        const existingItem = cartPrdcts.findIndex(
          (item) => item.id === product.id
        );

        if (existingItem > -1) {
          updatedCart[existingItem].quantity = ++updatedCart[existingItem]
            .quantity;
        }
        setCartPrdcts(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },
    [cartPrdcts]
  );

  const addToBasketDecrease = useCallback(
    (product: CardProductProps) => {
      let updatedCart;
      if (product.quantity == 1) {
        return toast.error("Daha az ekleyemezsin...");
      }
      if (cartPrdcts) {
        updatedCart = [...cartPrdcts];
        const existingItem = cartPrdcts.findIndex(
          (item) => item.id === product.id
        );

        if (existingItem > -1) {
          updatedCart[existingItem].quantity = --updatedCart[existingItem]
            .quantity;
        }
        setCartPrdcts(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },
    [cartPrdcts]
  );

  const addToBasket = useCallback(
    (product: CardProductProps) => {
      setCartPrdcts((prev) => {
        let updatedCart;
        if (prev) {
          updatedCart = [...prev, product];
        } else {
          updatedCart = [product];
        }
        toast.success("Ürün Sepete Eklendi...");
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    },
    [cartPrdcts]
  );

  const removeCart = useCallback(() => {
    setCartPrdcts(null);
    toast.success("Sepet Temizlendi...");
    localStorage.setItem("cart", JSON.stringify(null));
  }, []);

  const removeFromCart = useCallback(
    (product: CardProductProps) => {
      if (cartPrdcts) {
        const filteredProducts = cartPrdcts.filter(
          (cart) => cart.id !== product.id
        );

        setCartPrdcts(filteredProducts);
        toast.success("Ürün Sepetten Silindi...");
        localStorage.setItem("cart", JSON.stringify(filteredProducts));
      }
    },
    [cartPrdcts]
  );

  const value = {
    productCartQty,
    addToBasket,
    cartPrdcts,
    removeFromCart,
    removeCart,
    addToBasketIncrease,
    addToBasketDecrease,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
