import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

import { FaSearch } from 'react-icons/fa'

export default function Searchbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  console.log(searchTerm)

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }


  const reset = () => {
    if (!searchTerm) {
      setSearchTerm('notfound')
    }
      setIsOpen(false)
      setSearchTerm('')
    }


  

  return (
    <>
    <button className="logo-btn searchbar-div"
    onClick={() => setIsOpen(!isOpen)}><FaSearch/></button>
    {isOpen ?
    <>
    <input 
    className="searchbar" 
    type="text" 
    placeholder="Search..."
    value={searchTerm}
    onChange={handleChange}></input>

    
    <Link to={`/searchresults/${searchTerm}`} 
    className="logo-btn searchbar-div"
    onClick={reset}>
    <FaSearch/>
    </Link>
    </>
    : false }
    </>
  )
}


