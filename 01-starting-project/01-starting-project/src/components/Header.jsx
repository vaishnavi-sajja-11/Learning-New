import logo from '../assets/react-core-concepts.png';
import './Header.css';


const reactDescriptions = ['Fundamentals', 'Crucuial', 'Core'];
function generateInt(max){
  return Math.floor(Math.random() * (max+1));
}



function Header(){
  const getName = reactDescriptions[generateInt(2)];
  return(
    <header>
        <img src={logo} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {getName} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

export default Header;