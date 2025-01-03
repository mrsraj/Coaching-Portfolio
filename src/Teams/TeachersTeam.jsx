import React from "react";
import style from "./TeachersTeam.module.css";

const TeachersTeam = () => {
    const teachers = [
        {
            id: 1,
            name: "John Doe",
            subject: "Mathematics",
            experience: "10 years",
            education: "M.Sc. in Mathematics",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Jane Smith",
            subject: "Physics",
            experience: "8 years",
            education: "Ph.D. in Physics",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Emily Davis",
            subject: "Chemistry",
            experience: "5 years",
            education: "M.Sc. in Chemistry",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            name: "Emily Davis",
            subject: "Chemistry",
            experience: "5 years",
            education: "M.Sc. in Chemistry",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 5,
            name: "Emily Davis",
            subject: "Chemistry",
            experience: "5 years",
            education: "M.Sc. in Chemistry",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 6,
            name: "Emily Davis",
            subject: "Chemistry",
            experience: "5 years",
            education: "M.Sc. in Chemistry",
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className={style.teachers_team}>
            <h2 className="team-heading">Our Teachers Team</h2>
            <div className={style.team_container}>
                {teachers.map((teacher) => (
                    <div key={teacher.id} className={style.teacher_card}>
                        <img src={teacher.image} alt={teacher.name} className={style.teacher_image} />
                        <h3 className={style.teacher_name}>{teacher.name}</h3>
                        <p className={style.teacher_subject}>Expertise: {teacher.subject}</p>
                        <p className={style.teacher_experience}>Experience: {teacher.experience}</p>
                        <p className={style.teacher_education}>Education: {teacher.education}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeachersTeam;