/*
const addRandomUser = () => {
  const name = randomNames[Math.floor(Math.random() * randomNames.length)];
  const age = Math.floor(Math.random() * (60 - 18 + 1)) + 18;
  const occupation =
    randomOccupations[Math.floor(Math.random() * randomOccupations.length)];

  return { name, age, occupation };
};
*/
import React, { useState } from "react";
import Header from "./Header";
import UserList from "./UserList";

const initialUsers = [
  { id: 1, name: "Liton", age: 28, occupation: "Software Engineer" },
  { id: 2, name: "Mashrafe", age: 35, occupation: "Data Scientist" },
  { id: 3, name: "Sakib", age: 24, occupation: "Graphic Designer" },
  { id: 4, name: "Mushfiq", age: 27, occupation: "UI Designer" },
  { id: 5, name: "Miraz", age: 32, occupation: "Doctor" },
];

const randomNames = [
  "John Doe",
  "Emma Wilson",
  "Liam Carter",
  "Olivia Thompson",
  "Ethan Martinez",
  "Ava Harris",
  "Mason Clark",
  "Isabella Lewis",
  "Lucas Walker",
  "Sophia Brown",
  "Benjamin Young",
  "Charlotte Hall",
];

const randomOccupations = [
  "Web Developer",
  "Product Manager",
  "UX Designer",
  "Doctor",
  "Financial Analyst",
  "AI Researcher",
  "Marketing Specialist",
  "Cybersecurity Expert",
  "Biotech Engineer",
  "Game Developer",
];

function UserTracker() {
  const [users, setUsers] = useState(initialUsers);

  const addRandomUser = () => {
    const name = randomNames[Math.floor(Math.random() * randomNames.length)];
    const age = Math.floor(Math.random() * (60 - 18 + 1)) + 18;
    const occupation =
      randomOccupations[Math.floor(Math.random() * randomOccupations.length)];

    const newUser = {
      id: users.length + 1, // Ensure unique ID
      name,
      age,
      occupation,
    };

    // ✅ Correct way to update state
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <Header addRandomUser={addRandomUser} />
      <UserList users={users} totalUsers={users.length} />
    </div>
  );
}

export default UserTracker;
