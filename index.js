// README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateReadme = (answers) => `#${answers.title}
Description: ${answers.description}
  License: ${answers.license}
  
  Table of Contents
  <a href="#install">Installation</a>
  <a href="#use">Usage</a>
  <a href="#contribute">Contributing</a>
  <a href="#tests">Tests</a>

1. <h2 id="install">Installation:</h2> ${answers.install} 
2.<h2 id="use"></h2> Usage: ${answers.uses} 
3. <h2 id="contribute"></h2>Contributing: ${answers.guidelines}
4.<h2 id="tests"></h2> Tests: ${answers.test}

Questions: https://github.com/${answers.github}
- Email me: ${answers.email}
`;
