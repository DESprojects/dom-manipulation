const container = document.querySelector('#container');
const paraClass = document.querySelector('.para');
const para1 = document.createElement('p');
const para2 = document.createElement('p');
const content = document.createElement('div');
const h1 = document.createElement('h1');
const h3 = document.createElement('h3');
const div = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

para1.classList.add('paraClass');
para1.style.cssText = "color: red;";
para1.innerText = "Hey, I'm red!";
container.appendChild(para1);

h3.style.cssText = "color: blue;";
h3.innerText = "I'm a blue h3!";
container.appendChild(h3);
div.style.cssText = "border: 2px solid black; backgroundColor: pink;";
h1.innerText = "I'm in a div!";
para2.innerText = "Me too!";
div.appendChild(h1);
div.appendChild(para2);
container.appendChild(div);
