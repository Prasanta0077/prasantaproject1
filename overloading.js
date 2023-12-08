class father{
    constructor(name){
        this.name=name;
        console.log(this.name);
    }
    display(){
        console.log("i am  "+this.name);
    }
    display(vehicle){
        console.log("i am driving"+this.vehicle);
    }

}
var alex= new father("prasanta");
alex.display('bike');
alex.display();