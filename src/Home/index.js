import React, { useEffect, useState } from "react";
import Nav from "../NavigationBar";
import "./home.css";
import Footer from "../Footer/footer";
import Portfolio from "../Portfolio";
import MessageBubble from "./MessageBubble";

function Home() {
  const [hoveredImage, setHoveredImage] = useState(null);

  // Scroll effect on load if the URL contains #my-work
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash === "my-work") {
      const element = document.getElementById("my-work");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, []);

  // Optional: Image preloading to improve performance
  useEffect(() => {
    const imageUrls = [
      "/homeImages/amandaHome.png",
      "/homeImages/beli.png",
      "/homeImages/camera.png",
      "/homeImages/jam.png",
      "/homeImages/matcha.png",
      "/homeImages/postcard.png",
      "/homeImages/receiptify.png",
    ];

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Hover messages configuration
  const hoverConfig = {
    "amandaHome.png": {
      message: "Hey, I'm Amanda! 👋🤸‍♀️",
      className: "amanda-hover",
    },
    "beli.png": {
      message: "Cafe hopping and rating bites 🥐",
      className: "beli-hover",
    },
    "camera.png": {
      message: "I love capturing moments on my digital camera",
      className: "camera-hover",
    },
    "jam.png": {
      message: "I look for prints and trinkets wherever I go 🏞️🗝️",
      className: "jam-hover",
    },
    "matcha.png": {
      message: "An iced matcha is my love language ☁️🍵",
      className: "matcha-hover",
    },
    "postcard.png": {
      message: "Some more about me 🙂‍↕️💌",
      className: "postcard-hover",
    },
    "receiptify.png": {
      message: "My life's soundtrack 🎧",
      className: "receiptify-hover",
    },
  };

  return (
    <div>
      <Nav />
      <div>
        <div className="middle">
          <h2 className="fade1">
            <div className="kulim-park-semibold amanda">AMANDA FONG</div>
          </h2>
        </div>
        <div className="middleImage">
          {Object.keys(hoverConfig).map((imageName) => (
            <img
              key={imageName}
              className="fade1 portfolioimage"
              src={`/homeImages/${imageName}`}
              alt={imageName.replace(".png", "")}
              loading="lazy"
              onMouseEnter={() => setHoveredImage(imageName)}
              onMouseLeave={() => setHoveredImage(null)}
            />
          ))}

          {/* Hover Message Bubble */}
          {hoveredImage && (
            <div
              className={`hover-text ${hoverConfig[hoveredImage].className}`}
            >
              <MessageBubble
                message={hoverConfig[hoveredImage].message}
                tailPosition={
                  hoveredImage === "amandaHome.png"
                    ? "left"
                    : hoveredImage === "beli.png"
                    ? "top-right"
                    : hoveredImage === "receiptify.png" ||
                      hoveredImage === "jam.png"
                    ? "top-left"
                    : "right"
                }
              />
            </div>
          )}
        </div>
        <div className="textHome fade1">
  <h4>I'm a Boston based product designer passionate about crafting inclusive <br></br>digital solutions through <span className="green-libre">code & creativity</span></h4>
  <hr className="green-line" />

  <p>Currently designing experiences @ <a href="https://s2nhealth.com" target="_blank" rel="noopener noreferrer">S2N Health</a></p>
  <p>Previous software engineer intern @ <a href="https://www.cboe.com" target="_blank" rel="noopener noreferrer">Cboe</a> & cloud O365 developer co-op @ <a href="https://www.coverys.com" target="_blank" rel="noopener noreferrer">Coverys</a></p>
</div>
      </div>

      <div id="my-work" className="my-work">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
