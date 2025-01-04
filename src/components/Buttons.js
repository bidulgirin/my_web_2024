import React, { useState } from 'react';

function Buttons() {
    return (
        <>
            <button className='gf_button gf_button_normal'>Normal</button>
            <button className='gf_button gf_button_warning'>Warning</button>
            <button className='gf_button gf_button_success gf_button_large'>
                Success Large
            </button>
        </>
    );
}

export default Buttons;
