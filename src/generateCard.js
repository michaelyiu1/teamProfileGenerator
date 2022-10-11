function generateCard(data){

    //Initialize variables
    let specificHTML;
    if(data.role === 'Manager'){
        specificHTML = `<li>Office Number: ${data.officeNumber}</li>`;
    } 
    else if(data.role === 'Engineer'){
        specificHTML = `<li>Github: ${data.github}</li>`;
    }
    else if(data.role === 'Intern') {
        specificHTML = `<li>School: ${data.school}</li>`;
    }

    let html = 
    `<div class="new-card">
        <div class="card-header">
            <h2>${data.name}</h2>
            <h3>${data.role}</h3>  
        </div>
        <div>
            <div class="user-info">
                <ul>
                    <li>Id: ${data.id}</li>
                    <li>Email: ${data.email}</li>
                    ${specificHTML}
                </ul>
            </div>
        </div>
    </div>`

    return html
}


module.exports = generateCard;