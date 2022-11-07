const Header = (props) => {
  return (
    <header className="header">
      <img src={props.logodeliveroo} alt="logo Deliveroo" />

      <input type="search" placeholder="Chercher Subway - Rambuteau" />
      <div className="top-menu">
        <div className="top-button">
          <p>0,00 €</p>
        </div>
        <div>
          <p>Inscription ou connexion</p>
        </div>
        <div>
          <p>Menu</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
