module.exports = (name, title, employeeId, eMail, githubName, github) => {
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
    <section class="employee" id="employee">
    <div>
    <h1>${name}</h1>
    <ul style="list-style-type:none;">
    <li><a>Name: ${name}</a></li>
    <li><a>Title: ${title}</a></li>
    <li><a>EmployeeId: ${employeeId}</a></li>
    <li><a>E-mail: ${eMail}</a></li>
    <li><a>GitHub: ${githubName}</a></li>
    </ul>
    <div/>
    <h2><a href="https://github.com/${github}">Github</a></h2>
    </section>


    
    </section>
    </main>
  </body>
  </html>
  `;
};