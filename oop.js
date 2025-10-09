class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.arm = 2;
        this.eye = 2;
    }
}

class Baby extends Human {
    constructor(name, age, toy){
        super(name, age); // pass name and age to parent
        this.toy = toy;   // now toy is defined
    }
}

class Adult extends Human {
    constructor(name, age, job){
        super(name, age); // pass name and age
        this.job = job;   // job is defined
    }
}

const obj = new Adult("John", 30, "Engineer");
console.log(obj);
