class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    };

    getName() {
        const name = this.name;
        return name;
    };

    getId() {
        const id = this.id;
        return id;
    };

    getEmail() {
        const email = this.email;
        return email;
    };

    getRole() {
        const role = this.role;
        return role;
    };
};

module.exports = Employee;