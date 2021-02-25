import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

  // this component handles the news headlines on the right side of the Feed

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Alexander just created this LinkedIn clone",
        "Top news - 9999 readers"
      )}
      {newsArticle(
        "Coronavirus Updates: Romania reopens schools",
        "Top News - 7943 readers"
      )}
      {newsArticle(
        "When will cruise ships sail again?",
        "Stock Market - 4523 readers"
      )}
      {newsArticle(
        "Bitcoin rallies again breaking the 40000$ resistance",
        "Cryptocurrencies - 2257 readers"
      )}
    </div>
  );
}

export default Widgets;
