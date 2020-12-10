var main = document.getElementById('main');
var articles = document.getElementById('articles');

articles.children[0].lastElementChild.style.color = "white";
articles.children[0].style.fontSize = "50px";
articles.previousElementSibling.style.background = "black";

main.childNodes[1].style.textDecoration = "underline";
main.lastElementChild.style.fontSize = "50px";
main.firstElementChild.style.color = "white";

articles.setAttribute('style', 'background: pink;');
articles.setAttribute('data-whois', 'fashion');

var google = document.getElementById('google');

google.setAttribute('href', 'https://yahoo.com');
google.setAttribute('target', '_blank');