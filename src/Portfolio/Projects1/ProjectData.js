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
import portfolio from "./../../components/images/portfolio.jpg";
import corona from "./../../components/images/corona.jpg"
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
    category: { key: 2, name: "React" },
    name: "This Portfolio Website",
    desc: "",
    link: "https://github.com/devsagarkhatri/devsagarkhatri.github.io",
    pic: portfolio,
  },
  {
    id: 2,
    category: { key: 2, name: "React" },
    name: "Movies Database",
    desc: "",
    link: "https://devsagarkhatri.github.io/my-app/",
    pic: movie,
  },
  {
    id: 3,
    category: { key: 2, name: "React" },
    name: "Merchandise Kart",
    desc: "",
    link: "https://devsagarkhatri.github.io/my-app/",
    pic: merchandise,
  },
  {
    id: 4,
    category: { key: 1, name: "Java" },
    name: "Car Racing Game",
    desc: "",
    link: "https://github.com/devsagarkhatri/carRace_java",
    pic: car,
  },
  {
    id: 5,
    category: { key: 3, name: "Machine Learning" },
    name: "Diabetes Prediction",
    desc: "",
    link: "https://github.com/devsagarkhatri/Heart-Attack-Prediction",
    pic: diabetes,
  },

  {
    id: 6,
    category: { key: 1, name: "Java" },
    name: "Archery GUI Game",
    desc: "",
    link: "https://github.com/devsagarkhatri/archery_java",
    pic: archery,
  },
  {
    id: 14,
    category: { key: 2, name: "React" },
    name: "Corona Tracker",
    desc: "",
    link: "https://devsagarkhatri.github.io/corona/",
    pic: corona,
  },
  {
    id: 7,
    category: { key: 2, name: "React" },
    name: "Stone-Paper-Scissors",
    desc: "",
    link: "https://devsagarkhatri.github.io/stone-paper-scissors/",
    pic: SPS,
  },
  {
    id: 8,
    category: { key: 2, name: "React" },
    name: "To-Do List",
    desc: "",
    link: "https://devsagarkhatri.github.io/my-app/",
    pic: todo,
  },

  {
    id: 9,
    category: { key: 2, name: "React" },
    name: "Play with Charts",
    desc: "",
    link: "https://devsagarkhatri.github.io/my-app/",
    pic: chart,
  },
  {
    id: 10,
    category: { key: 2, name: "React" },
    name: "Weather",
    desc: "",
    link: "https://devsagarkhatri.github.io/weather/",
    pic: weather,
  },
  {
    id: 11,
    category: { key: 2, name: "React" },
    name: "Rapid Render",
    desc: "",
    link: "https://devsagarkhatri.github.io/rapidrender",
    pic: rapidrender,
  },
  {
    id: 12,
    category: { key: 2, name: "React" },
    name: "Rapid Resume",
    desc: "",
    link: "https://devsagarkhatri.github.io/rapidresume/",
    pic: rapidresume,
  },
  {
    id: 13,
    category: { key: 1, name: "Java" },
    name: "TicTacToe",
    desc: "",
    link: "https://github.com/devsagarkhatri/tictactoe",
    pic: tictactoe,
  },
  
];

export function getProjects() {
  return projectData;
}
export function getCategory() {
  return projectCategory;
}
