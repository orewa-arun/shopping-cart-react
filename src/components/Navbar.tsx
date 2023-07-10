import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
    return <NavbarBs className='bg-white shadow-sm mb-3 mt-1'>
        {/* classes would be having css files in bootstrap */}
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            <Button style={{ width: "3rem", height: "3rem" }}
                variant="outline-primary"
                className="rounded-circle">
                <svg fill="#4bd27b" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 453.73 453.73" xml: space="preserve" stroke="#4bd27b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M447.664,129.262c-5.005-6.031-12.435-9.521-20.271-9.521h-20.86l4.734-4.733c1.641-1.642,2.562-3.867,2.562-6.188 c0-2.321-0.922-4.547-2.562-6.188l-48.674-48.673c-3.415-3.417-8.956-3.416-12.375,0.001l-56.886,56.887v-50.7 c0-4.832-3.918-8.75-8.75-8.75H174.265c-4.832,0-8.75,3.918-8.75,8.75v59.511c0,0.028,0.004,0.056,0.004,0.083h-34.664 l-2.876-14.948c-1.838-9.543-8.78-17.301-18.063-20.18L34.149,61.111C20.257,56.802,5.5,64.571,1.189,78.465 c-4.31,13.894,3.461,28.65,17.354,32.96l60.689,18.824l46.254,202.948c1.612,8.584,7.281,15.535,14.797,19.027 c-0.223,1.806-0.352,3.639-0.352,5.501c0,24.599,20.013,44.609,44.61,44.609c24.597,0,44.61-20.012,44.61-44.609 c0-1.026-0.047-2.042-0.117-3.052h70.424c-0.067,1.01-0.115,2.024-0.115,3.052c0,24.599,20.012,44.609,44.608,44.609 c24.599,0,44.609-20.012,44.609-44.609c0-1.101-0.054-2.187-0.132-3.267c11.271-1.366,20.564-9.866,22.704-21.263l42.145-182.255 C454.726,143.239,452.667,135.293,447.664,129.262z M184.543,379.451c-11.979,0-21.727-9.746-21.727-21.727 c0-11.979,9.748-21.727,21.727-21.727c11.979,0,21.727,9.747,21.727,21.727C206.27,369.705,196.522,379.451,184.543,379.451z M343.953,379.451c-11.979,0-21.725-9.746-21.725-21.727c0-11.979,9.745-21.727,21.725-21.727c11.98,0,21.727,9.747,21.727,21.727 C365.68,369.705,355.934,379.451,343.953,379.451z M359.263,289.074H178.754c-8.729,0-15.804-7.076-15.804-15.805 c0-8.728,7.075-15.803,15.804-15.803h180.509c8.729,0,15.804,7.075,15.804,15.803C375.067,281.998,367.991,289.074,359.263,289.074 z M359.263,204.79H178.754c-8.729,0-15.804-7.076-15.804-15.804s7.075-15.803,15.804-15.803h180.509 c8.729,0,15.804,7.075,15.804,15.803S367.991,204.79,359.263,204.79z"></path> </g> </g></svg>
                {/* this div is right below the svg image */}
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        color: "white",
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                        transform: "translate(60%,-15%)"
                    }}>
                    3
                </div>
            </Button>
        </Container>
    </NavbarBs >
}