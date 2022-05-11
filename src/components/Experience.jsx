import React from 'react'

import { HiOutlineBadgeCheck } from 'react-icons/hi'

export default function Experience() {
    

    return (
        <section id="experience">
           <div className="section__header">
                <h5>My Skills...</h5>
                <h2>My Experience...</h2>
           </div>
           <div className="container experience__container">
               <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <HiOutlineBadgeCheck className='experience__icon'/>
                            <div>
                                <h4>HTML5</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <HiOutlineBadgeCheck className='experience__icon'/>
                            <div>
                                <h4>SCSS</h4>
                                <small>Intermediate</small>
                            </div>          
                        </article>
                        <article className="experience__details">
                            <HiOutlineBadgeCheck className='experience__icon'/>
                            <div>
                                <h4>JavaScript</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <HiOutlineBadgeCheck className='experience__icon'/>
                            <div>
                                <h4>React</h4>
                                <small>Intermediate</small>
                            </div>                   
                        </article>
                        <article className="experience__details">
                            <HiOutlineBadgeCheck className='experience__icon'/>
                            <div>
                                <h4>WebGL</h4>
                                <small>Junior</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <HiOutlineBadgeCheck className='experience__icon'/>
                            <div>
                                <h4>WordPress</h4>
                                <small>Intermediate</small>
                            </div>          
                        </article>
                    </div>
               </div>
               <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <HiOutlineBadgeCheck className='experience__icon'/>
                            <div>
                                <h4>Node.js</h4>
                                <small>Junior</small>
                            </div>               
                        </article>
                        <article className="experience__details">
                            <HiOutlineBadgeCheck className='experience__icon'/>
                            <div>
                                <h4>Express.js</h4>
                                <small>Junior</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <HiOutlineBadgeCheck className='experience__icon'/>
                            <div>
                                <h4>PHP</h4>
                                <small>Junior</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <HiOutlineBadgeCheck className='experience__icon'/>
                            <div>
                                <h4>MySQL</h4>
                                <small>Junior</small>
                            </div>             
                        </article>
                        <article className="experience__details">
                            <HiOutlineBadgeCheck className='experience__icon'/>
                            <div>
                                <h4>MongoDB</h4>
                                <small>Junior</small>
                            </div>
                        </article>
                    </div>
               </div>
           </div>
        </section>
    )
}
