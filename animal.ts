class Animal {
name:string;
constructor(name:string){this.name=name};
move(distance:number){};
makeSound(){};
}

class Tiger extends Animal{
    constructor(){
        super("Tiger");
    }
    move(distance:10){
        super.move(distance);
    }
    makeSound(){
        super.makeSound();
    }
}
class Lion extends Animal{
    constructor(){
        super("Lion");
    }
    move(distance:12){
        super.move(distance);
    }
    makeSound(){
        super.makeSound();
    }
}
class Zebra extends Animal{
    constructor(){
        super("Zebra")
    }
    move(distance:6){
        super.move(distance);
    }
    makeSound(){
        super.makeSound();
    }
}
class Elephant extends Animal{
    constructor(){
        super("Elephant");
    }
    move(distance:4){
        super.move(distance);
    }
    makeSound(){
        super.makeSound();
    }
}