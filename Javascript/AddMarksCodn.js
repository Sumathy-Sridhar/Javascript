let Student = [
    {
        StudentId:'100',
        StudentName: 'John',
        Address:'No.4, abc street,600023',
        City:'Bangalore',
        Mark:100
       
    },

    {
        StudentId:'010',
        StudentName: 'Mathew',
        Address:'No.10, xyz street,,600052',
        City:'Chennai',
        Mark:90
    },

    {
        StudentId:'41',
        StudentName: 'Sumathy',
        Address:'No.8, Bunny street,600002',
        City:'Kanchipuram',
         Mark:95 
    },
    {
        StudentId:'10',
        StudentName: 'Sridhar',
        Address:'No.45, Marry street,600023',
        City:'coimbatore',
        Mark:85
    },
    {
        StudentId:'17',
        StudentName: 'Laaraa',
        Address:'No.174, pqr street,600012',
        City:'Kanyakumari',
        Mark:72,
        
    }  
];
console.log("\n Manipulations in student details (Add 20 marks to all) : \n");
const newstudents=Student.map((e)=>{
    e.Mark+=20;
    return e}).map((e)=>{ 
        if(e.Address.includes('600023'))
        {
            e.Mark+=15;
        }  
        console.log(`StudentName:${e.StudentName}, City:${e.City}, StudentId:${e.StudentId}, Adrress:${e.Address}, Marks:${e.Mark}`);
        return e;  
    });