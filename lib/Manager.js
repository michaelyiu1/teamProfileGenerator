const employee = require('./Employee');

class Manager extends employee {
    
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        const role = 'Manager';
        return role
    };

}

module.exports = Manager;