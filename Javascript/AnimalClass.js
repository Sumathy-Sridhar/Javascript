class AnimalClass{
    constructor(type,sound){
        this.type=type;
        this.sound=sound;
    }
    Animalsounds(sound){
        if(sound==="purr"){
            console.log("Cat purrs");
        }else if(sound==="roar"){
            console.log("Lion Roars")
        }else if(sound==="quack"){
            console.log("Duck Quacks");
        }else if (sound==="Bark"){
            console.log("Barking Dogs Seldom Bite");
        }
    }
}
class AnimalBehavior extends AnimalClass{
    constructor(type,sound,color){
        super(type,sound);
        this.color=color;
   }
   AnimalAction(){
       console.log("Animal Behaviours displayed!");
   }
}
let ani=new AnimalBehavior("Dog","Bark","Black");
ani.Animalsounds("Bark");
ani.AnimalAction();