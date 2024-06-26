import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logoMain.png"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/x.png'
import navIcon3 from '../assets/img/nav-icon3.svg'
export const Footer = () => {
    return (
        <footer className="footer ">
            <Container className="dfdn pt-5">
                <Row className="align-item-center ">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/krish-gupta-/"><img src={navIcon1} alt="" /></a>
                            <a href="https://twitter.com/_krishgupta"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/codewithkrish/"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>CopyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>

            </Container>
        </footer>
    )
}