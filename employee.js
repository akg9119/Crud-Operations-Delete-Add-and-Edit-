
var aniket = [];

var second = [
  { name: "Aniket", mobileNumber: "9234567890", email: "aniket@gmail.com", designation: "Developer", location: "New York", status: "Active" },
  { name: "Saurabh", mobileNumber: "5876543210", email: "saurabh@gmail.com", designation: "Developer", location: "India", status: "Inactive" },
  { name: "Rushikesh", mobileNumber: "8876543210", email: "rushikesh@gmail.com", designation: "Developer", location: "South Africa", status: "Inactive" },
  { name: "Abhishek", mobileNumber: "7876543210", email: "abhishek@gmail.com", designation: "Developer", location: "San Francisco", status: "Inactive" }

];

aniket = second;


function display() {
  var tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = "";

  for (let i = 0; i < second.length; i++) {
    let row = "<tr>" +
      "<td>" + aniket[i].name + "</td>" +
      "<td>" + aniket[i].mobileNumber + "</td>" +
      "<td>" + aniket[i].email + "</td>" +
      "<td>" + aniket[i].designation + "</td>" +
      "<td>" + aniket[i].location + "</td>" +
      "<td>" + aniket[i].status + "</td>" +
      "<td><button onclick=\"deleteEmployee('" + aniket[i].name + "')\">Delete</button></td>" +
      "</tr>";

    tableBody.innerHTML += row;
  }
}
function deleteEmployee(name) {
  prompt("Are you sure you want to delete the data?");
  for (let i = 0; i < aniket.length; i++) {
    if (aniket[i].name === name) {
      aniket.splice(i, 1); 
      break;
    }
  }
  display(); 
}


function addEmployee(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let mobileNumber = document.getElementById("mobile_number").value;
  let email = document.getElementById("email").value;
  let designation = document.getElementById("designation").value;
  let location = document.getElementById("location").value;
  let status = document.getElementById("status").value;
 
  if (name && mobileNumber && email && designation && location && status) {
    aniket.push({ name: name, mobileNumber: mobileNumber, email: email, designation: designation, location: location, status: status });
 
  }
  else {
    alert("All the information is mandatory")
  }

display();

}
console.log(aniket);




function search() {
  let searchTerm = document.getElementById('search').value.toLowerCase();
  let tableBody = document.getElementById('tableBody');
  let rows = tableBody.getElementsByTagName('tr');
  // aniket = aniket.filter(obj => obj.name.includes(searchTerm));
  // document.getElementById('search').addEventListener('input', search);
  for (let i = 0; i < rows.length; i++) {
    let nameCell = rows[i].getElementsByTagName('td')[0];

    if (nameCell) {
      let name = nameCell.textContent.toLowerCase();

      if (name.includes(searchTerm)) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
}

// function search() {
//   let searchTerm = document.getElementById('search').value.toLowerCase();
//   let filteredAniket = aniket.filter(item => item.name.toLowerCase().includes(searchTerm));
//   display(filteredAniket);
// }




// function deleteEmployee(index) {
//   aniket.splice(index, 1); // Remove the item from the array at the specified index
//   display(); // Update the table display
// }







// aniket = aniket.includes(item => item.name === search);
// aniket = aniket.find(item => item.name === search);





















