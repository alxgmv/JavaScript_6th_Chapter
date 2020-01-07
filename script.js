// 'use strict'
let firstName;
let lastName;
let user = new User(firstName, lastName);
let userlist = new UserList();
for (;firstName != null;) {
  firstName = prompt('Enter your name');
  lastName = prompt('Enter your surname');
  userlist.add(user);
}

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = new Date();
  return this.userLine = function() {
    return this.firstName + ' | ' + this.lastName + ' | ' + this.regDate
  }
}
User();
console.log(userLine());

function UserList() {
  this.users = [],
  this.add =  function() {
    this.users.push(user(firstName, lastName))
  },
  this.getAllUsers = function() {
    return this.users;
  }
};
UserList();
console.log(getAllUsers());
