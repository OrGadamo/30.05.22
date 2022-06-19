// //dom trask v.2
// var task1 = document.getElementById("task1");
// console.log(task1.innerText); //1
// var task2 = document.getElementById("task2");
// task2.innerText = "my dom app"; //2
// var task3 = document.getElementsByClassName("task3");
// for (var i = 0; i < task3.length; i++) {
//   console.log(task3[i].innerText); //3
// }
// console.log(task2); //4
// console.log(task3[0].innerText); //5
// var task6 = document.getElementsByTagName("p");
// for (var i = 0; i < task6.length; i++) {
//   console.log(task6[i]); //6
// }
// function printName() {
//   var input = document.getElementById("name");
//   document.write("<h2>" + input.value + "</h2>");
// }
// var input1 = document.getElementById("t1");
// console.log(input1);
// input1["type"] = "number";
function printEmployee() {
  var firstname = document.getElementById("first");
  console.log(firstname);
  var lastname = document.getElementById("last");
  var email = document.getElementById("email");
  var department = document.getElementById("department");
  console.log("run");
  var employee = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    department: department.value,
  };
  console.log(employee);
  document.body.innerHTML += "<h1>" + employee.firstname + "</h1>";
  document.body.innerHTML += "<h2>" + employee.lastname + "</h2>";
  document.body.innerHTML += "<h3>" + employee.email + "</h3>";
  document.body.innerHTML += "<h4>" + employee.department + "</h4>";
}
// printEmployee();
