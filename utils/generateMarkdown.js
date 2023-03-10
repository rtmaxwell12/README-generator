// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license !==null) { //add various badge options here
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
  ${renderLicenseBadge(response.license)}
  ## Description
  ${response.description}
  ## Table of Contents
  - [Installation] (#installation)
  - [Instructions for Usage] (#usage)
  - [Future Contributions] (#contributions)
  - Testing (#testing)
  - [License] (#license)
## Installation
${response.installation}
## Instructions for Usage
${response.usage}
## License
${renderLicenseSection(response.license)}
## Future Contributions
${response.contribution}
## Testing
${response.testing}
`;
}

module.exports = generateMarkdown;
