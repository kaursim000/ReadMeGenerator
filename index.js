

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }




// TODO: Create a function to initialize app
function init() {



    const inquirer = require('inquirer');
    const fs = require('fs');

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            }, 
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please type a detailed description of your app.',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are your installation instructions?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What are your usage instructions?',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'What are your contribution guidelines?',
            },
            {
                type: 'input',
                name: 'test',
                message: 'What are test instructions?',
            },
            {
                type: 'list',
                name: 'license',
                message: 'What type of license did you choose?',
                choices: ['Apache', 'Boost', 'Eclipse', 'IBM', 'ISC', 'MIT', 'Mozilla', 'SIL', 'Other'],
            },
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'github',
            },
            {
                type: 'list',
                message: 'What is your preferred method of communication?',
                name: 'contact',
                choices: ['email', 'phone', 'telekinesis'],
            },
        ])
        .then((data) => {
            console.log(data)


            // const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;

            fs.writeFile("README.md", template(data), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
            
        });


    // template literal


    function template(objData) {
        if (objData.license === 'Apache') {
            return `
The license for this project is: [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) ${objData.license} \n 
${objData.title}
Created by: ${objData.name} \n
    Table of Contents: \n 
[Description](#Description) \n
[Installation](#Installation) \n
[Usage](#Usage) \n
[Contributions](#Contributions) \n
[Testing](#Test)
[Questions](#Questions)
[Contact Information] \n \n \n \n \n 
Name: ${objData.name} \n \n 
## Description: \n ${objData.description} \n \n 
## Installation: \n ${objData.installation} \n \n 
## Usage: \n ${objData.usage} \n \n
## Contributions: \n ${objData.contribution} \n \n
## Test Instructions:\n ${objData.test} \n \n 
## Questions:\n If you have questions you can go to my github this is my username ${objData.github}`

        } else if (objData.license==='Boost'){
        return `
The license for this project is: [[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) ${objData.license} \n 
${objData.title}
Created by: ${objData.name} \n
    Table of Contents: \n 
[Description](#Description) \n
[Installation](#Installation) \n
[Usage](#Usage) \n
[Contributions](#Contributions) \n
[Testing](#Test)
[Questions](#Questions)
[Contact Information] \n \n \n \n \n 
Name: ${objData.name} \n \n 
## Description: \n${objData.description} \n \n 
## Installation:\n ${objData.installation} \n \n 
## Usage:\n ${objData.usage} \n \n
## Contributions: \n${objData.contribution} \n \n
## Test Instructions: \n${objData.test} \n \n 
## Questions: \nIf you have questions you can go to my github this is my username ${objData.github}`  
        }
         else if (objData.license==='Eclipse'){
        return `
The license for this project is: [![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0) ${objData.license} \n 
${objData.title}
Created by: ${objData.name} \n
    Table of Contents: \n 
[Description](#Description) \n
[Installation](#Installation) \n
[Usage](#Usage) \n
[Contributions](#Contributions) \n
[Testing](#Test)
[Questions](#Questions)
[Contact Information] \n \n \n \n \n 
Name: ${objData.name} \n \n 
## Description: \n${objData.description} \n \n 
## Installation: \n ${objData.installation} \n \n 
## Usage: \n${objData.usage} \n \n
## Contributions: \n${objData.contribution} \n \n
## Test Instructions: \n${objData.test} \n \n 
## Questions: \nIf you have questions you can go to my github this is my username ${objData.github}`  
        }
         else if (objData.license==='IBM'){
        return `
The license for this project is: [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0) ${objData.license} \n 
${objData.title}
Created by: ${objData.name} \n
    Table of Contents: \n 
[Description](#Description) \n
[Installation](#Installation) \n
[Usage](#Usage) \n
[Contributions](#Contributions) \n
[Testing](#Test)
[Questions](#Questions)
[Contact Information] \n \n \n \n \n 
Name: ${objData.name} \n \n 
## Description: \n ${objData.description} \n \n 
## Installation: \n ${objData.installation} \n \n 
## Usage: \n ${objData.usage} \n \n
## Contributions: \n ${objData.contribution} \n \n
## Test Instructions: \n ${objData.test} \n \n 
## Questions: \n If you have questions you can go to my github this is my username ${objData.github}`  
        }
         else if (objData.license==='ISC'){
        return `
The license for this project is: [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)${objData.license} \n 
${objData.title}
Created by: ${objData.name} \n
    Table of Contents: \n 
[Description](#Description) \n
[Installation](#Installation) \n
[Usage](#Usage) \n
[Contributions](#Contributions) \n
[Testing](#Test)
[Questions](#Questions)
[Contact Information] \n \n \n \n \n 
Name: ${objData.name} \n \n 
## Description: \n ${objData.description} \n \n 
## Installation: \n ${objData.installation} \n \n 
## Usage: \n ${objData.usage} \n \n
## Contributions: \n ${objData.contribution} \n \n
## Test Instructions: \n ${objData.test} \n \n 
## Questions: \n If you have questions you can go to my github this is my username ${objData.github}`  
        }
         else if (objData.license==='MIT'){
        return `
The license for this project is: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)${objData.license} \n 
${objData.title}
Created by: ${objData.name} \n
    Table of Contents: \n 
[Description](#Description) \n
[Installation](#Installation) \n
[Usage](#Usage) \n
[Contributions](#Contributions) \n
[Testing](#Test)
[Questions](#Questions)
[Contact Information] \n \n \n \n \n 
Name: ${objData.name} \n \n 
## Description: \n${objData.description} \n \n 
## Installation: \n${objData.installation} \n \n 
## Usage: \n${objData.usage} \n \n
## Contributions:\n ${objData.contribution} \n \n
## Test Instructions: \n${objData.test} \n \n 
## Questions: \nIf you have questions you can go to my github this is my username ${objData.github}`  
        }
         else if (objData.license==='Mozilla'){
        return `
The license for this project is: [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) ${objData.license} \n 
${objData.title}
Created by: ${objData.name} \n
    Table of Contents: \n 
[Description](#Description) \n
[Installation](#Installation) \n
[Usage](#Usage) \n
[Contributions](#Contributions) \n
[Testing](#Test)
[Questions](#Questions)
[Contact Information] \n \n \n \n \n 
Name: ${objData.name} \n \n 
## Description: \n${objData.description} \n \n 
## Installation: \n${objData.installation} \n \n 
## Usage: \n${objData.usage} \n \n
## Contributions: \n${objData.contribution} \n \n
## Test Instructions: \n${objData.test} \n \n 
## Questions: \nIf you have questions you can go to my github this is my username ${objData.github}`  
        }
         else if (objData.license==='SIL'){
        return `
The license for this project is: [![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)${objData.license} \n 
${objData.title}
Created by: ${objData.name} \n
    Table of Contents: \n 
[Description](#Description) \n
[Installation](#Installation) \n
[Usage](#Usage) \n
[Contributions](#Contributions) \n
[Testing](#Test)
[Questions](#Questions)
[Contact Information] \n \n \n \n \n 
Name: ${objData.name} \n \n 
## Description: \n${objData.description} \n \n 
## Installation: \n${objData.installation} \n \n 
## Usage: \n${objData.usage} \n \n
## Contributions: \n${objData.contribution} \n \n
## Test Instructions: \n${objData.test} \n \n 
## Questions: \nIf you have questions you can go to my github this is my username ${objData.github}`  
        }

else {
    return `${objData.title}
    Created by: ${objData.name} \n
        Table of Contents: \n 
    [Description](#Description) \n
    [Installation](#Installation) \n
    [Usage](#Usage) \n
    [Contributions](#Contributions) \n
    [Testing](#Test)
    [Questions](#Questions)
    [Contact Information] \n \n \n \n \n 

    ## Description: \n ${objData.description} \n \n 
    ## Installation: \n ${objData.installation} \n \n 
    ## Usage: \n ${objData.usage} \n \n
    ## Contributions: \n ${objData.contribution} \n \n
    ## Test Instructions: \n ${objData.test} \n \n 
    ## Questions: \n If you have questions you can go to my github this is my username ${objData.github}`  
            }
             
}


















//         return `
// ${objData.title}
// Created by: ${objData.name} \n
//     Table of Contents: \n 
// [Description](#Description) \n
// [Installation](#Installation) \n
// [Usage](#Usage) \n
// [Contributions](#Contributions) \n
// [Testing](#Test)
// [Questions](#Questions)
// [Contact Information] \n \n \n \n \n 
// Name: ${objData.name} \n \n 
// ## Description: ${objData.description} \n \n 
// ## Installation: ${objData.installation} \n \n 
// ## Usage: ${objData.usage} \n \n
// ## Contributions: ${objData.contribution} \n \n
// ## Test Instructions: ${objData.test} \n \n 
// ## Questions: If you have questions you can go to my github this is my username ${objData.github}`
//     }

}

init();