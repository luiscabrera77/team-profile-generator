function generateHTML(fullTeam) {

return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="author" content="Ghibli">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="./images/favicon.ico" rel="shortcut icon">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;600&family=Merriweather:wght@300;400;700;900&family=Nunito:wght@200;300;400;600&family=PT+Sans:wght@400;700&family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./style.css">
  <title>Home | My Team</title>
</head>
<body>
  <header>
    <h1>Team Members Profile</h1>
  </header>
  <main>
   <section class="row">
    ${fullTeam}
   </section>
  </main>
</body>
</html>
`;
}

module.exports = generateHTML;