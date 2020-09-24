import java from "./../../components/images/java_logo.png";
import html from "./../../components/images/html_logo.png";
import css from "./../../components/images/css_logo.png";
import js from "./../../components/images/js_logo.png";
import sql from "./../../components/images/sql_logo.png";
import git from "./../../components/images/git_logo.png";
import py from "./../../components/images/py_logo.png";
import numpy from "./../../components/images/numpy_logo.png";
import pandas from "./../../components/images/pandas_logo.png";
import matplot from "./../../components/images/matplot_logo.svg";

import microsoft from "./../../components/images/microsoft_logo.png";
import progate from "./../../components/images/progate_logo.png";
import coursera from "./../../components/images/coursera_logo.jpg";
import cn from "./../../components/images/cnlogo.png";

const certdata = [
  {
    key: 1,
    name: "Progate Certified",
    logo: progate,
  },
  {
    key: 2,
    name: "Microsoft Certified",
    logo: microsoft,
  },
  {
    key: 3,
    name: "Coursera Certified",
    logo: coursera,
  },
  {
    key: 4,
    name: "Coding Ninjas Interview Prep Certified",
    logo: cn,
  },
];

const techdata = [
  {
    key: 1,
    name: "HTML",
    logo: html,
  },
  {
    key: 2,
    name: "CSS",
    logo: css,
  },
  {
    key: 3,
    name: "JavaScript",
    logo: js,
  },
  {
    key: 4,
    name: "MS SQL",
    logo: sql,
  },
  {
    key: 5,
    name: "Git",
    logo: git,
  },
  {
    key: 6,
    name: "Java",
    logo: java,
  },
  {
    key: 7,
    name: "Python",
    logo: py,
  },
  {
    key: 8,
    name: "numpy",
    logo: numpy,
  },
  {
    key: 9,
    name: "Pandas",
    logo: pandas,
  },
  // {
  //   key: 10,
  //   name: "Matplotlib",
  //   logo: matplot,
  // },
];

export function getTech() {
  return techdata;
}

export function getCert() {
  return certdata;
}
