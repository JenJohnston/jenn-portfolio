import React, {useEffect} from 'react'

import AOS from 'aos';
import "aos/dist/aos.css";

import { GiCheckMark } from 'react-icons/gi'

export default function Services() {

    useEffect(() => {
        AOS.init({
          duration : 2000,
          disable: false
        });
      }, []);
    
    return (
        <section id="services">
            <div className="section__header">
                <h5>How Can I Help?</h5>
                <h2>My Services</h2>
            </div>
            <div className="container services__container">

                {/* UX/UI SERVICE CARD */}

                <article className="service" data-aos="flip-up">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Creating visually appealing, brand strengthening digital interfaces that attract and retain users</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Low/High fidelity wireframes create a high-level concept of information architecture and interaction design</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Interactive prototyping to visually represent page structure, layout and the overall feeling of the site</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>User research and testing to help define the goals and intentions of visitors to your website.</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>An inclusive design process that ensures you are getting a website that fills your exact needs</p>
                        </li>
                    </ul>
                </article>

                {/* WEB DEV SERVICE CARD */}

                <article className="service" data-aos="flip-down">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Fast loading, fully functional websites built with modern frameworks like React, Gatsby or Vue.</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Integration with modern content management services like Sanity.io make updating your site easy</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Integration with backend API's written in Django or Laravel for fullstack development</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Building and integrating databases using MySQL, MongoDB or Postgres for your project</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Implement WebGL libraries like three.js or pixi to add stunning 3D effects to your website</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>24/7 customer support and client care services after your project is deployed to the web</p>
                        </li>
                    </ul>
                </article>

                {/* CONTENT CREATION CARD */}

                <article className="service" data-aos="flip-up">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Industry standard white hat SEO practices and SEO content optimization for your website or application</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Keyword research to find words that your audience searches based on intent, volume and competition</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>User content optimization matches user search intent with information they need about your business</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Social Media and Email templating to help promote your business and expand your reach on the web</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Graphic and image optimization to retain users and ensure that your website loads quickly and smoothly.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}
