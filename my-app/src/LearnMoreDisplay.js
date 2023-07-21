import React from "react";

function LearnMoreDisplay({ card }) {
  return (
    <div className="card-container">
      <h2>
        Artist: <br />
        {card.artistDisplayName}
      </h2>
      <h3>
        Culture of origin: <br />
        {card.culture}
      </h3>
      <h3>
        Time period: <br />
        {card.period}
      </h3>
      <h3>
        Medium: <br />
        {card.medium}
      </h3>
      <a href={card.objectURL}> Link for more info </a>
    </div>
  );
}

export default LearnMoreDisplay;
