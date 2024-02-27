// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  const licenseBadges = {
    "Apache 2.0":`![License:${license}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`,
    "BSD-3 Clause":`![License:${license}](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`,
    "CC0":`![License: ${license}(https://licensebuttons.net/l/zero/1.0/80x15.png)`,
    "GNU GPL v3":`![License: ${license}](https://img.shields.io/badge/License-GPLv3-blue.svg)`,
    "The Hippocratic License 2.1": `![License: ${license}](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)`,
    "IBM Public Lincense 1.0":`![License: ${license}](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`,
    "MIT":`![License:${license}](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };

    if (license in licenseBadges){
      return licenseBadges[license]
    }else {
      return ''
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
    ${license}`;
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
  contact,
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
  
  ## Contact 
  https://github.com/${contact}

  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  `;

module.exports = generateMarkdown;
