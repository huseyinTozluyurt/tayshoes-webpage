import tayshoes from './assets/tayshoes.jpg'
import shoppingCard from './assets/shoppingCard.jpg'
import profileImage from './assets/profileImage.png'

function Navbar(){
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li><a href="#"><img className="profileImage" src={profileImage} alt="Image of Profile"></img></a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Start Shopping</a></li>
                    <li><a><img className="shoppingCard" src={shoppingCard} alt="image of ShoppingCard"></img></a></li>
                </ul>
            </nav>

        </div>

);
}
export default Navbar