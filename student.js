let students=[];
let form1=document.getElementById("form1");
form1.addEventListener("submit",function(event){
event.preventDefault();
addStudent();
});
function addStudent(){
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let age=document.getElementById("age").value;
let course=document.getElementById("course").value;
if(name===""|| email===""|| age===""|| course===""){
    document.getElementById("message").textContent="All fields are required ";
    return;
}
if(age<18){
    document.getElementById("message").textContent="Age must be 18 or above";
    return;
}
//creating a student object
let student={
    name:name,
    email:email,
    age:age,
    course:course,
};
students.push(student);
displayStudent();
form1.reset();
document.getElementById("message").textContent="Form submitted successfully";
}

function displayStudent(){
    let table=document.getElementById("studenttable");
    //clearing the eisting table
    table.innerHTML=`
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>Course</th>
    </tr>
    `;
    for(i=0;i<students.length;i++){
        let row=`
        <tr>
        <td>${students[i].name}</td>
        <td>${students[i].email}</td>
        <td>${students[i].age}</td>
        <td>${students[i].course}</td>
        </tr>
        `
        table.innerHTML+=row;
    }

       
}
