licenses = [
  {
    name: 'Apache',
    badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    link: 'https://opensource.org/licenses/Apache-2.0',
    description: 'Apache license'
  },
  {
    name: 'MIT',
    badge: 'assets/images/MIT.jpg',
    link: 'https://www.apache.org/licenses/LICENSE-2.0',
    description: 'MIT license'
  },
  {
    name: 'Mozilla-Public',
    badge: 'assets/images/MIT.jpg',
    link: 'https://www.apache.org/licenses/LICENSE-2.0',
    description: 'Mozilla-public'
  },
  {
    name: 'GNU-General-Public',
    badge: 'assets/images/MIT.jpg',
    link: 'https://www.apache.org/licenses/LICENSE-2.0',
    description: 'Mozilla-public'
  }, 
  {
    name: 'Common-Development-and Distribution',
    badge: 'assets/images/MIT.jpg',
    link: 'https://www.apache.org/licenses/LICENSE-2.0',
    description: 'Common-Development-and Distribution'
  },
  {
    name: 'None',
    badge: 'assets/images/MIT.jpg',
    link: 'https://www.apache.org/licenses/LICENSE-2.0',
    description: 'None'
  }
]


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  let badge = ''; 
  for(licenseData of licenses) {
    if(licenseData.name == licenses) {
      return licenseData.badge; 
    }
    
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ''; 
  for(licenseData of licenses) {
    if(licenseData.name == license) {
      return licenseData.link; 
    }
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''; 
  for(licenseData of licenses) {
    if(licenseData.name == license) {
      return licenseData.description; 
    }
  }
  return licenseSection;
}

// Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
  ${renderLicenseBadge(response.license)}
  ## Description
  ${response.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Instructions for Usage](#usage)
  - [Future Contributions](#contributions)
  - [Testing](#testing)
  - [License](#license)
## Installation
${response.installation}
## Instructions for Usage
${response.usage}
## License
${renderLicenseSection(response.license)}
## Future Contributions
${response.contributions}
## Testing
${response.testing}
`;
}

module.exports = generateMarkdown;

