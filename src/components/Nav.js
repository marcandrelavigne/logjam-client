import React from 'react'

const Nav = props => {
  return (
    <nav className={props.className}>
      {props.children}
    </nav>
  )
}

export default Nav
