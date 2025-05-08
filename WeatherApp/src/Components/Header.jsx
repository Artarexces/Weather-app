import React, { useState } from 'react'

const Header = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city) return;
        onSearch(city);
        setCity("");
    }

    return (
        <header className='header'>
            <form onSubmit={handleSubmit} className='header-form'>
                <input
                    className='header-input'
                    type="text"
                    placeholder='Busca una ciudad...'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className='header-btn' type="submit">Search</button>
            </form>
        </header>
    )
}

export default Header
