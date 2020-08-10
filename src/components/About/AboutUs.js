import React from 'react';
import Lottie from "react-lottie";
import About from "../../animations/about.json";
import './About-us.css';


const AboutUs = () => {
    return (
       <>
        <section id="about-us">
		<div  className="container">
			<h1 className="title text-center">About us</h1>
			<div className="row">
				<div className="col-md-6 about-us">
					<p className="about-title">Why we're different</p>
					<ul>
						<li>Believe in doing business with honesty</li>
						<li>Believe in doing business with honesty</li>
						<li>Believe in doing business with honesty</li>
						<li>Believe in doing business with honesty</li>
						<li>Believe in doing business with honesty</li>
					</ul>
				</div>
				<div className="col-md-6">
                <Lottie
                    options={{
                        animationData:About,
                    }}
                    height={"100%"}
                    width={"100%"}
                    style={{
                        width: "100%",
                        height: "100%",
                        maxWidth: "700px",
                    }}
                />
				</div>
			</div>
		</div>
	</section>
       </>
    )
}

export default AboutUs
