
import { Button, Stack } from "react-bootstrap"
import storeItems from "../data/items.json"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { rupee } from "../utilities/convertRupee.jsx"

type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {

    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(item => item.id === id);

    // It's not possible to have item id as null
    // since we are using CartItems as params
    // but it's good practise to consider null
    if (item == null) return null;

    return (
        <Stack direction="horizontal" gap={2}>
            <img
                src={item.imgUrl}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="d-flex flex-column">
                <span style={{ fontSize: "1.5rem" }}>{item.name}</span>
                <span className="text-muted">  x{quantity}</span>
                <div style={{ fontSize: "0.75rem" }} className="text-muted">{item.skill}</div>
            </div>
            <div className="ms-auto d-flex flex-column">
                <div>{rupee(item.price * quantity)}</div>
                <Button variant="outline-danger"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                    onClick={() => removeFromCart(id)}>
                    &#x2715;
                </Button>
            </div>
        </Stack>
    )
}