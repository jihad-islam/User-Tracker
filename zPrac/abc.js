// Array of predefined names and occupations
const names = ["John", "Jane", "Michael", "Sarah", "David"];
const occupations = ["Engineer", "Doctor", "Teacher", "Artist", "Scientist"];

// Function to generate a random user
function generateRandomUser() {
  // Random name (from the names array)
  const name = names[Math.floor(Math.random() * names.length)];

  // Random age (between 18 and 60)
  const age = Math.floor(Math.random() * (60 - 18 + 1)) + 18;

  // Random occupation (from the occupations array)
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];

  // Return the random user object
  return { name, age, occupation };
}
