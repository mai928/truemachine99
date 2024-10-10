import React from 'react'
import FirstNav from './FirstNav'
import NavBar from './NavBar'

const Header = ({  locale }) => {
  return (
    <section>
      <FirstNav locale={locale} />
      <NavBar />

    </section>

  )
}

export default Header







