const UserNames=["Sumathy","Sridhar","Mathew","John","Brown","Cony","Aishu","Milk","Airaa","Jeshru"];

    var newarray=UserNames.map((ele,idx) =>{
        if(idx%2==0){
            return `Er.${ele}`;
        }
        else{
            return `Dr.${ele}`;
        }
    })

for(let i=0;i<newarray.length;i++){
    console.log("Array Elements after Adding Prefix :")
    console.log(`${i+1}=>`,newarray[i]);
}