import React, { useState } from 'react'
import SearchPage from '../components/Search/Search'
import UserForm from '../components/UserForm/UserForm'

function Search() {
    const [errors, setErrors] = useState(null)


    return (
       <SearchPage />
    )
}

export default Search