const numberslist=[21,35,43,15,65,73,85,96,101,141];
console.log("\nPrime numbers extracted from the list: \n");
for(let i=0;i<numberslist.length;i++) 
{
    let st=numberslist[i];
    
    for(let j=2;j<st;j++)
    
    {
    var b=true;
    if(st%j==0) 
    {
        b=false;  
        break;
    }
    else
    {
        b=true;
    }

}
if(b)
{
console.log(st);
}
}
