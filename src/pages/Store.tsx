import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";

export function Store() {
    return <>
        <h1>Store</h1>
        {/* large means 3,medium means 2 column elements with gap 3 */}
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map((item) => (
                <Col>{JSON.stringify(item)}</Col>
            ))}
        </Row>
    </>;
}