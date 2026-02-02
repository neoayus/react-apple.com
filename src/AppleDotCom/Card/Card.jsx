import { PrimaryButton, SecondaryButton } from "../Buttons/Buttons.jsx";
import "./Card.css";

export default function Card({
  theme,
  layout,
  image,
  title,
  desc,
  primaryButtonText,
  secondaryButtonText,
  impInfo,
}) {

  let invertedLayout = {
    backgroundImage: `url(${image})`,
    color: "white",
    flexDirection: "column-reverse",
    paddingTop: "0px",
    paddingBottom: "40px",
  };

  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${image})`,
        color: theme == "dark" ? "white" : "black", 
        // `${layout} == "inverted" ? ${...invertedLayout} : {}` 
        ...(layout === 'inverted' ? invertedLayout : {})
      }}
    >
      <div className="text">
        <p className="text-title"> {title} </p>
        <p className="text-desc"> {desc} </p>
      </div>
      <div className="card-buttons">
        <PrimaryButton> {primaryButtonText} </PrimaryButton>
        <SecondaryButton> {secondaryButtonText} </SecondaryButton>
      </div>
      <pre className="impInfo"> {impInfo} </pre>
    </div>
  );
}