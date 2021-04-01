import iitk from "./../../components/images/iitk.png";
import cnlogo from "./../../components/images/cnlogo.png";

const expdata = [
  {
    key: 1,
    role: "Intern",
    company: "Coding Ninjas India",
    tenure: " July 2020 - November 2020",
    desc:
      "My primary work here was to solve doubts raised by students. I had to understand their perspective to get where they are stuck in the questions. Apart from this, I had to mentor 5 students and encourage them to complete their exercises on time.",
    logo: cnlogo,
  },
  {
    key: 2,
    role: "Summer Trainee",
    company: "ICT, Indian Institue of Technology, Kanpur ",
    tenure: "June 2019 - July 2019",
    desc:
      "Learnt the concepts of Machine Learning and the Basics of Convolutional Neural Network(CNN) under the Classroom Training on Artificial Intelligence in IIT Kanpur.",
    logo: iitk,
  },
];

export function getExp() {
  return expdata;
}
