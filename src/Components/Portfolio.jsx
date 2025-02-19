import React, { useState } from "react";
import style from '../CSS/Portfolio.module.css'

function Testimonials() {

    const [students, setStudents] = useState([
        {
            name: "Jyoti",
            age: 20,
            course: "Computer Science",
            job: "Software Engineer",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7X6xFQGkaQXBLYB5BEAzMvROfJZFpUzzh5g&s"
        },
        {
            name: "Suraj",
            age: 22,
            course: "Mechanical Engineering",
            job: "Design Engineer",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7X6xFQGkaQXBLYB5BEAzMvROfJZFpUzzh5g&s"
        },
        {
            name: "Raman",
            age: 21,
            course: "Business Administration",
            job: "Marketing Manager",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7X6xFQGkaQXBLYB5BEAzMvROfJZFpUzzh5g&s"
        }
    ]);

    return (
        <section id="portfolio" className={style.portfolio}>
            <h2>Our Portfolio</h2>
            <div className={style.student_container}>
                {students.map((student, index) => (
                    <div key={index} className={style.student_card}>
                        <img src={student.image} alt={student.name} className={style.student_image}/>
                        <h3>{student.name}</h3>
                        <p><strong>Age:</strong> {student.age}</p>
                        <p><strong>Course:</strong> {student.course}</p>
                        <p><strong>Current Job:</strong> {student.job}</p>
                    </div>
                ))}
            </div>
        </section>
    );

};

export default Testimonials;