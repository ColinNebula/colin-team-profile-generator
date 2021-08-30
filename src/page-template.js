// create the projects section
const generateTeams = teamsArr => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark"></h2>
      <div class="flex-row justify-space-between">
      ${teamsArr
        .filter(({ feature }) => feature)
        .map(({ name, title, iD, eMail, link }) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              <p>${title}</p>
              ${eMail.map(eMail => eMail).join(',')}
            </h5>
            <p>${iD}</p>
            <a href="${link}" class="btn"><i class="fab fa-github mr-1"></i></a>
          </div>
        `;
        })
        .join('')}

  ${teamsArr
  .filter(({ feature }) => !feature)
  .map(({ name, title, eMail, iD, link }) => {
    return `
    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
      <h2 class="portfolio-item-title text-light">${name}</h2>
      <h2 class="portfolio-title"></h2>
      <h3 class="fab fa-github mr-1"></i>Title: ${title}</h3>
      <p>ID: ${iD}</p>
      <p>E-Mail: ${eMail}</p>
      <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>Github</a>
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
  const { teams, name, title, iD, eMail, link, github, ...header } = templateData;
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
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
      ${generateTeams(teams)}
    </main>
</section>
</main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Colin Nebula</h3>
      <a href="https://github.com/ColinNebula" class="btn mt-auto"><i class="fab fa-github mr-2"></i>Github</a>
    </footer>
  </body>
  </html>
  `;
};