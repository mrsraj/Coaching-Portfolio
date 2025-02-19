import React from "react";
import "../CSS/Home.css";
import PaidCourses from "../Course/Courses";
import TeachersTeam from "../Teams/TeachersTeam";

const Home = () => (
    <section id="home" className="home">
        <PaidCourses />
        <TeachersTeam />
    </section>
);

export default Home;