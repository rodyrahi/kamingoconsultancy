import React, { useState } from "react";

const Attendence = () => {
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [name, setName] = useState("");
  const [student, setStudent] = useState(0);
  const [INtime, setINTime] = useState(null);
  const [Outtime, setOutTime] = useState(null);

  function handleEnrollmentNumberChange(event) {
    // Update the enrollment number state variable when the input value changes
    setEnrollmentNumber(event.target.value);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }

  //   ////////////////////////////////////////////////////////////////////////////
  function handleIN(event) {
    event.preventDefault();
    if (!enrollmentNumber && !name) {
      alert("Please enter enrolmet and name");
    } else {
      localStorage.setItem("enrollmentNumber", enrollmentNumber);
      localStorage.setItem("name", name);
    }
    const data = localStorage.getItem(enrollmentNumber && name);
    if (!data) {
      setStudent(student + 1);
      const cal = new Date();
      setINTime(cal.getHours() + ':' + cal.getMinutes() + ':' + cal.getSeconds().toString());
    } else {
      alert("Please enroll student frist");
    }

    // Do something with the enrollment number and name here, such as sending them to a server
    console.log(`Enrollment number: ${enrollmentNumber}`);
    console.log(`Name: ${name}`);
  }
  // ////////////////////////////////////////////////////////////////////////////
  function handleOut(event) {
    setStudent(student - 1);
    const cal = new Date();
    setOutTime(cal.getHours() + ':' + cal.getMinutes() + ':' + cal.getSeconds().toString());

    localStorage.removeItem("enrollmentNumber", enrollmentNumber);
    localStorage.removeItem("name", name);
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <form onSubmit={handleIN} className="w-full max-w-sm">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="enrollmentNumber"
            >
              Enrollment number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="enrollmentNumber"
              type="text"
              value={enrollmentNumber}
              onChange={handleEnrollmentNumberChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-6 text-center">
            {/* <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button> */}
          </div>
        </form>

        <div className="buttons">
          <button onClick={handleIN} className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Check-in
          </button>
          <p>{INtime}</p>
          <button onClick={handleOut} className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-11">
            Check-Out
          </button>
          <p>{Outtime}</p>
        </div>

        <div className="time">
          <h1 className="text-2xl">{student} : student present in the School</h1>
        </div>
      </div>
    </>
  );
};

export default Attendence;
