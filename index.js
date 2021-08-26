const profileDataArgs = process.argv.slice(2, process.argv.length);
const name = profileDataArgs[0];
const title = profileDataArgs[1];
const employeeId = profileDataArgs[2];
const eMail = profileDataArgs[3];
const github = profileDataArgs[4];

const generatePage = (userName, title, githubName, employeeId, eMail) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

    <body>
    <header>
     <a>My Team</a>
    </header>
    <main class="container">
    <section class="employee">
    <h1>${name}</h1>
    Name: ${userName}
    Title: ${title}
    EmployeeId: ${employeeId}
    E-mail: ${eMail}
    GitHub: ${githubName}
    <h2><a href="https://github.com/${github}">Github</a></h2>
    </section>

    <section class="engineer id="engineer">
    <h1>${name}</h1>
    Name: ${userName}
    Title: ${title}
    EmployeeId: ${employeeId}
    E-mail: ${eMail}
    GitHub: ${githubName}
    <h2><a href="https://github.com/${github}">Github</a></h2>
    </section>

    <section class="intern id="intern">
    <h1>${name}</h1>
    Name: ${userName}
    Title: ${title}
    EmployeeId: ${employeeId}
    E-mail: ${eMail}
    GitHub: ${githubName}
    <h2><a href="https://github.com/${github}">Github</a></h2>
    </section>

    <section class="manager id="manager">
    <h1>${name}</h1>
    Name: ${userName}
    Title: ${title}
    EmployeeId: ${employeeId}
    E-mail: ${eMail}
    GitHub: ${githubName}
    <h2><a href="https://github.com/${github}">Github</a></h2>
    </section>
    </main>
  </body>
  </html>
  `;
};
console.log(name, title, employeeId, eMail, github);
console.log(generatePage(name, title, employeeId, eMail, github));
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