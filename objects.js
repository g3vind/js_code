let users = {
  name: "govind",
  id: 100,
  role: "admin",
  blogs: ["mohit is chutiya", "abhilash is a bigger chutiya"],
  login: function () {
    console.log("user is logged in");
  },
  logout: function () {
    console.log("user is logged out");
  },
};
// console.log(users);

// console.log(users.name);
// users.id = 69;
// console.log(users.id);
// console.table(users);

// console.log(typeof users);

users.login();
users.logout();
