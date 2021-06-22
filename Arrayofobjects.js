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
Student.sort((a, b) => {
    let fa = a.StudentName.toLowerCase(),
        fb = b.StudentName.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
console.log("/n Sort the student details by Name: /n");
Student.forEach((e) => {
    console.log(`Student ID: ${e.StudentId} Student Name: ${e.StudentName} Address: ${e.Address} City: ${e.City} Mark:${e.Mark}`);
    return e;
});