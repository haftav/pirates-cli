const inquirer = require('inquirer');
const { parseAction } = require('../actions');

function getAction() {
    const questions = [
        {
            type: 'input',
            name: 'action',
            message: 'What would you like to do?',
            transformer: function(input, answers, flags) {
                return input.toLowerCase().trim();
            }
        }
    ];
    
    return inquirer.prompt(questions).then((answers) => {
        // answers.split(' ');
        return parseAction(answers.action);
    })
}

module.exports = getAction;