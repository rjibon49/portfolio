import React from 'react';
import ParticleBackground from '../../ParticleBackground';
import Ban from './Ban';


const Banner = () => {
    return (
        <>
        <div>
            <div >
                <ParticleBackground> </ParticleBackground>
            </div>
            <div style={{marginTop:'-50%'}}> 
                <Ban ></Ban>
            </div>
        </div>
        
        </>
    );
};

export default Banner;

