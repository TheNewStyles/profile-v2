import React, { Component } from 'react';

import '../styles/WelcomeSection.css';

class WelcomeSection extends Component {
    constructor(props) {
        super(props);
        this.createStatic();
    }

    createStatic() {
        let canvas = document.createElement("canvas");
        let c = canvas.getContext('2d');

		canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.id = "canvas";

		let imageData = c.createImageData(canvas.width, canvas.height);
        document.body.prepend(canvas);

		(function loop() {

		    for (var i = 0, a = imageData.data.length; i < a; i++) {
		        imageData.data[i] = (Math.random() * 255)|0;
		    }

		    c.putImageData(imageData, 0, 0);
		    requestAnimationFrame(loop);

		})();
    }


    render() {
        return (
            <section id="welcome-section">
                <div className="welcome-container">
                    <h1>TYLER PETERSON</h1>
                    <h3>DEVELOPER</h3>
                    <h3>DESIGNER</h3>
                    <h3>TESTER</h3>
                </div>
                <div id="canvas-layer">
                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WelcomeSection;
