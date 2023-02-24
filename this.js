let users = {
  name: "govind",
  location: "vellore",
  email: "g3vind@gmail.com",
  id: 20,
  blog: ["kuch bhi", "nahi kuch"],

  logBlog() {
    console.log("this user has written blogs like ");
    this.blog.forEach((blog) => {
      console.log(blog);
    });
  },
};

users.logBlog();
