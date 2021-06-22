let Student = [
    {
        StudentId:'100',
        StudentName: 'John',
        Address:'No.4, abc street',
        City:'Bangalore',
        Mark:100
    },

    {
        StudentId:'010',
        StudentName: 'Mathew',
        Address:'No.10, xyz street',
        City:'Chennai',
        Mark:90
    },

    {
        StudentId:'41',
        StudentName: 'Sumathy',
        Address:'No.8, Bunny street',
        City:'Kanchipuram',
         Mark:95  
    },
    {
        StudentId:'10',
        StudentName: 'Sridhar',
        Address:'No.45, Marry street',
        City:'coimbatore',
        Mark:85
    },
    {
        StudentId:'17',
        StudentName: 'Laaraa',
        Address:'No.174, pqr street',
        City:'Kanyakumari',
        Mark:72
    }  
];
const updatedmark =Student.Mark.map(x=>x+20);
console.log(updatedmark);