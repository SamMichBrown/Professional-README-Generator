// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

  }else if (license === 'Eclipse'){
    return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';

  }else if (license === 'GNU'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

  }else if (license === 'Apache'){
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }else{
    return '';
  }

};

// Create a function to generate markdown for README
function generateMarkdown(data) {

  const badge = renderLicenseBadge(data.license);

  return `
  
  # ${data.title}
  ---
  ${badge}

  ## <a name='description'></a> Description
  
  ${data.description}

  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)

  ## <a name='installation'></a> Installation
  
  ${data.installation}

  ## <a name='usage'></a> Usage
  
  ${data.usage}

  ## <a name='license'></a> License
  
  This project is under the ${data.license} license.
  
  ## <a name='contributing'></a> Contributing
  
  ${data.contributing}

  ## Tests
  
  ${data.test}

  ## Questions
  
  [${data.github}](https://github.com/${data.github})
  If you have any questions find me here,
  ${data.email}`; 
}

module.exports = generateMarkdown;
