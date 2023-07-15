import React, { useState, useEffect } from 'react';

function StudentAttendance() {
  // state to hold the list of students present
  const [students, setStudents] = useState([]);

  // effect to add a student to the list of students when the roll number and name are entered
  useEffect(() => {
    const addStudent = (rollNumber, name) => {
      setStudents(students => [...students, { rollNumber, name }]);
    };
    return addStudent;
  }, []);

  // effect to remove a student from the list of students when the checkout time is entered
  useEffect(() => {
    const removeStudent = rollNumber => {
      setStudents(students => students.filter(student => student.rollNumber !== rollNumber));
    };
    return removeStudent;
  }, []);

  // function to handle input of roll number and name
  const handleInput = e => {
    const rollNumber = e.target.value;
    const name = e.target.value;
    const addStudent = (rollNumber, name) => {
      setStudents(students => [...students, { rollNumber, name }]);
    };
    addStudent(rollNumber, name);
  };

  // function to handle checkout
  const handleCheckout = rollNumber => {
    const removeStudent = rollNumber => {
      setStudents(students => students.filter(student => student.rollNumber !== rollNumber));
    };
    removeStudent(rollNumber);
  };

  // render the list of students and input fields for roll number and name
  return (
    <div>
      <h1>Student Attendance</h1>
      <ul>
        {students.map(student => (
          <li key={student.rollNumber}>
            {student.name} ({student.rollNumber})
            <button onClick={() => handleCheckout(student.rollNumber)}>Checkout</button>
          </li>
        ))}
      </ul>
      <h2>Checkin</h2>
      <label>
        Roll Number:
        <input type="text" onChange={handleInput} />
      </label>
      <label>
        Name:
        <input type="text" onChange={handleInput} />
      </label>
      <h2>Total Students: {students.length}</h2>
    </div>
  );
}

export default StudentAttendance;
