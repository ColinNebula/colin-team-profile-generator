const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [name, title, employeeId, eMail, github] = profileDataArgs;

console.log(name, title, employeeId, eMail, github);

const pageHTML = generatePage(name, title, employeeId, eMail, github);

fs.writeFile('index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Web page complete! Check out index.html to see the output!');
});
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