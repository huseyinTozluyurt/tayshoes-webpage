import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import wp from './assets/wp.png';
import telephone from './assets/telephone.png';

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <p>CONTACT US</p>
      <p>
        <a href="tel:+90543252353224" className="contact">
          <img src={telephone} alt="phone icon" width="15" className="Phone" /> +90 543 252 35 24
        </a>
      </p>
      <div className="logos">
        <a href="#"><img src={wp} alt="whatsapp" width="50" /></a>
        <a href="#"><img src={instagram} alt="instagram" width="50" /></a>
        <a href="#"><img src={facebook} alt="facebook" width="50" /></a>
      </div>
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.2027489071615!2d31.005746375649377!3d36.88549767222298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c37c0b05991b43%3A0xb8204870d1182b9f!2sTay%20Shoes!5e0!3m2!1str!2str!4v1741516084099!5m2!1str!2str"
        width="300"
        height="200"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps - Tay Shoes"
      ></iframe>
      <br />
      &copy; 2025 Tay Shoes. All rights reserved.
    </footer>
  );
}

export default Footer;
