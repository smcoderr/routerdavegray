import React from 'react'

const Footer = () => {
    const today = new Date()
  return (
    <footer className='bg-zinc-900 py-5 text-center text-white'>
        <p>CopyRight &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer