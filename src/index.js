import './styles/main.css';
import { header, homeContent } from './home';

const contentDiv = document.getElementById('content');

contentDiv.appendChild(header());
contentDiv.appendChild(homeContent());
