import Parallax from "parallax-js";
import { useEffect } from "react";

export default function ParallaxEffect() {
  useEffect(() => {
    var scene = document.getElementById("scene");
    new Parallax(scene);
  }, []);

  return (
    <div id="scene">
      <div data-depth="1" className="parallax" />
    </div>
  );
}
