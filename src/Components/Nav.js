import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { getAlcoholList} from '../lib/api'
import useFetch from '../utils/useFetch'
import { FaCocktail, FaFolder, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: alcoholList} = useFetch(getAlcoholList)

  return (
    <>
      <button className="logo-btn menu" onClick={() => setIsOpen(!isOpen)}><FaCocktail /></button>
      {isOpen ?
      <nav className="sidenav">
          <div className="alcohol-links">
            <a onClick={() => setIsOpen(!isOpen)}><IoMdClose /></a>
            <Link to='/'>Home</Link>
            <Link to={`/${alcoholList.drinks[21].strIngredient1}`}>Vodka</Link>
            <Link to={`/${alcoholList.drinks[38].strIngredient1}`}>Rum</Link>
            <Link to={`/${alcoholList.drinks[2].strIngredient1}`}>Gin</Link>
            <Link to={`/${alcoholList.drinks[17].strIngredient1}`}>Champagne</Link>
            <Link to={`/${alcoholList.drinks[42].strIngredient1}`}>Cognac</Link>
            <Link to={`/${alcoholList.drinks[85].strIngredient1}`}>Whisky</Link>
            <Link to={`/${alcoholList.drinks[15].strIngredient1}`}>Amaretto</Link>
          </div>
          
          <div className="contact-links">
            <a href="https://flare222.github.io/portfolio/"
              className="icon"
              target="_blank"
              rel="noopener noreferrer">
              <FaFolder/>
            </a>
            <a href="https://twitter.com/flarer222"
              className="icon"
              target="_blank"
              rel="noopener noreferrer">
              <FaTwitter/>
            </a>
            <a href="https://www.linkedin.com/in/clare-robertson-ab1ba0142/"
              className="icon"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin/>
            </a> 
            <a href="https://www.linkedin.com/in/clare-robertson-ab1ba0142/"
              className="icon"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub/>
            </a> 
          </div>
        </nav>
      : null}
    </>
  )
}