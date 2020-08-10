import React from 'react';
import './Testimonials.css';
import User from '../../images/user.jpg'
import User1 from '../../images/user1.jpeg'


const Testimonials = () => {
    return (
        <>
            <section id="testimonials">
                <div className="container">
                    <h1 className="title text-center">WHAT CLIENT SAY</h1>
                    <div className="row offset-1">
                        <div className="col-md-5 testimonials">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eum maiores sed laborum odio veniam omnis magni.</p>
                            <img src={User} alt="testimonial img" />
                            <p className="user-details" ><b>Steve</b><br/>Co-founder at xyz</p>
                        </div>
                        <div className="col-md-5 testimonials">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eum maiores sed laborum odio veniam omnis magni.</p>
                            <img src={User1}alt="testimonial img" />
                            <p className="user-details" ><b>Toni</b><br/>Director at xyz</p>
                        </div>
                    </div>
                </div>
	</section>
        </>
    )
}

export default Testimonials
