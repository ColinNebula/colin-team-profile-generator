const generatePage = require('./src/page-template.js');
const generatePage = (managerName, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css"
    integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Generator</title>
  </head>
  <header>
  <nav class="navbar is-primary role="navigation" aria-label="main navigator" is-centered">
  <!-- navbar brand, navbar menu... -->
  <div class="navbar-brand">
  <a> My Team </a>
</nav>
  </header>
  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
 <section class="section">
 <div class="columns">
  <div class="column">
    <h1>${name}</h1>
    <span class="icon">
  <i class="Fas Fa-Satallite"></i>
  </span>
  <span>Manager</span>
  </div>
  <div class="column">
  <h1>${name}/h1>
  <span class="icon">
  <i class="Fas Fa-Coffee"></i>
  </span>
  <span>Artist</span>
  </div>
  <div class="column">
  <h1>${name}</h1>
  <span class="icon">
  <i class="Fas Fa-Coffee"></i>
  </span>
  <span>Engineer</span>
  </div>
  <div class="column">
  <h1>${name}</h1>
  <span class="icon">
  <i class="Fas Fa-Umbrella"></i>
  </span>
  <span>Intern</span>
  </div>
</div>
 </section>
  </body>
  </html>
  `;
};
module.exports = generatePage;