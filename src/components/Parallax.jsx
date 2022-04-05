import Parallax from "parallax-js";
import { useEffect } from 'react';

export default function ParallaxEffect() {
    useEffect(() => {
        var scene = document.getElementById('scene');
        new Parallax(scene);
    }, []);

    return (
        <div id="scene" class="scene">
            <img data-depth="1" src="/assets/Desktop.png" style={{height: "calc(100vh - 96px)", width: "auto"}} />
        </div>
    );
};
