const DateNow = new Date().toLocaleString();
const data = [
  {
    id: 1,
    receivedTime: `${new Date(DateNow).getHours()}:${new Date(
      DateNow
    ).getMinutes()}`,
    patientName: "Nihal Shaikh",
    appointmentTime: "11:00",
    disease: "Insomnia",
    status: "Rejected",
    Counsulting_date: "26-06-21",
    Counsulting_time: "15:00",
    Review: "This application is very good and time saving",
    Slot: "1:00 - 2:00",
  },
  {
    id: 2,
    receivedTime: `${new Date(DateNow).getHours()}:${new Date(
      DateNow
    ).getMinutes()}`,
    patientName: "Wilson Radadia",
    appointmentTime: "12:00",
    disease: "Diabetes",
    status: "Rejected",
    Counsulting_date: "26-06-21",
    Counsulting_time: "15:00",
    Review: "This application is very good and time saving",
    Slot: "11:00 - 12:00",
  },
  {
    id: 3,
    receivedTime: `${new Date(DateNow).getHours()}:${new Date(
      DateNow
    ).getMinutes()}`,
    patientName: "Dharmesh Rathod",
    appointmentTime: "13:00",
    disease: "Cold & Fever",
    status: "Accepted",
    Counsulting_date: "26-06-21",
    Counsulting_time: "15:00",
    Review: "This application is very good and time saving",
    Slot: "10:00 - 11:00",
  },
  {
    id: 4,
    receivedTime: `${new Date(DateNow).getHours()}:${new Date(
      DateNow
    ).getMinutes()}`,
    patientName: "Navdeep Dadhania",
    appointmentTime: "11:00",
    disease: "Cold",
    status: "Accepted",
    Counsulting_date: "26-06-21",
    Counsulting_time: "15:00",
    Review: "This application is very good and time saving",
    Slot: "7:00 - 8:00",
  },
];

export default data;
