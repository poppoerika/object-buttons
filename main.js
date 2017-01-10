function Employee(employeeName, id){
    this.name = employeeName;
    this.id = id;
    this.info = "This employee's name is " + this.name + " and his/her id is " + this.id;
    this.showInfo = function() {
        alert(this.info);
    }
}

var employee1 = new Employee("Erika", 48275);
var employee2 = new Employee("Justin", 23532);

Employee.prototype.greet = function() {
    alert("Greetings, " + this.name + "!");
};