import React, { useState, useEffect } from "react";
import Container from "./Container";

const Banner = () => {

  const texts = ["Jashim Uddin", "Frontend Developer", "React Developer"];
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }

    }, typingSpeed);

    return () => clearTimeout(timeout);

  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="bg-[url('/banner2.jpg')] bg-no-repeat bg-center bg-cover py-62 relative ">
      <Container>
        <div className="flex items-center">
          <div className="w-2/3">
            <h1 className="text-white text-[60px]  font-bold">
              Hi I am <span className="text-teal-500">{displayText}</span>
            </h1>
          </div>
          <div className="w-1/3 flex justify-center">
            <div className="h-75 w-75 bg-teal-500 rounded-full"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Banner;
