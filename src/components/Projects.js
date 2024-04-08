import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/atcs_Rider.png";
import projImg2 from "../assets/img/blood51.png";
import projImg3 from "../assets/img/chechkedln.png";
import projImg4 from "../assets/img/cloathing store.png";
import projImg5 from "../assets/img/vu.png";
import projImg6 from "../assets/img/snugl.png";
import projImg7 from "../assets/img/vchatapp.png";
import projImg8 from "../assets/img/hocconnect.png";
import projImg9 from "../assets/img/gc.png";
import projImg10 from "../assets/img/project-img1.png";
import projImg11 from "../assets/img/ipl.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg10,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg4,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg5,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg6,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg7,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg8,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg9,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg11,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12} >
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                                    <h2>My Freelancing Projects</h2>
                                    <p>"Bringing ideas to life through innovative projects, leveraging cutting-edge technologies to solve real-world challenges with creativity and precision."</p>

                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}