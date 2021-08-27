const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

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
    {
      type: 'input',
      name: 'title',
      message: 'What is your title? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Enter your title here!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter your employee ID: (Required)',
      validate: iDInput => {
        if (iDInput) {
          return true;
        } else {
          console.log('Enter your ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address?: (Required)',
      validate: eMailInput => {
        if (eMailInput) {
          return true;
        } else {
          console.log('Enter you Email address here!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub Username (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter your GitHub Username!');
          return false;
        }
      }
    },
  ]);
} 

const promptProject = portfolioData => {
  console.log(`
=====================
Add a New Team Member
=====================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'please enter a name? (Required)',
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
        type: 'input',
        name: 'title',
        message: 'What is title of team member (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('please enter a title here!');
            return false;
          }
        }
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
        name: 'confirmAddProject',
        message: 'Would you like to add another team member?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
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

// this will create three variables based on data in templateData
//const { projects, name, title, employeeId, eMail, github, ...header } = templateData;







// Moment
const moment = require('moment');
const dateTime = moment();
console.log(dateTime.format('MMMM Do YYYY, h:mm:ss a'));