import React, { useState, useEffect } from 'react';

function ToggleDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem('darkMode') === 'true'
    );

    const toggleDarkMode = (e) => {
        const isChecked = e.target.checked;
        setIsDarkMode(isChecked);
        localStorage.setItem('darkMode', isChecked);
    };

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);

    return (
        <div>
            {/* <label>
                <input
                    type='checkbox'
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                />
                {isDarkMode ? 'Dark' : 'Light'}
            </label> */}

            <div>
                <input
                    className='checkbox'
                    id='checkbox1'
                    type='checkbox'
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                />
                <label htmlFor='checkbox1' className='checkbox-label'>
                    <span className={isDarkMode ? 'on' : 'off'}></span>
                </label>
            </div>
        </div>
    );
}

export default ToggleDarkMode;
