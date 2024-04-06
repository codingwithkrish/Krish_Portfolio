import { Container, Row, Col, CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "react-bootstrap";

import college from '../assets/img/college.jpg';
import school from '../assets/img/school.png';
export const Education = () => {

    return (
        <section className="education" id="education">
            <Container>
                <Row>
                    <Col>
                        <div className="">
                            <h2>Education</h2>
                            <p>
                                "Education is not just about learning facts, but about igniting curiosity and fostering a lifelong love for discovery and innovation."</p>
                            <CardGroup>
                                <EducationCard imageUrl={college} tittle={"Vishwakarma University, Pune"} subtittle={"B.Tech In Computer Engineering"} des={"Jun.2021 : Jun.2025 \n SGPA: 9.05 \n CGPA: 8.72"} />
                                <EducationCard imageUrl={school} tittle={"D.A.V Public School Kusmunda, Korba (C.G)"} subtittle={"12th C.B.S.E Boards"} des={"2020 : 2021 \n Percentage: 91.20%"} />
                                <EducationCard imageUrl={school} tittle={"D.A.V Public School Kusmunda, Korba (C.G)"} subtittle={"10th C.B.S.E Boards "} des={"2018 : 2019 \n Percentage: 85.60%"} />
                            </CardGroup>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}

const EducationCard = ({ imageUrl, tittle, subtittle, des }) => {
    return (
        <Card className="educationCard">
            <CardImg
                alt="Card image cap"
                src={imageUrl}
                top
                height={100}
                width="100%"
                className="educationImg"
            />
            <CardBody className="educationBody">
                <CardTitle tag="h5" className="educationCardsubtitle">
                    {tittle}
                </CardTitle>
                <CardSubtitle
                    className="educationCardsubtitle  text-muted"
                    tag="h6"
                >
                    {subtittle}
                </CardSubtitle>
                <CardText>
                    {des}
                </CardText>

            </CardBody>
        </Card>
    )
}