let Sqaure=(number)=>number*2;
const Hocfn=(func,fn)=>{
    let val=func+5;
    return fn(val);}
let result=Hocfn(20,Sqaure);
console.log("The total= "+result);
