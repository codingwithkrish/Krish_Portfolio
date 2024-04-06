import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/experienceBack.png";
import WorkIcon from "./WorkIcon.js"
export const Experience = () => {

    const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);

    // Values should be only date
    const VALUES = ["2021-01-01", "2021-01-15", "2021-03-22"];

    // Description array corresponding to values
    const description = [
        "The event of 1 Jan 2021 : Happy New Year",
        "The event of 15 Jan 2021 : Festival",
        "The event of 22 March 2021 : Board Exam",
    ];

    return (
        <section className="experince" id='experience'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Experience</h2>
                            <p>"Transforming visions into reality through hands-on experience, developing intuitive solutions that enhance user experiences and drive business success."</p>

                            <ReactVerticalTimelineComponent /> </div>
                    </Col>
                </Row>

            </Container>



        </section>

    );

}

const ReactVerticalTimelineComponent = () => {
    const events = [{
        des: "(Building an App for Dementia Patient in Flutter)\n Building Medicine Remainder feature from scratch , from creating UI, Api Integration, Medicine Notification .Worked on Meditation Routine Feature,Teleconsultation Feature, Friends and Family Feature and Much More Things Bloc and Cubit for State Management, Dependency Injection etc.Integrated Razorpay for Payment",
        date: "Oct. 2022 - Jan 2024",
        companyName: "Manastik Pvt Ltd ",
        position: "Lead Software Engineer Intern",
    }, {
        des: "Built an App as a B2B for testing Blood Sample in Flutter, Made the app from scratch to production .Used Firebase as a Backend, Api Integration for AI / ML Image processing running in the server for testing blood, Otp Based Sign Up and Log In, Provider For State Management, Integrated Razorpay as a Payment option and much more thing.",
        date: "Jun. 2022 - Sep. 2022",
        companyName: "Blood51 ",
        position: "Flutter Developer Intern ",
    },
    {
        des: "Made the app from scratch to production .Used Native Android Java For Development, Firebase As The Backend, Worked With XML Listing Vehicles based on users location, showing vehicle details, service available for selected date, bookings etc",
        date: "Jan. 2022 - March. 2022",
        companyName: "Spotrental ",
        position: "Software Engineering Intern",
    },];
    return <VerticalTimeline>

        {events.map((event, index) => {
            return <VerticalElement key={index} {...event} />
        })}

    </VerticalTimeline>

}
const VerticalElement = ({ date, companyName, position, des }) => {
    return <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#261a29', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #261a29' }}
        date={date}
        iconStyle={{ background: '#2d2450', color: '#2d2450' }}
        icon={<WorkIcon width={64} height={64} className="work-icon" />
        }
    >
        <h3 className="vertical-timeline-element-title">{companyName}</h3>
        <br />
        <h4 className="vertical-timeline-element-subtitle">{position}</h4>
        <p>
            {des}
        </p>
    </VerticalTimelineElement>
}