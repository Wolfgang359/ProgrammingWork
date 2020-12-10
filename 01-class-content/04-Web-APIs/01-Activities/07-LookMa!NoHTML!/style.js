var headerEL = document.createElement("h1");
document.body.appendChild(headerEL);

headerEL.textContent ="Look ma! No HTML!";


var subheader = document.createElement("h2");
document.body.appendChild(subheader);

subheader.textContent = "Isn't this amazing!?"


var image = document.createElement("img");
document.body.appendChild(image);

image.setAttribute("src", "https://www.directivegroup.com/ideas/tools/news/wp-content/uploads/2017/03/smile-9047-9380-hd-wallpapers-1.jpg");
image.setAttribute("alt", "A cute smile")
image.style = "height: 10%; width: 20%"