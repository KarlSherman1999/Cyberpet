const inquirer = require("inquirer");

class Animal {
    hunger = 100;
    thirst = 100;
    stamina = 100;
    health = 100;
    boredom = 100;
    money = 100;
    food = 5;
    water = 5;
    eat(){
        this.hunger + 20;
        this.food - 1;
    }
    drink(){
        this.thirst + 20;
        this.water - 1;
    }
    sleep(){
        this.stamina == 100;
        this.boredom - 10;
    }
    vet(){
        this.health == 100;
        this.money - 30;
    }
    walk(){
        this.stamina - 20;
        this.hunger - 10;
        this.thirst - 10;
    }
    play(){
        this.stamina - 40;
        this.hunger - 20;
        this.thirst -20;
    }
    shop(drinkAmount,foodAmount){
        this.water + drinkAmount;
        this.food + foodAmount;
    }
    starve(){
        if (this.hunger <= 0 || this.thirst <= 0 || this.health <= 0){
            console.log("Your pet has died.");
            console.log("Game Over");
            restart();
        }
        else if (this.boredom <= 0){
            console.log("Your pet has ranaway from home.");
            console.log("Game Over");
            restart();
        }
    }
}

class Dog extends Animal {
    constructor(name){
        this.name = name;
    }
}
class Cat extends Animal{
    constructor(name){
        this.name = name;
    }
}

class Rabbit extends Animal{
    constructor(name){
        this.name = name;
    }
}

const init = () => {
    inquirer
    .prompt([
        {
        type: "list",
        name: "pet",
        message: "What type of pet would you like to raise?",
        choices: ["dog", "cat", "rabbit"]
        },
        {
        type: "input",
        name: "name",
        message: `What will you name your pet?`,
        },
    ])
    .then((answers) => {
        console.table(answers)
    })
    .then(() => event())
}

const event = () =>{
    inquirer
    .prompt([
        {
        type: "list",
        name: "start question",
        message: `What do you want to do with your pet?`,
        choices: ["eat", "drink", "sleep", "walk", "play","shop"],
        },
    ])
    .then(() => event())
}

const restart = () => {
    init();
};

init();
