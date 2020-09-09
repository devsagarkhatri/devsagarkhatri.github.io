import mmm from "./../../components/images/mmmut.png";
import vbs from "./../../components/images/vbs.png";
import sun from "./../../components/images/sunbeam.png";

const edudata = [
  {
    key: 1,
    degree: "Master of Computer Applications",
    university: "Madan Mohan Malaviya University of Technology",
    tenure: "2018 - Present",
    logo: mmm,
  },
  {
    key: 2,
    degree: "Bachelor of Computer Applications",
    university: "Veer Bahadur Singh Purvanchal University",
    tenure: "2014 - 2017",
    logo: vbs,
  },
  {
    key: 3,
    degree: "Intermediate (C.B.S.E.)",
    university: "Sunbeam School Lahartara",
    tenure: "2012 - 2014",
    logo: sun,
  },
  {
    key: 4,
    degree: "High School (C.B.S.E.)",
    university: "Sunbeam School Lahartara",
    tenure: "2010 - 2012",
    logo: sun,
  },
];

export function getData() {
  return edudata;
}
