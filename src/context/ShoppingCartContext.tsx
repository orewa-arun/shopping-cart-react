import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart.jsx"

type CartItem = {
    id: number,
    quantity: number
}

type ShoppingCartContext = {
    openCart(): void,
    closeCart(): void,
    getItemQuantity(id: number): number,
    increaseQuantity(id: number): void,
    decreaseQuantity(id: number): void,
    removeFromCart(id: number): void,
    cartQuantity: number,
    cartItems: CartItem[]
}

// Context is used to pass data into children without using props
const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

type ShoppingCartProviderProps = {
    // ReactNode is a react child kind of stuff
    children: ReactNode
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // 0 is the initial value of quantity which is the accumulator here.
    const cartQuantity = cartItems.reduce((quanity, item) => item.quantity + quanity, 0);

    console.log(cartItems);
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity == null) {
                return [...currItems, { id: id, quantity: 1 }];
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        // keep everything else the same except quantity
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                })
            }
        });
    }

    function decreaseQuantity(id: number) {
        // this button option will only be visible when qty is atleast 1
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id);
        });
    }

    return (
        <ShoppingCartContext.Provider value={{
            openCart,
            closeCart,
            getItemQuantity,
            increaseQuantity,
            decreaseQuantity,
            removeFromCart,
            cartQuantity,
            cartItems
        }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}