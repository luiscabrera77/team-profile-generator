// Receive full team array
function generateHTML(fullTeam) {
// Create array for non-managers cards
  let cardSet = [];
    for (let i = 1; i < fullTeam.length; i++) {
      let cardPart =`
      <div class="col-xl-3 col-sm-6 mb-2">`
      // Engineering or Intern image 
      if (fullTeam[i].role == "Engineer") {
        cardPart +=`
        <div class="bg-white rounded shadow-sm pt-5 pb-2 px-4"><img src="./assets/img/engineer.gif" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
        `}
      else {
        cardPart +=`
        <div class="bg-white rounded shadow-sm pt-5 pb-2 px-4"><img src="./assets/img/intern.gif" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
        `};
      cardPart +=`
      <h5 class="mb-0">${fullTeam[i].name}</h5>
      <span class="small text-uppercase text-muted">${fullTeam[i].role}</span>
      <ul class="list-group mb-0 mt-3 list-group-flush">
      <li class="list-group-item borderless"><span class="small text-uppercase text-muted">ID: ${fullTeam[i].id}</span></li>
      `;
      // Engineers get a GitHub link, Interns a School Row
      if (fullTeam[i].role == "Engineer") {
        cardPart +=`
        <li class="list-group-item borderless"><span class="small text-uppercase text-muted">GitHub: <a href="https://github.com/${fullTeam[i].github}" class="link">${fullTeam[i].github}</a></span></li>
        `}
      else {
        cardPart +=`
        <li class="list-group-item borderless"><span class="small text-uppercase text-muted">School: ${fullTeam[i].school}</span></li>
        `};
      cardPart +=`
      <li class="list-group-item"><a href="mailto:${fullTeam[i].email}" class="link"><i class="fas fa-paper-plane mailicon"></i>${fullTeam[i].email}</a></li>
      </ul>
      </div>
      </div>
      `;
      cardSet.push(cardPart);
    };
  // Remove the commas from the array
  let cards = cardSet.join('');

  // Dump the entire HTML and the cards created
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="luiscabrera77">
    <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/0f5da0b5c9.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="./assets/css/styles.css">
    <title>Luis' Team</title>
  </head>
  <body>
  
  <div class="container py-5">
    <div class="row text-center text-white">
        <div class="col-lg-8 mx-auto">
            <h1 class="display-4">Team Page</h1>
            <p class="lead mb-0">Page dynamically created from a Node.js command-line application.</p>
            <p class="lead">Theme jumpstarted from <a href="https://bootstrapious.com/snippets" class="text-white">
                <u>Bootstrapious</u></a>
            </p>
        </div>
    </div>
  </div>
  
  <div class="container">
    <div class="row text-center">

        <!-- Start Manager -->
        <div class="col-xl-3 col-sm-6 mb-2">
            <div class="bg-white rounded shadow-sm pt-5 pb-2 px-4"><img src="./assets/img/manager.gif" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">${fullTeam[0].name}</h5>
                <span class="small text-uppercase text-muted">${fullTeam[0].role}</span>
                <ul class="list-group mb-0 mt-3 list-group-flush">
                <li class="list-group-item borderless"><span class="small text-uppercase text-muted">ID: ${fullTeam[0].id}</span></li>
                <li class="list-group-item borderless"><span class="small text-uppercase text-muted">OFFICE NUMBER:${fullTeam[0].officeNumber}</span></li>
                <li class="list-group-item"><a href="mailto:${fullTeam[0].email}" class="link"><i class="fas fa-paper-plane mailicon"></i>${fullTeam[0].email}</a></li>
            </ul>
            </div>
        </div>
        <!-- End Manager -->
        ${cards}
    </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  </body>
  </html>
  `;
  }
  
  module.exports = generateHTML;