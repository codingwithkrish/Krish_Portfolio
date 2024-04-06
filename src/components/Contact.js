import { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
export const Contact = () => {
    const formInitialState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
    const [formDetails, setFormDetials] = useState(formInitialState);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const onFormUpdate = (category, value) => {
        setFormDetials({ ...formDetails, [category]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        const response = await fetch('https://chatapp-backened-25kz.onrender.com/api/v1/auth/contact-us', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText('Send');

        let result = await response.json();

        let code = result.code;
        console.log(code);
        setFormDetials(formInitialState);
        if (code === 200) {
            setStatus({ success: true, message: 'Message Sent Successfully' });
        } else {
            setStatus({ success: false, message: 'SomeThing Went Wron Please try again latter' });

        }

    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>
                            Get In Touch
                        </h2>
                        <form action="" onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />

                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />

                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />

                                </Col>
                                <Col>
                                    <textarea rows="6" value={formDetails.message} placeholder="Any Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>

                                </Col>
                                {
                                    status.message && <Col>
                                        <p className={status.success === false ? "dange" : "success"}>
                                            {status.message}

                                        </p>
                                    </Col>
                                }

                            </Row>
                        </form>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}