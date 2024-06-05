import "../assets/styles/Campaign.css";

export default function Campaign() {
  return (
    <div className="campaign-conatainer">
      <div className="campaign-header">
        <h1>Campaigns</h1>
        <p>
          We aim to stop public funds siphoning off and we have a plan that will
          help. We are working at the national and EU levels to advance.
        </p>
      </div>
      <div className="campaign-card-container">
        <div className="campiagn-card">
          <img
            src={require("../assets/images/campaign1.jpg")}
            alt="Card "
            className="card-image"
          />
          <div className="card-content">
            <h2>Open Data Directive</h2>
            <p>
              In view of Russia’s military action against the Ukrainian people,
              being concerned about ensuring that European funds In view of
              Russia’s military action against the Ukrainian people,
            </p>
            <div className="card-link">Learn more</div>
          </div>
        </div>
        <div className="campiagn-card">
          <img
            src={require("../assets/images/campaign2.jpg")}
            alt="Card "
            className="card-image"
          />
          <div className="card-content">
            <h2>Beneficial Ownership</h2>
            <p>
              In view of Russia’s military action against the Ukrainian people,
              being concerned about ensuring that European funds In view of
              Russia’s military action against the Ukrainian people,
            </p>
            <div className="card-link">Learn more</div>
          </div>
        </div>
        <div className="campiagn-card">
          <img
            src={require("../assets/images/campaign3.jpg")}
            alt="Card "
            className="card-image"
          />
          <div className="card-content">
            <h2>EU Recovery Transparency</h2>
            <p>
              In view of Russia’s military action against the Ukrainian people,
              being concerned about ensuring that European funds In view of
              Russia’s military action against the Ukrainian people,
            </p>
            <div className="card-link">Learn more</div>
          </div>
        </div>
      </div>
    </div>
  );
}
