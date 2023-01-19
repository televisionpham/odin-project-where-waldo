import { useEffect, useState } from "react";
import cat from "../assets/cat.png";
import frog from "../assets/frog.png";
import helicopter from "../assets/helicopter.png";

const Header = (props) => {
  const { isActive } = props;
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 100);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  return (
    <header className="header">
      <div className="logo">Where's Stuff</div>
      <div id="objectsToFind">
        <img src={cat} />
        <img src={frog} />
        <img src={helicopter} />
      </div>
      <div id="timer">
        <span className="digits">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="digits mili-sec">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>
    </header>
  );
};

export default Header;
