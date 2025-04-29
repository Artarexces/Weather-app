import React, { useState } from 'react'

const Header = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city) return;
        onSearch(city);
        setCity(" ");
    }

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Busca una ciudad...'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}

export default Header
