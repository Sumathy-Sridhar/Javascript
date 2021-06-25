let wmapdemo=new WeakMap();
let key1={name:"Employee"};
let key2={company:"Company"};
wmapdemo.set(key1,"Mathy");
wmapdemo.set(key2,"SRM Technologies");
console.log("Fecthing key1  value: "+wmapdemo.get(key1));
key2=null;
console.log("Key2 value after null: "+wmapdemo.get(key2));