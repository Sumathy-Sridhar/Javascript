class StringExist{
    static isSub(str)
    {
     let inde=str.indexOf("Sumathy")   ;
     if(inde!==-1){
         console.log("Substring found!")
     }
     else{
         console.log("Substring not found!");
     }
    }
}
StringExist.isSub("Hi! This is Sumathy");