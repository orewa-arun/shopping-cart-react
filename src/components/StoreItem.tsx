import { Card } from "react-bootstrap"

type avatarStat = {
    id: number,
    name: string,
    skill: string,
    imgUrl: string
}

export function StoreItem({ id, name, skill, imgUrl }: avatarStat) {
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
            </Card.Body>
        </Card>
    </>
}