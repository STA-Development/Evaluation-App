import { v4 as uuidv4 } from "uuid";

interface SubData {
  id: string;
  status: string;
  employeesName: string;
  employeesPosition: string;
  employerName: string;
  employerPosition: string;
  date: string;
  savedSubmission: boolean;
  color: string;
}

const submissionReadData: SubData[] = [
  {
    id: uuidv4(),
    status: "read",
    color: "green",
    employeesName: "Jenny Cooper",
    employeesPosition: "UI UX Desinger",
    employerName: "Anna Adams",
    employerPosition: "Project Manager",
    date: "Nov 9",
    savedSubmission: false,
  },
  {
    id: uuidv4(),
    status: "read",
    color: "green",
    employeesName: "Jenny Cooper",
    employeesPosition: "UI UX Desinger",
    employerName: "Anna Adams",
    employerPosition: "Project Manager",
    date: "Nov 9",
    savedSubmission: false,
  },
  {
    id: uuidv4(),
    status: "read",
    color: "green",
    employeesName: "Jenny Cooper",
    employeesPosition: "UI UX Desinger",
    employerName: "Anna Adams",
    employerPosition: "Project Manager",
    date: "Nov 9",
    savedSubmission: false,
  },
  {
    id: uuidv4(),
    status: "read",
    color: "green",
    employeesName: "Jenny Cooper",
    employeesPosition: "UI UX Desinger",
    employerName: "Anna Adams",
    employerPosition: "Project Manager",
    date: "Nov 9",
    savedSubmission: false,
  },
  {
    id: uuidv4(),
    status: "read",
    color: "green",
    employeesName: "Jenny Cooper",
    employeesPosition: "UI UX Desinger",
    employerName: "Anna Adams",
    employerPosition: "Project Manager",
    date: "Nov 9",
    savedSubmission: false,
  },
  {
    id: uuidv4(),
    status: "read",
    color: "green",
    employeesName: "Jenny Cooper",
    employeesPosition: "UI UX Desinger",
    employerName: "Anna Adams",
    employerPosition: "Project Manager",
    date: "Nov 9",
    savedSubmission: false,
  },
];

export default submissionReadData;
