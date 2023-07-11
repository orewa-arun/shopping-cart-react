import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext";

type avatarStat = {
    id: number,
    name: string,
    skill: string,
    imgUrl: string
}

export function StoreItem({ id, name, skill, imgUrl }: avatarStat) {

    const { getItemQuantity, increaseQuantity, decreaseQuantity, removeFromCart } = useShoppingCart();

    let quantity = getItemQuantity(id);

    return <>
        <Card>
            <Card.Img variant="top" src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between 
                align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="text-muted">{skill}</span>
                </Card.Title>
                <div className="mt-3">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseQuantity(id)}>
                            + Add to cart
                        </Button>
                    ) : (
                        <div className="d-flex justify-content-center 
                            align-items-center flex-column">
                            <div className="d-flex justify-content-center
                            align-items-center"
                                style={{ gap: "0.5rem" }}>
                                <Button onClick={() => increaseQuantity(id)}>+</Button>
                                <span className="fs-3">{quantity}</span>in cart
                                <Button onClick={() => decreaseQuantity(id)}>-</Button>
                            </div>
                            <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    </>
}