export default function subst(str)
    {
     let inde=str.indexOf("Sumathy")   ;
     if(inde!==-1){
         console.log("Substring found!")
     }
     else{
         console.log("Substring not found!");
     }
    }
console.log(subst("Helloo Sumathy!"));