// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
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

## License
This application is covered under the ${data.license} license.

## Questions
If you have any questions about the repo, please contact [${data.username}](https://github.com/${data.username}) at ${data.email}.
`;
}

module.exports = generateMarkdown;
