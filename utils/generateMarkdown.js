// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const indexImport = require('../index.js')
function renderLicenseBadge(license) {
  if (!license) {
      return '';
  }
  return `[![License](https://img.shields.io/badge/License-${license}-green.svg)](https://opensource.org/licenses/${license.toLowerCase()})`;
}

function renderLicenseLink(license) {
  if (!license) {
      return '';
  }
  return `[${license}](https://opensource.org/licenses/${license.toLowerCase()})`;
}

function renderLicenseSection(license) {
  if (!license) {
      return '';
  }
  return `## License

This project is licensed under the ${renderLicenseLink(license)} license.`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}

## Questions

If you have any questions, you can reach me at my GitHub profile: [${data.github}](https://github.com/${data.github})

You can also email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
