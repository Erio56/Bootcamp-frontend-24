type Move = {name: string, power: number};


function checkPowerPoint(target: Pokemon, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: [Move]) {
      // console.log(this)
      if (this.ppAvailable > 0) {
          console.log(`${this.name} used ${args[0].name}!`);
          this.ppAvailable -= 1;
          return originalMethod.apply(this, args);
      } else {
          console.log(`${this.name} has no power points left!`);
          return null;
      }
    };

    return descriptor;
}


class Pokemon {
  name: string;
  ppAvailable: number = 1;
  constructor(name: string, ppAvailable: number) {
    this.name = name;
    this.ppAvailable = ppAvailable;
  }
  
  @checkPowerPoint
  figth(move: Move) {
    console.log(`${this.name} used ${move.name}!`);
    this.ppAvailable -= 1;
  }
}
  

const move = {name: 'thunderbolt', power: 90};
const pikachu = new Pokemon('pikachu', 1);
pikachu.figth(move);
pikachu.figth(move);
  

