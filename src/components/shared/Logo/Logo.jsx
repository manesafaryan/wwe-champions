import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo-container">
        <img
          className="image"
          src={require("../../../assets/logo/wwe-logo.png")}
          alt=""
        />
        <div className="home-page">
          <p className="home-page__title">WWE Champions</p>
          <p className="official-page">Official Page</p>
        </div>
      </div>
  );
}
