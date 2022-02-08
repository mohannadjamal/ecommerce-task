import { createContext, useState, useEffect } from 'react';

const CartContext = createContext({
  products: [] as any[],
  totalProducts: 0,
  totalPrice: 0,
  addProduct: (product: any): any => {},
  removeProduct: (productId: string): any => {},
  //incrementAmount: (productId: string): any => {},
  //decrementAmount: (productId: string): any => {},
});

type Prop = {
  children?: JSX.Element;
};
type CartItem = {
  id: string;
  sku: string;
  catalog: string;
  discount: number;
  images: string[];
  price: number;
  title: string;
  amount: number;
};
export function CartContextProvider(props: Prop) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const productsData = JSON.parse(localStorage.getItem('items') || '[]');
    if (productsData) {
      setCartItems(productsData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cartItems));
  }, [cartItems]);

  function addProductHandler(cartItem: CartItem) {
    setCartItems((prev) => {
      const itemIsInCart = prev.find((item) => item.id === cartItem.id);
      if (itemIsInCart) {
        return prev.map((item) =>
          item.id === cartItem.id
            ? { ...item, amount: item.amount + cartItem.amount }
            : item
        );
      }
      return [...prev, { ...cartItem, amount: cartItem.amount }];
    });
  }
  function removeProductHandler(productId: string) {
    setCartItems((previousCartItems) => {
      return previousCartItems.filter((item) => item.id !== productId);
    });
  }
  function getTotalProductsHandler(): number {
    return cartItems.reduce((ack: number, item) => ack + item.amount, 0);
  }
  function getTotalPriceHandler() {
    let sum = 0;
    cartItems.forEach((item) => {
      item.discount === 0
        ? (sum += item.amount * item.price)
        : (sum += item.amount * (item.price - item.discount * item.price));
    });
    return sum;
  }

  const context = {
    products: cartItems,
    totalProducts: getTotalProductsHandler(),
    totalPrice: getTotalPriceHandler(),
    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartContext;
