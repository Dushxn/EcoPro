import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div >
       <header className="bg-black text-white p-4 mx-10 Navbar">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400">EcoPro</h1>
        <nav>
          <ul className="flex space-x-4 text-green-400">
            <li><a href="/" className="hover:font-semibold hover:text-white">Fertilizers</a></li>
          <Link to='/detectDisease' > <li><a href="/about" className="hover:font-semibold hover:text-white">Pests & Diseases</a></li></Link>
            <li><a href="/contact" className="hover:font-semibold hover:text-white">Community</a></li>
          </ul>
        </nav>
      </div>
    </header>
    </div>
  )
}

export default Header
