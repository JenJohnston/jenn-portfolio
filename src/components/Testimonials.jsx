import React from 'react'
import testimonialData from '../data/testimonialData'



export default function Testimonials() {
    

    return (
        <section id="testimonials">
            <div className="section__header">
                <h5>Client Feeback</h5>
                <h2>Testimonials</h2>
            </div>
            <div className="container testimonials__container">
                {testimonialData.map(({id, image, name, review}) => {
                    return (
                        <article className="testimonial" key={id}>
                            <div className="client__img">
                                <img src={image} alt="" />
                            </div>
                            <h5 className='client-name'>{name}</h5>
                            <small className='client-review'>{review}</small>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
