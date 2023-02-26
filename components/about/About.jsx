import React from 'react'
import {RiFindReplaceLine} from "react-icons/ri"
import { Link } from 'react-router-dom'
import me from "../../assets/photo.jpg"

const About = () => {
  return (
    <section className='about'>
        <main>
            <h1>About Us</h1>

            <article>
                <h4>MBA Burger Wala</h4>
                <p>We are MBA Burger Wala. The Place for most tasty burgers on the entire
                    earth. </p>
                <p>Explore the various type of food and burger. Click below to see the menu </p>

                <Link to="/">
                    <RiFindReplaceLine/>
                    
                </Link>
            </article>

            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src={me} alt="founder" />
                        <h3>Vinay Kamboj</h3>
                    </div>
                    <p>
                        I am Vinay Kamboj, the founder of the MBA Burger Wala. Affiliated to God taste
                    </p>
                </article>

            </div>
        </main>

    </section>
  )
}

export default About