import React from "react";
import PropTypes from "prop-types";
import NoPopCorn from "../assets/NoPopCorn.png";

function CreateGallery({
  title,
  imageUrl,
  details,
  mediaType,
  id,
  note,
  navigate,
}) {
  const getBorderColorA4 = (x) => {
    if (x < 50) return "border-red";
    if (x < 70) return "border-orange";
    return "border-green";
  };

  const handleClick = () => {
    console.info("Card clicked for:", title, id);
    navigate();
    console.info("navigate", navigate());
  };

  return (
    <div
      className="A4card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      style={{ cursor: "pointer" }}
    >
      <div className="A4card-header">
        {imageUrl ? (
          <div
            className="A4card-img"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${imageUrl})`,
            }}
          />
        ) : (
          <div
            className="A4card-img"
            style={{
              backgroundImage: `url(${NoPopCorn})`,
            }}
          />
        )}
        {note && (
          <div
            className={`A4focus-note ${getBorderColorA4(
              Math.round(note * 10)
            )}`}
          >
            {Math.round(note * 10)}%
          </div>
        )}
      </div>
      <div className="A4card-body">
        <div className="A4card-title">{title}</div>
        <div className="A4card-detail">{details}</div>
      </div>
    </div>
  );
}

CreateGallery.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  note: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default CreateGallery;
