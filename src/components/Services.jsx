import React from 'react'

import { GiCheckMark } from 'react-icons/gi'

export default function Services() {
    

    return (
        <section id="services">
            <div className="section__header">
                <h5>How Can I Help?</h5>
                <h2>My Services</h2>
            </div>
            <div className="container services__container">

                {/* UX/UI SERVICE CARD */}

                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                    </ul>
                </article>

                {/* WEB DEV SERVICE CARD */}

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                    </ul>
                </article>

                {/* CONTENT CREATION CARD */}

                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                        <li className="service__item">
                            < GiCheckMark className="service__icon"/>
                            <p>Engineer reflection blockchain callback hell Twitter optimize bootcamp DAG progressive web app.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}
