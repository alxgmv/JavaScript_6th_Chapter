let firstName;
let lastName;
// let userList = new userList();
function user(firstName, lastName) {
  this.firstName = firstName,
  this.lastName = lastName,
  regDate = new Date();
  return function userLine() {
    let l = this.firstName + ' | ' + this.lastName + ' | ' + this.regDate
    return l;
  }
};
function userList() {
  this.users = [],
  this.add =  function(user) {
    this.users.push(new user(firstName,lastName))
  },
  getAllUsers = function() {
    return this.users;
  }
};
for(;firstName !== null;) {
  firstName = prompt('Enter your name');
  lastName = prompt('Enter your surname');
  userList.add;
};
console.log(userList.getAllUsers);
