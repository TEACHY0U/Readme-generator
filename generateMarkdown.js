// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.username}/${data.title}
  # Description
  ${data.description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  # Instillation
  The following necessary dependencies must be installed to run the application properly: ${data.instillation}.
  # Usage
  In order to use this app, ${data.usage}
  # License
  This project is licensed under the ${data.license} license.
  ![GitHub license]
  # Contributing
  Contributors : ${data.contribution}
  # Tests
  The following is needed to run the test: ${data.tests}
  # Questions
  If you have any questions about the repo, open an issue or contact ${data.username} directly at: ${data.email}.
`;
}

module.exports = generateMarkdown;
