$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("fM2SufCoidGrzm8dnIAAIDgQwNzmtaMqxBjeNr8z", "eJyiFANWq7ZE79wwVsnhOqe0ZFEWK7qbJIhPkSst");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });

var Blog = Parse.Object.extend("Blog");

var Blogs = Parse.Collection.extend({
	model: Blog
});

var blogs = new Blogs();

blogs.fetch({
	success: function(blogs) {
		console.log(blogs);
	},
	error: function(blogs, error) {
		console.log(error);
	}
});
});
