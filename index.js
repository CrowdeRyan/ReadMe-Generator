// README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    // WHEN I enter my project title
    // THEN this is displayed as the title of the README
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },

    // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    {
      type: "input",
      name: "description",
      message: "Describe your project:",
    },
    {
      type: "input",
      name: "install",
      message: "How do you install your application?",
    },
    {
      type: "input",
      name: "uses",
      message: "How do you use your application?",
    },
    {
      type: "input",
      name: "guidelines",
      message: "Name any contributers to this project?",
    },
    {
      type: "input",
      name: "test",
      message: "How does one test your application?",
    },

    // WHEN I choose a license for my application from a list of options
    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.
    {
      type: "checkbox",
      message: "Which license did you use?",
      name: "license",
      choices: ["MIT", "AAGPL", "GPLv3", "None"],
    },

    // WHEN I enter my GitHub username
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username:",
    },
    // WHEN I enter my email address
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
    },
  ]);
};

const myBadges = (answers) => {
  if (answers.license == "MIT") {
    text =
      "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
  } else if (answers.license == "AAGPL") {
    text =
      "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)";
  } else if (answers.license == "GPLv3") {
    text =
      "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)";
  } else {
    text = " ";
  }
  return text;
};

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const generateReadme = (answers) =>
  `# ${answers.title}

## Description: ${answers.description}

${myBadges(answers)}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)

## 1. Installation: 
    ${answers.install}  
## 2. Usage: 
    ${answers.uses}  
## 3. Contributing: 
    ${answers.guidelines}
## 4. Tests: 
    ${answers.test}

### Questions: https://github.com/${answers.github}
### Email me:  <a href="mailto:${answers.email}" hspace="20">${
    answers.email
  }</a>
`;

const build = () => {
  promptUser()
    .then((answers) => {
      myBadges(answers);
      writeFileAsync("myreadme.md", generateReadme(answers));
    })
    .then(() => console.log("Successfully wrote to myreadme.md"))
    .catch((err) => console.error(err));
};

build();
