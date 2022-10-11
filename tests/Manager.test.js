const Manager = require('../lib/Manager');

describe('Check Manager' , () => {
    it('Manager check', () => {
        
        const manager = new Manager('Todd Padre', '1234', 'Todd@Padre.com','115');
        manager.getRole();

        //correct github and role
        expect(manager.role).toBe('Manager');
    })
})