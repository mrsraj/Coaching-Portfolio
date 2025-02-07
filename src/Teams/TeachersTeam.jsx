import React from "react";
import style from "./TeachersTeam.module.css";

const TeachersTeam = () => {
    const teachers = [
        {
            id: 1,
            name: "Suraj Kumar",
            subject: "Mathematics",
            experience: "10 years",
            education: "M.Sc. in Mathematics",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7X6xFQGkaQXBLYB5BEAzMvROfJZFpUzzh5g&s",
        },
        {
            id: 2,
            name: "Manish Kumar",
            subject: "Physics",
            experience: "8 years",
            education: "Ph.D. in Physics",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7X6xFQGkaQXBLYB5BEAzMvROfJZFpUzzh5g&s",
        },
        {
            id: 3,
            name: "Mr S Raj",
            subject: "Chemistry",
            experience: "5 years",
            education: "M.Sc. in Chemistry",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7X6xFQGkaQXBLYB5BEAzMvROfJZFpUzzh5g&s",
        },
        {
            id: 4,
            name: "Mr SK Pandey",
            subject: "Chemistry",
            experience: "5 years",
            education: "M.Sc. in Chemistry",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7X6xFQGkaQXBLYB5BEAzMvROfJZFpUzzh5g&s",
        },
        {
            id: 5,
            name: "S Singh",
            subject: "Chemistry",
            experience: "5 years",
            education: "M.Sc. in Chemistry",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7X6xFQGkaQXBLYB5BEAzMvROfJZFpUzzh5g&s",
        },
        {
            id: 6,
            name: "Sachin Yadav",
            subject: "Chemistry",
            experience: "5 years",
            education: "M.Sc. in Chemistry",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7X6xFQGkaQXBLYB5BEAzMvROfJZFpUzzh5g&s",
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