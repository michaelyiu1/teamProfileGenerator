const Employee = require('../lib/Employee');

describe('Check Employee Name' , () => {
    it('Employee name should be a name', () => {
        
        const employee = new Employee('Todd Padre', '1234', 'Todd@Padre.com');
        expect(employee.getRole()).toBe('Employee');

        //correct github and role
        expect(employee.name).toBe('Todd Padre');
        expect(employee.id).toBe('1234');
        expect(employee.email).toBe('Todd@Padre.com');
        expect(employee.role).toBe('Employee');
    })
})