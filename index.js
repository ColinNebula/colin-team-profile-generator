
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
      message: 'Please enter your GitHub Username',
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
}; 

const promptProject = portfolioData => {
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
=================
Add a New Member
=================
`);
  return inquirer.prompt([
    
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Add another team member?: (Required)',
      default: false
    },
  ])

.then(projectData => {
  portfolioData.projects.push(projectData);
  if (projectData.confirmAddProject) {
    return promptProject(portfolioData);
  } else {
    return portfolioData;
  }
});
} 

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);

  });
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, title, employeeId, eMail, github);

// fs.writeFile('index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Web page complete! Check out index.html to see the output!');
// });
// console.log(name, title, employeeId, eMail, github);
// console.log(generatePage(name, title, employeeId, eMail, github));
//const { writeFile, copyFile } = require('./utils/generate-site.js');
// Inquirer
// const fs = require('fs');
// const inquirer = require('inquirer');

// // JEST

// const promptUser = () => { 
//     return inquirer.prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is your Manager name? (Required)',
//         // Validate the properties to check if a valid value was provided by the user
//         validate: nameInput => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log('Please enter your manager name!');
//             return false;
//           }
//         }
//       },
//     ])
// }
// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach((profileItem) => {
//     console.log(profileItem)
//   });
// };

// printProfileData(profileDataArgs);







// Moment
const moment = require('moment');
const dateTime = moment();
console.log(dateTime.format('MMMM Do YYYY, h:mm:ss a'));