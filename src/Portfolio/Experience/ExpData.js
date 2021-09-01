import iitk from "./../../components/images/iitk.png";
import cnlogo from "./../../components/images/cnlogo.png";
import nagarro from "./../../components/images/nagarro.png";
import angira from "./../../components/images/angira.png";
const expdata = [
  {
    key: 1,
    role: "Trainee",
    company: "Nagarro",
    tenure: " August 2021 - November 2021",
    desc: "This training is well-paced and well facilitated. I was trained on various topics including Core Java, Databases, Data Structures and various other Advanced Java modules. We were provided with weekly assignments to track our learning progress, and we were guided by our respective mentors throughout the training program. ",
    logo: nagarro,
  },
  {
    key: 2,
    role: "Intern",
    company: "Angirasoft India",
    tenure: "February 2021 - May 2021",
    desc: "Worked on “Advanced Workforce Disbursement System” where my role was to create and handle the database modules. Also, my role included linking of the database with the software module.",
    logo: angira,
  },
  {
    key: 3,
    role: "Intern",
    company: "Coding Ninjas India",
    tenure: " July 2020 - November 2020",
    desc: "My primary work here was to solve doubts raised by students. I had to understand their perspective to get where they are stuck in the questions. Apart from this, I had to mentor 5 students and encourage them to complete their exercises on time.",
    logo: cnlogo,
  },
  {
    key: 4,
    role: "Summer Trainee",
    company: "ICT, Indian Institue of Technology, Kanpur ",
    tenure: "June 2019 - July 2019",
    desc: "Learnt the concepts of Machine Learning and the Basics of Convolutional Neural Network(CNN) under the Classroom Training on Artificial Intelligence in IIT Kanpur.",
    logo: iitk,
  },
];

export function getExp() {
  return expdata;
}
