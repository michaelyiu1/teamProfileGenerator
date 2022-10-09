const employee = require('./Employee');

class Engineer extends employee {

    constructor(name, id, email, githubUser){
        super(name, id, email);
        this.githubUser = githubUser;
    }

    getGithub(){
        return this.githubUser
    }

    getRole(){
        const role = 'Engineer';
        return role
    }
}

module.exports = Engineer;