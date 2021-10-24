// Moment 
const moment = require('moment');
const dateTime = moment();
console.log(dateTime.format('MMMM Do YYYY, h:mm:ss a'));
// All require modules
const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Enter your name please!');
          return false;
        }
      }
    },

  ]);
}

const promptTeam = portfolioData => {
  console.log(`
=====================
Add a New Team Member
=====================
`);

  // If there's no 'member', create one
  if (!portfolioData.teams) {
    portfolioData.teams = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Please enter a name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a name here!');
            return false;
          }
        }
      },
      {
        type: 'list',
        choices: ['Engineer', 'Manager', 'Intern'],
        name: 'title',
        message: 'What is title of team member (Required)',
      },
      {
        type: 'input',
        name: 'eMail',
        message: 'Provide a e-mail for this member (Required)',
        validate: eMailInput => {
          if (eMailInput) {
            return true;
          } else {
            console.log('please enter an e-mail address here!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'iD',
        message: 'Please enter an ID number for this member (Required)',
        validate: iDInput => {
          if (iDInput) {
            return true;
          } else {
            console.log('please enter an ID number here!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'school',
        message: 'Please enter a school for this member (Required)',
        validate: iDInput => {
          if (iDInput) {
            return true;
          } else {
            console.log('please enter an ID number here!');
            return false;
          }
        },
        when: (answers) => {
          if (answers.title === 'Intern') {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter user GitHub link:(Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('please enter a GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAddTeam',
        message: 'Would you like to add another team member?',
        default: false
      }
    ])
    .then(teamData => {
      if (teamData.title === 'Engineer') {
        portfolioData.teams.push(new Engineer(teamData.name, teamData.iD, teamData.eMail, teamData.link)
        )
      } else if (teamData.title === 'Manager') {
        portfolioData.teams.push(new Manager(teamData.name, teamData.iD, teamData.eMail, teamData.officeNumber)
        )
      } else {
        portfolioData.teams.push(new Intern(teamData.name, teamData.iD, teamData.eMail, teamData.school)
        )
      }



      // portfolioData.teams.push(teamData);
      if (teamData.confirmAddTeam) {
        return promptTeam(portfolioData);
      } else {
        return portfolioData;
      }
    });
};
// User Prompt
promptUser()
  .then(promptTeam)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });









