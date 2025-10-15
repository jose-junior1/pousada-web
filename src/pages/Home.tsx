import React from 'react'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Route from '../components/Route'

const Home = () => {
    return (
        <>
            <Hero />
            <Welcome />
            <About />
            <Route />
        </>
    )
}

export default Home