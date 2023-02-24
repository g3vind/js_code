let users = {
  name: "govind",
  location: "vellore",
  email: "g3vind@gmail.com",
  id: 20,
  blog: ["kuch bhi", "nahi kuch"],

  logBlog: function () {
    console.log(this.blog);
  },
};

users.logBlog();
