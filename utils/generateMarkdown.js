// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return (
      "\n* [License](#license)\n"); 
    ;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return (
      "## License\n" +
      "This project is licensed under the " +
      license +
      " license.\n"
    );
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Title](#title)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [License](#license)
  * [GitHub-username](#my-github-username)
  * [Contact-Me](#how-to-contactme)
${renderLicenseLink(data.license)}
## Title
${data.title}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution 
${data.contribution}
## Tests
${data.tests}
${renderLicenseSection(data.license)}
## My GitHub Username
${data.github}
## How to ContactMe
${data.email}
`;
}

module.exports = generateMarkdown;
