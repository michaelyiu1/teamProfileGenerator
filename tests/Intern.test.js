const intern = require('../lib/Intern');

describe('Check intern Name' , () => {
    it('Check intern name', () => {
        
        const Intern = new intern('Todd Padre', '1234', 'Todd@Padre.com','Newbury');

        //correct Name
        expect(Intern.name).toBe('Todd Padre');
        expect(Intern.school).toBe('Newbury');
    })
})