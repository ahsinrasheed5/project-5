import React from 'react';
import './Banner.css';
import Lottie from "react-lottie";
import Teamwork from "../../animations/teamwork.json";
import  wave from '../../images/wave.png'

const Banner = () => {
    return (
        <>
            <section id="banner">
		<div className="container">
			<div className="row">
				<div  className="col-md-6">
					<p className="promo-title">BEST DIGITAL AGENCY</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eius suscipit facere culpa expedita eaque tempora distinctio nulla? Saepe odio dolores non.</p>
					<a href="/" className="play-btn">Get Started </a>
				</div>
				<div className="col-md-6 text-center">
                <Lottie
                    options={{
                        animationData:Teamwork,
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
		<img src={wave} className="bottom-img" alt="wave" />
	</section>
        </>
    )
}

export default Banner
