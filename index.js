const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your projects title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe what your product does?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps to installing your program?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How does your product work and what does it strive to solve?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Are there any contributors besides yourself?',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'Any tests to be performed on the program?',
      name: 'test',
    },
    {
      type: 'list',
      message: 'What type of license do you want your Github to be under?',
      name: 'license',
      choices: [
        'MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0',
      ]
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ])
  .then((response) => {
  fs.writeFile("READMEfinal.md", createREADME(response.title, response.description, response.installation, response.usage, response.contribute, response.test, response.license,response.username,response.email), (err)=>{
    if(err){
      throw err;
    }
    console.log('Worked!')
  })
  });

function createREADME(title, description, installation, usage, contribute, test, license, username, email){
if (license === 'MIT License'){
  license = 'MIT STUFF'
  badge = '![badmath](https://img.shields.io/badge/license-MIT-blue)'
}else if (license === 'Apache License 2.0'){
  license = 'Apache License 2.0'
  badge = '![badmath](https://img.shields.io/badge/license-Apache--2.0-blue)'
}else{
  license = 'Mozilla Public License 2.0'
  badge = '![badmath](https://img.shields.io/badge/license-Mozilla--2.0-blue)'
}
return(`# ${title} ${badge}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)

## Installation <a name="installation"></a> 

${installation}

## Usage <a name="usage"></a> 

${usage}

## Contributions <a name="contributions"></a> 

${contribute}

## License <a name="license"></a> 

This application is under the ${license}

## Tests

${test}

## Questions

Want to see more of my projects? Here is my github [link](https://github.com/${username})


If you have any questions, feel free to reach me at: ${email}
`
)
}
