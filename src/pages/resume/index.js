import React, {useEffect} from 'react';
import pdf from './Runcheng_Resume.pdf';

function Resume() {
    useEffect(() => {
        
        window.open(pdf, '_blank');
    }, []); 

    return (
        <div className='App'>
            
            <a href={pdf} target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
    );
}

export default Resume;
