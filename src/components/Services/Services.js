import React from 'react';
import Lottie from "react-lottie";
import Scan from "../../animations/scan.json";
import FallingParcel from "../../animations/fallingParcel.json";
import Registration from "../../animations/registration.json";

import "./Services.css";



const Services = () => {
    return (
        <>
        <section id="services">
		<div className="container text-center">
			<h1 className="title">WHAT WE DO ?</h1>
			<div className="row text-center">
				<div className="col-md-4 services">
                <Lottie
                    options={{
                        animationData:Scan,
                    }}
                    height={"100%"}
                    width={"100%"}
                    style={{
                        width: "80%",
                        height: "100%",
                        maxWidth: "700px",
                    }}
                />

					<h4>Growth Marketing </h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eius suscipit facere</p>
				</div>
				<div className="col-md-4 services">
					
                <Lottie
                    options={{
                        animationData:FallingParcel,
                    }}
                    height={"100%"}
                    width={"100%"}
                    style={{
                        width: "80%",
                        height: "100%",
                        maxWidth: "700px",
                    }}
                />
					
                    <h4>Online Branding </h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eius suscipit facere.</p>
				</div>
				<div className="col-md-4 services">
                <Lottie
                    options={{
                        animationData:Registration,
                    }}
                    height={"100%"}
                    width={"100%"}
                    style={{
                        width: "80%",
                        height: "100%",
                        maxWidth: "700px",
                    }}
                />
					<h4>Animation Ads </h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eius suscipit facere .</p>
				</div>
			</div>
			{/* <button type="button" className="btn btn-primary">All Services</button> */}
		</div> 

	</section>
        </>
    )
}

export default Services
