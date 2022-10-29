const Employee = require("./employee");
class Manager extends Employee {
  constructor(name, id, email, location) {
    super(name, id, email);
    
    this.location = location;
  }

  getOffice() {
    return this.location;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
