import React from 'react'
import './Hero.scss'


const Hero = ({h1, p,btn,img}) => {
  return (
    <>
      <section className='lorem'>
        <div className="container">
            <div className="lorem__wrapper">
                <div className="lorem-box">
                            <img src={img} alt="" />
                </div>

                <div className="lorem-text">
                    <h1>{h1}</h1>
                    <p>{p}</p>
                    <button>{btn}</button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero
