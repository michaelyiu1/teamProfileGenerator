const Engineer = require('../lib/Engineer');

describe('Check Engineer Name' , () => {
    it('Engineer name should be...', () => {
        
        const engineer = new Engineer('Todd Padre', '1234', 'Todd@Padre.com','ToddPadre.github.com');
        engineer.getRole();

        //correct github and role
        expect(engineer.github).toBe('ToddPadre.github.com');
        expect(engineer.role).toBe('Engineer');

    })
})