var date = new Date();
document.getElementById('date').innerHTML = date.toLocaleDateString("en-US");

function todoList() {
	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value
	var photo = document.getElementById("userImage").value
	var addDiv = document.getElementById("myDiv")

	var userText = document.createTextNode("Username: " + username)
	var commentText = document.createTextNode("Comment: " + comment)

	var p = document.createElement(p)
	var h1 = document.createElement(h1)
	var h2 = document.createElement(h2)
	d = new Date()

	h1.appendChild(userText)
	h2.appendChild(commentText)

	var img = document.createElement('img')
	p.innerHTML = d.toUTCString();
	img.setAttribute('src', photo)

	document.getElementById("myDiv").appendChild(p)
	document.getElementById("myDiv").appendChild(h1)
	document.getElementById("myDiv").appendChild(h2)
	document.getElementById("myDiv").appendChild(img)

}	