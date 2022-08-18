import './styles/main.css';
import header from './home';

const contentDiv = document.getElementById('content');
console.log(contentDiv);
console.log(header());
contentDiv.appendChild(header());
