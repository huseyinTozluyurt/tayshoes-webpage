import circuit from './assets/devre.png';

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={circuit} alt="Circuit" />
      <h2>Huseyin Tozluyurt</h2>
      <p>Passionate computer engineering student who aims to gain a career in robotics.</p>
      <h4>Area of Interest</h4>
      <hr />
      <ul>
        <li>Robotics</li>
        <li>AI & ML</li>
        <li>Computer Networks</li>
        <li>Automation</li>
      </ul>
    </div>
  );
}

export default Card;
