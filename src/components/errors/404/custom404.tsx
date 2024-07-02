import React from "react";
import "./custom404.css";

const Custom404: React.FC = () => {
  return (
    <main className="bg-zinc-900">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="bg-purple">
            <div className="starts">
              <div className="central-body">
                <img
                  className="image-404"
                  src="/images/404.svg"
                  width="300px"
                />
                <a href="/" className="btn-go-home" target="_blank">
                  WRÓĆ DO STRONY GŁÓWNEJ :)
                </a>
              </div>
              <div className="objects">
                <img
                  className="object_rocket"
                  src="/images/rocket.svg"
                  width="40px"
                />
                <div className="earth-moon">
                  <img
                    className="object_earth"
                    src="/images/earth.svg"
                    width="100px"
                  />
                  <img
                    className="object_moon"
                    src="/images/moon.svg"
                    width="80px"
                  />
                </div>
                <div className="box_astronaut">
                  <img
                    className="object_astronaut"
                    src="/images/astronaut.svg"
                    width="140px"
                  />
                </div>
              </div>
              <div className="glowing_stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Custom404;
