import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return(
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/'>About</Link>
      <Link to='/'>Contact</Link>
      <Link to='/'>More</Link>
    </nav>
  )
}