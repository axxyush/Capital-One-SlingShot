import React from "react";
import image1 from "./../Images/image1.png";
import image2 from "./../Images/image2.png";
import image3 from "./../Images/image3.png";
import image4 from "./../Images/image4.png";

function BoxOne() {
  return (
    <>
      <div className="box1">
        <div className="inside">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  style={{ height: "300px" }}
                  src={image1}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active">
                <img
                  style={{ height: "300px" }}
                  src={image2}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active">
                <img
                  style={{ height: "300px" }}
                  src={image3}
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="carousel-item">
                <img
                  style={{ height: "300px" }}
                  src={image4}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev "
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxOne;
