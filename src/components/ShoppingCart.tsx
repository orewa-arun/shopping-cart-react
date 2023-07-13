import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem.jsx";
import storeItems from "../data/items.json";
import { rupee } from "../utilities/convertRupee.js";

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { cartItems, closeCart } = useShoppingCart();

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cartItems.length === 0 ?
                    <div style={{ fontSize: "2rem" }}
                        className="d-flex justify-content-center align-items-center">
                        Add your avatars to Cart!
                    </div> :
                    <Stack gap={3}>
                        {cartItems.map(item => (
                            <CartItem key={item.id} {...item} />
                        ))}
                        <div className="ms-auto fw-bold fs-3">
                            <span>Total: </span>
                            {rupee(cartItems.reduce((totalPrice, cartItem) => {
                                const item = storeItems.find(i => i.id === cartItem.id);
                                return totalPrice + (item?.price || 0) * cartItem.quantity
                            }, 0))}
                        </div>
                    </Stack>
                }
            </Offcanvas.Body>
        </Offcanvas>
    )
}