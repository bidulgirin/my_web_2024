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
            <label>
                <input
                    type='checkbox'
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                />
                {isDarkMode ? '다크 모드' : '라이트 모드'} 활성화
            </label>
        </div>
    );
}

export default ToggleDarkMode;
