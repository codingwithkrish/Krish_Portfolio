import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";

import colorSharp from "../assets/img/color-sharp.png";
import {
    CircularProgressbar,


} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import "react-circular-progressbar/dist/styles.css";
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>"Empowering innovation through code, crafting solutions that blend technology with creativity, to redefine possibilities in the digital world."</p>
                            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={4000} transitionDuration={1000} className="owl-carousel owl-theme skill-slider" >

                                <SkillBanner percentage={100} text={"Flutter "} />
                                <SkillBanner percentage={98} text={"Native Android Dev"} />
                                <SkillBanner percentage={95} text={"Node Js"} />
                                <SkillBanner percentage={90} text={"React Js"} />
                                <SkillBanner percentage={65} text={"WordPress"} />
                                <SkillBanner percentage={50} text={"FastApi / Flask"} />
                                <SkillBanner percentage={85} text={"Graphic Designing"} />
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} className="background-image-left" />
        </section>
    )
}

const SkillBanner = (props) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
            <div className="card" style={{ backgroundColor: '#261a29', padding: '20px', borderRadius: '50px', width: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <div className="description" style={{ color: '#ffffff' }}>
                    <h3>{props.text}</h3>

                </div>

                <div >
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={props.percentage}
                        duration={1}
                        easingFunction={easeQuadInOut}
                        repeat
                    >
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbar
                                    value={value}
                                    text={`${roundedValue}%`}
                                    styles={{
                                        path: {
                                            // Path color
                                            stroke: `#2b173c`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'butt',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            // Rotate the path
                                            transform: 'rotate(0.25turn)',
                                            transformOrigin: 'center center',
                                        },
                                    }}
                                /* This is important to include, because if you're fully managing the
                          animation yourself, you'll want to disable the CSS animation. */

                                />
                            );
                        }}
                    </AnimatedProgressProvider>

                </div>

            </div>

        </div>
    );
}