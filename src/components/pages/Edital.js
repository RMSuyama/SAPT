import React from 'react';
import Navbar from '../views/Navbar';
import Analise from '../views/analiseForm';
import PainelTribut from '../views/painelTribut';

const Sobre = () => {
    return (
        <div>
            <Navbar />
            <PainelTribut />
            <Analise />
            
        </div>
    );
}

export default Sobre;