function generateHTML(cards){

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./src/style.css">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    
        <main>
            <div class="cards">
                <!--insert cards here-->
                ${cards}    
            </div>
        </main>

    </body>
    </html>
    ` 
}

module.exports = generateHTML;