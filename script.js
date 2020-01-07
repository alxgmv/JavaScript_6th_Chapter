 // 'use strict'
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = new Date();
};
const userList = new UserList();
function UserList() {
  this.users = []
};
UserList.prototype.add = function(user) {
  if (user.length !== 2) {
    alert('Incorect name!')
  } else {
    firstName = user.slice(0, 1);
    lastName = user.slice(1, 2);
    this.users.push(new User(firstName, lastName))
  }
};
UserList.prototype.getAllUsers = function() {
  return this.users;
};
while(true) {
  let userName = [];
  userName = prompt('Enter your name and surname, divided by SPACE');
  if (userName === null) {
    break;
  }
  userName = userName.split(' ');
  userList.add(userName);
};
console.log(userList.getAllUsers());
