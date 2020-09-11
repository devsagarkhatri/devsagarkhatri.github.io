import java from "./../../components/images/java.png";
import react from "./../../components/images/react.png";
import ml from "./../../components/images/ml-logo.png";

const prodata = [
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

export function getData() {
  return prodata;
}
