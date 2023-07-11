import { Button, Card } from "react-bootstrap"

type avatarStat = {
    id: number,
    name: string,
    skill: string,
    imgUrl: string
}

export function StoreItem({ id, name, skill, imgUrl }: avatarStat) {

    let quantity = 1;

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
                        <Button className="w-100">
                            + Add to cart
                        </Button>
                    ) : (
                        <div className="d-flex justify-content-center 
                            align-items-center flex-column">
                            <div className="d-flex justify-content-center
                            align-items-center"
                                style={{ gap: "0.5rem" }}>
                                <Button>+</Button>
                                <span className="fs-3">{quantity}</span>in cart
                                <Button>-</Button>
                            </div>
                            <Button variant="danger" size="sm">Remove</Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    </>
}