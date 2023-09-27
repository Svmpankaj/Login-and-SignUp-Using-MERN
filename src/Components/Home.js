import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation()

    return (
        <div className='homepage'>
            <h1>Home {location.state.id} and welcome to home</h1>
        </div>
    )
}

export default Home
