// --- Exercise 1: Define String.filter()
String.prototype.filter = function (strBanned) {
    // return this.replaceAll(strBanned, "");
    var strTmp = this;
    for (let i = 0; i < strBanned.length; i++)
        strTmp = strTmp.replaceAll(strBanned[i], "");
    return strTmp;    
} 
console.log("This not house is not nice!".filter(['not', 'is']));

// --- Exercise 2: Define Array.BubbleSort()
Array.prototype.bubbleSort = function() {
    var arrTmp = this;
    for (let i = 0; i < arrTmp.length - 1; i++)
        for (let j = 0; j < arrTmp.length - i; j++){
            if (arrTmp[j] > arrTmp[j + 1]){
                let tmp = arrTmp[j];
                arrTmp[j] = arrTmp[j + 1];
                arrTmp[j + 1] = tmp;
            }
            
        }
    return arrTmp;        
}
console.log([6,4,0, 3,-2,1].bubbleSort());

// --- Excerise 3:
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hello world!!!");
}
// ----- Teacher
function Teacher(name, subject){
    Teacher = Person.call(this, name);
    this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype); // Using for update sayHi() 
Teacher.prototype.teach = function(){
    console.log(this.name + ' is now teaching ' + this.subject);
}
// ----- Create a Teacher Object and call teach()
var teacherTina = new Teacher('Tina', 'WAP');
teacherTina.teach();
teacherTina.sayHi();

// ========== Using Object create
const PersonObj = {
    name: 'Default',
    setName: function(name){
        this.name = name;
    }
}
// --- Create Teaccher: Using Oject.create()
const TeacherObj = Object.create(PersonObj);
TeacherObj.teach = function(subject){
    console.log(this.name + ' is now teaching ' + subject);
}
// ---- Create Wiliam as TeacherObject
const william = Object.create(TeacherObj);
william.setName('William Hanh');
william.teach('Nothing');

// ======== Exercise 4: Using Object prototype
const PersonEx = {
    name: 'William',
    age: 20,
    greeting: function(){
        console.log('Greeting, my name is: ' + this.name + ' and I am ' + this.age + ' years old.');
    },
    salute: function(){
        console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!');
    }
}

// ----- Student
const StudentEx = Object.create(PersonEx);
StudentEx.setMajor = function(major){
    this.major = major;
}
StudentEx.greeting = function (){
    console.log('Hey, my name is ' + this.name + ' and I am studying ' + this.major);
}
// ----- Professor
const ProfessorEx = Object.create(PersonEx);
ProfessorEx.setDepartment = function(department){
    this.department = department;
}
ProfessorEx.salute = function(){
    console.log('Good day, my name is ' + this.name + ' and I am in the ' + this.department + ' department.');
}
// ----- Create Object and execute
const student01 = Object.create(StudentEx);
student01.setMajor('CS');
student01.greeting();
student01.salute();

const prof01 = Object.create(ProfessorEx);
prof01.setDepartment('Utopia');
prof01.greeting();
prof01.salute();

// ============ Exercise 4: Using function contructor
function PersonExx(name, age){
    this.name = name;
    this.age = age;
}
PersonExx.prototype.greeting = function(){
    console.log('Greeting, my name is: ' + this.name + ' and I am ' + this.age + ' years old.');
}
PersonExx.prototype.salute = function(){
    console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!');
}
// ----- StudentExx
function StudentExx(name, age, major){
    PersonExx.call(this, name, age);
    this.major = major;
}
StudentExx.prototype = Object.create(PersonExx.prototype);
StudentExx.prototype.greeting = function(){
    console.log('Hey, my name is ' + this.name + ' and I am studying ' + this.major);
}
// ----- ProfessorExx
function ProfessorExx(name, age, department){
    PersonExx.call(this, name, age);
    this.department = department;
}
ProfessorExx.prototype = Object.create(PersonExx.prototype);
ProfessorExx.prototype.salute = function(){
    console.log('Good day, my name is ' + this.name + ' and I am in the ' + this.department + ' department.');
} 
// ----- Create object from StudentExx and ProfessorExx
const stu02 = new StudentExx('William Exx', 21, 'CS Exx');
stu02.greeting();
stu02.salute();

const prof02 = new ProfessorExx('Prof Exx', 40, 'Utopia');
prof02.greeting();
prof02.salute();