

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
                message: '?',
            },
            {
                type: 'list',
                name: 'license',
                message: 'What type of license did you choose?',
                choices: ['Apache', 'Boost', 'BSD', 'Creative Commons','Eclispse', 'GNU', 'IBM', 'ISC', 'MIT', 'Other'],
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

            fs.writeFile("newReadMe.md", template(data), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
            
        });


    // template literal


    function template(objData) {
        return `
${objData.title}
Created by: ${objData.name}
The license for this project is: ${objData.license}
    Table of Contents: \n 
[Description](#description) \n
[Installation](#Installation) \n
[Usage](#usage) \n

##Contact Information \n \n \n \n \n 
Name: ${objData.name} \n \n 
##Description: ${objData.description} \n \n 
## Installation: ${objData.installation} `
    }

}

init();