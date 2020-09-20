import java from "./../../components/images/java.png";
import react from "./../../components/images/react.png";
import ml from "./../../components/images/ml-logo.png";
import car from "./../../components/images/car_race.jpg";
import archery from "./../../components/images/archery.png";
import tictactoe from "./../../components/images/tictactoe.jpg";
import diabetes from "./../../components/images/ml_diabetes.png";

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
    pic: tictactoe,
  },
  {
    id: 1,
    category: { key: 1, name: "Java" },
    name: "Archery GUI Game",
    desc: "",
    pic: archery,
  },
  {
    id: 3,
    category: { key: 1, name: "Java" },
    name: "Car Racing Game",
    desc: "",
    pic: car,
  },
  {
    id: 4,
    category: { key: 3, name: "Machine Learning" },
    name: "Diabetes Prediction",
    desc: "",
    pic: diabetes,
  },
  {
    id: 1,
    category: { key: 1, name: "Java" },
    name: "TicTacToe",
    desc: "",
    pic: tictactoe,
  },
  {
    id: 1,
    category: { key: 1, name: "Java" },
    name: "Archery GUI Game",
    desc: "",
    pic: archery,
  },
  {
    id: 3,
    category: { key: 1, name: "Java" },
    name: "Car Racing Game",
    desc: "",
    pic: car,
  },
  {
    id: 4,
    category: { key: 3, name: "Machine Learning" },
    name: "Diabetes Prediction",
    desc: "",
    pic: diabetes,
  },
  {
    id: 1,
    category: { key: 1, name: "Java" },
    name: "Archery GUI Game",
    desc: "",
    pic: archery,
  },
  {
    id: 3,
    category: { key: 1, name: "Java" },
    name: "Car Racing Game",
    desc: "",
    pic: car,
  },
  {
    id: 4,
    category: { key: 3, name: "Machine Learning" },
    name: "Diabetes Prediction",
    desc: "",
    pic: diabetes,
  },
];

export function getProjects() {
  return projectData;
}
export function getCategory() {
  return projectCategory;
}
