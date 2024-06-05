import "../assets/styles/Features.css";

export default function Features() {
  return (
    <div className="feature-container">
      <div className="feature-content">
        <h2>Who we are</h2>
        <p>
          We are a collaboration of Non Govt. and professionals working to
          ensure that government spending is done fairly, openly, efficiently,
          and creates the best value for money and best outcomes for Europe. We
          are working at the national and EU levels to advance the principles of
          openness in spending of funds, procurement, and company ownership
          within the EU.
        </p>
        <div className="feature-link">See more</div>
      </div>
      <div className="image-holder">
        <div className="column">
          <div className="image-container">
            <img
              src={require("../assets/images/adriana.jpg")}
              alt="Card "
              className="feature-card-image"
            />
          </div>
          <p>Adriana Homolova</p>
          <div className="image-container">
            <img
              src={require("../assets/images/kraolis.jpg")}
              alt="Card "
              className="feature-card-image"
            />
          </div>
          <p>Karolis Granickas</p>
        </div>
        <div className="column">
          <div className="image-container">
            <img
              src={require("../assets/images/sandor.jpg")}
              alt="Card "
              className="feature-card-image"
            />
          </div>
          <p>Sandor Lederer</p>
          <div className="image-container">
            <img
              src={require("../assets/images/girl4.jpg")}
              alt="Card "
              className="feature-card-image"
            />
          </div>
          <p>name</p>
        </div>
      </div>
    </div>
  );
}
