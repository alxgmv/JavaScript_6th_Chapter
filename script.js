 'use strict'
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
  user = user.split(' ');
  if (user.length !== 2) {
    alert('Incorect name!')
  } else {
    this.users.push(new User(user[0], user[1]))
  }
};
UserList.prototype.getAllUsers = function() {
  return this.users;
};
while(true) {
  let userName = prompt('Enter your name and surname, divided by SPACE');
  if (userName === null) {
    break;
  }
  userList.add(userName);
};
console.log(userList.getAllUsers());
