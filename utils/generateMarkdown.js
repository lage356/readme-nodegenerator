// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license !== 'no license') {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}]`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license !== 'no license') {
    return `- [License](#license)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== 'no license') {
    return `## License
    the license info goes here`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({
  title,
  description,
  install,
  usage,
  credit,
  license,
  features,
}) =>
  `# ${title} 
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}

  ## Description
   
  ${description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation

  ${install}

  ## Usage

  ${usage}


  ## Credits
  
  ${credit}
  
  ${renderLicenseSection(license)}

  ## Features
  
 ${features}
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  `;

module.exports = generateMarkdown;
