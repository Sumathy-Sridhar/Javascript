let MapDemo=new Map();
let key1=100;
let key2=110;
let key3=120;
let key4=130;
let key5=140;

console.log("Elements of Map:");
MapDemo.set(key1,"Sumathy");
MapDemo.set(key2,"Mathy");
MapDemo.set(key3,"Mathew");
MapDemo.set(key4,"John");
MapDemo.set(key5,"Aishu");
MapDemo.forEach((v,k)=>{
    console.log(k+","+v);
})
key1=null;
console.log("\n Advantage of Map in handling null values ");
MapDemo.forEach((v,k)=>{
    console.log(k+","+v);
})