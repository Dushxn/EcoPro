import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white p-4 mt-auto">
      <div className="container mx-auto text-center text-green-400">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
