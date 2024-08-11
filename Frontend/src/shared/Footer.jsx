import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-green-400 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
