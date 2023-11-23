import anime from "animejs";
import { useEffect } from "react";

const Anime = () => {
  useEffect(() => {
    anime({
      targets: "#myDiv",
      translateX: 250,
      duration: 800,
      easing: "easeInOutSine",
    });
  }, []);

  return <div id="myDiv">Hellosssssssssssssssssssssssssssssss, world!</div>;
};

export default Anime;
