const inquirer = require('inquirer');
const { parseAction } = require('../actions');

function getAction() {
    const questions = [
        {
            type: 'input',
            name: 'action',
            message: 'What would you like to do?',
            transformer: function(input, answers, flags) {
                return input.toLowerCase();
            }
        }
    ];
    
    return inquirer.prompt(questions).then((answers) => {
        console.log('');
        let output = answers.action.split(' ');
        return parseAction(output);
    })
}

module.exports = getAction;