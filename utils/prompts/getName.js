const inquirer = require('inquirer');

function getName() {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ];

    return inquirer.prompt(questions).then((answers) => {
        return answers.name;
    })
}

module.exports = getName;