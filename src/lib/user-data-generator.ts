// User data generator for avatar components

const firstNames = [
  "Alex", "Jordan", "Casey", "Riley", "Taylor", "Morgan", "Quinn", "Avery",
  "Blake", "Cameron", "Dakota", "Emery", "Finley", "Gray", "Harper", "Indigo",
  "Jamie", "Kendall", "Logan", "Mason", "Noah", "Oakley", "Parker", "River",
  "Sage", "Tatum", "Unity", "Vale", "Winter", "Xander", "Yuki", "Zara"
];

const lastNames = [
  "Anderson", "Brown", "Chen", "Davis", "Evans", "Foster", "Garcia", "Harris",
  "Ito", "Johnson", "Kim", "Lee", "Martinez", "Nguyen", "O'Connor", "Patel",
  "Quinn", "Rodriguez", "Smith", "Thompson", "Ueda", "Valdez", "Wang", "Xu",
  "Young", "Zhang", "Adams", "Baker", "Clark", "Edwards", "Fisher", "Green"
];

const roles = [
  "Frontend Developer", "Backend Developer", "Full Stack Developer", "UI/UX Designer",
  "Product Manager", "Project Manager", "DevOps Engineer", "Data Scientist",
  "QA Engineer", "Technical Lead", "Scrum Master", "Business Analyst",
  "Marketing Manager", "Sales Manager", "HR Manager", "Finance Manager",
  "Content Creator", "Graphic Designer", "Motion Designer", "Brand Manager",
  "Customer Success", "Operations Manager", "Legal Counsel", "Research Analyst"
];

// Generate consistent user data based on ID
export function generateUserDataFromId(id: number) {
  const firstName = firstNames[id % firstNames.length];
  const lastName = lastNames[(id * 2) % lastNames.length];
  const role = roles[(id * 3) % roles.length];

  return {
    name: `${firstName} ${lastName}`,
    role
  };
}
