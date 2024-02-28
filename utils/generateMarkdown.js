// this function is used to generate and render the license badge it takes the license from the user input
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

// This function returns the license link and it takes the user input license
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license !== 'no license') {
    return `- [License](#license)`;
  } else {
    return "";
  }
}

// this functions renders the license section taking the user input license
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== 'no license') {
    return `## License
    ${license}`;
  } else {
    return "";
  }
}

// this function generates the markdown README template using template literals
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
// here i export the module in order to use it on index 
module.exports = generateMarkdown;
