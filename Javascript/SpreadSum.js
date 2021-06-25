//Calculating sum Using SPread operator
let sumres=0;
function sumFunc(num,...data){
    for(let i=0;i<data.length;i++)
    {
        sumres+=data[i];
    }
    sumres+=num;
    return sumres;
}
console.log("Sum of Values: \n"+sumFunc(10,20,30,40,50,60,70));
