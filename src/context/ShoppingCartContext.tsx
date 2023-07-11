import { ReactNode, createContext, useContext, useState } from "react";

type CartItem = {
    id: number,
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity(id: number): number,
    increaseQuantity(id: number): void,
    decreaseQuantity(id: number): void,
    removeFromCart(id: number): void,
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
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    console.log(cartItems);

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
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseQuantity, decreaseQuantity, removeFromCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}