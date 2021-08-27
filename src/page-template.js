// create the projects section
const generateProjects = projectsArr => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block"></h2>
      <div class="flex-row justify-space-between">
      ${projectsArr
        .filter(({ feature }) => feature)
        .map(({ name, title, iD, eMail, link }) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Title:
              ${eMail.map(eMail => eMail).join(',')}
            </h5>
            <p>${iD}</p>
            <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}

  ${projectsArr
  .filter(({ feature }) => !feature)
  .map(({ name, title, eMail, iD, link }) => {
    return `
    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
      <h3 class="portfolio-item-title text-light">${name}</h3>
      <h5 class="portfolio-title">
         ${title}
      </h5>
      <p>${iD}</p>
      <p>${eMail}</p>
      <a href="${link}"  mt-auto"><i class="fab fa-github mr-2"></i> GitHub</a>
    </div>
  `;
  })
  .join('')}
</div>
</section>
`;
};

module.exports = templateData => {
  // destructure page data by section
  const { projects, name, title, iD, eMail, github, ...header } = templateData;
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
  </head>

    <body>
    <header>
    
    
    <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        <nav class="flex-row">
        
    </div>
    </header>
    <main class="container my-5">
    ${templateData.name}
    ${templateData.title}
    ${templateData.employeeId}
    ${templateData.eMail}
    ${templateData.githubName}
    ${generateProjects(projects)}
    
  
</main>
</section>
</main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
    </footer>
  </body>
  </html>
  `;
};