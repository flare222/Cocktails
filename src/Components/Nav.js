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
            <Link to='/home'
            onClick={() => setIsOpen(false)}>Home</Link>
            <Link to={`/list/${alcoholList.drinks[21].strIngredient1}`}
            onClick={() => setIsOpen(false)}>Vodka</Link>
            <Link to={`/list/${alcoholList.drinks[38].strIngredient1}`}
            onClick={() => setIsOpen(false)}>Rum</Link>
            <Link to={`/list/${alcoholList.drinks[2].strIngredient1}`}
            onClick={() => setIsOpen(false)}>Gin</Link>
            <Link to={`/list/${alcoholList.drinks[17].strIngredient1}`}
            onClick={() => setIsOpen(false)}>Champagne</Link>
            <Link to={`/list/${alcoholList.drinks[42].strIngredient1}`}
            onClick={() => setIsOpen(false)}>Cognac</Link>
            <Link to={`/list/${alcoholList.drinks[85].strIngredient1}`}
            onClick={() => setIsOpen(false)}>Whiskey</Link>
            <Link to={`/list/${alcoholList.drinks[15].strIngredient1}`}
            onClick={() => setIsOpen(false)}>Amaretto</Link>
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
            <a href="https://github.com/flare222"
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