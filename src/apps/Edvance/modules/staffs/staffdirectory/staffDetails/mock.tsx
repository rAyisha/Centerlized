import React from "react";


type ExamTable = {
  sub: string;
  maxmark: string;
  minMark: string;
  marksObtained: string;
  result: string;
  note: string;
};

type FessTable = {
  feesGroup: string;
  feesCode: string;
  dueDate: string;
  status: string;
  amount: string;
  payment: string;
  mode: string;
  date: string;
  discount: string;
  fine: string;
  paid: string;
  balance: string;
};

type DocumentTable = {
  title: string;
  fileName: string;
  action: string;
};

// Define the data
const examTable: ExamTable[] = [
  {
    sub: "100",
    maxmark: "30",
    minMark: "33",
    marksObtained: "56",
    result: "78",
    note: "0.78",
  },
  // {
  //   sub: "Mathematics (110)",
  //   maxmark: "100.00",
  //   minMark: "33.00",
  //   marksObtained: "56.00",
  //   result: "Pass",
  //   note: "-",
  // },
  // Add other subjects here
];

const fessTable: FessTable[] = [
  {
    feesGroup: "class 1",
    feesCode: "Admission-fees",
    dueDate: "04/10/2024",
    status: "Unpaid",
    amount: "2,000.00 +0.00",
    payment: "-",
    mode: "-",
    date: "05/02/2024",
    discount: "0.00",
    fine: "0.00",
    paid: "0.00",
    balance: "2,000.00",
  },
  // Add other fee records here
];

const documentTable: DocumentTable[] = [
  {
    title: "Transfer Certificate",
    fileName: "Transfer_Certificate.pdf",
    action: "",
  },
  // Add other documents here
];


