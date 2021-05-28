import java from "./../../components/images/java.png";
import react from "./../../components/images/react.png";
import ml from "./../../components/images/ml-logo.png";
import car from "./../../components/images/car_race.jpg";
import archery from "./../../components/images/archery.jpg";
import tictactoe from "./../../components/images/tictactoe2.jpg";
import diabetes from "./../../components/images/ml_diabetes.jpg";
import SPS from "./../../components/images/rockPaperScissors1.jpg";
import weather from "./../../components/images/weather.jpg";
import movie from "./../../components/images/movie.jpg";
import merchandise from "./../../components/images/merchandise.jpg";
import todo from "./../../components/images/todo1.jpg";
import chart from "./../../components/images/chart2.jpg";
import rapidrender from "./../../components/images/rapidrender.png";
import rapidresume from "./../../components/images/resume1.jpg";

const projectCategory = [
  {
    key: 1,
    technology: "Java",
    logo: java,
  },
  {
    key: 2,
    technology: "React",
    logo: react,
  },
  {
    key: 3,
    technology: "Machine Learning",
    logo: ml,
  },
];

const projectData = [
  {
    id: 1,
    category: { key: 1, name: "Java" },
    name: "TicTacToe",
    desc: "",
    link: "",
    pic: tictactoe,
  },
  {
    id: 2,
    category: { key: 2, name: "React" },
    name: "Movies Database",
    desc: "",
    link: "",
    pic: movie,
  },
  {
    id: 3,
    category: { key: 2, name: "React" },
    name: "Merchandise Kart",
    desc: "",
    link: "",
    pic: merchandise,
  },
  {
    id: 4,
    category: { key: 1, name: "Java" },
    name: "Car Racing Game",
    desc: "",
    link: "",
    pic: car,
  },
  {
    id: 5,
    category: { key: 3, name: "Machine Learning" },
    name: "Diabetes Prediction",
    desc: "",
    link: "",
    pic: diabetes,
  },

  {
    id: 6,
    category: { key: 1, name: "Java" },
    name: "Archery GUI Game",
    desc: "",
    link: "",
    pic: archery,
  },
  {
    id: 7,
    category: { key: 2, name: "React" },
    name: "Stone-Paper-Scissors",
    desc: "",
    link: "",
    pic: SPS,
  },
  {
    id: 8,
    category: { key: 2, name: "React" },
    name: "To-Do List",
    desc: "",
    link: "",
    pic: todo,
  },

  {
    id: 9,
    category: { key: 2, name: "React" },
    name: "Play with Charts",
    desc: "",
    link: "",
    pic: chart,
  },
  {
    id: 10,
    category: { key: 2, name: "React" },
    name: "Weather",
    desc: "",
    link: "",
    pic: weather,
  },
  {
    id: 11,
    category: { key: 2, name: "React" },
    name: "Rapid Render",
    desc: "",
    link: "",
    pic: rapidrender,
  },
  {
    id: 12,
    category: { key: 2, name: "React" },
    name: "Rapid Resume",
    desc: "",
    link: "",
    pic: rapidresume,
  },
];

export function getProjects() {
  return projectData;
}
export function getCategory() {
  return projectCategory;
}
