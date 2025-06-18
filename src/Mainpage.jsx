import { useNavigate } from 'react-router-dom';
import tayshoes from './assets/Tayshoesof.jpeg';

function Mainpage() {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/login');
  };

  return (
    <div className="Container">
      <div className="Intro-main">
        <h2>Welcome to Tayshoes Web Application</h2>
        <hr />
        <p>Tay Shoes is a local shoe store where you can purchase shoes, slippers, sandals, flip-flops, and bags.</p>
        <p>Useful items for vacation. We offer our products in-store and provide services to hotels.</p>
        <br />
        <button className='shopping-button' type='button' onClick={handleStartShopping}>
          Start Shopping
        </button>
      </div>

      <div className="Photo-main">
        <img src={tayshoes} alt="Tayshoes" />
      </div>
    </div>
  );
}

export default Mainpage;
