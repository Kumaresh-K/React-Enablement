import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactAdjective = ['Fundamental', 'Core', 'Crucial'];

function genRandomNumber(max) {
  return Math.floor(Math.random() * (max));
}

export default function Header() {
    return <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactAdjective[genRandomNumber(reactAdjective.length)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  }