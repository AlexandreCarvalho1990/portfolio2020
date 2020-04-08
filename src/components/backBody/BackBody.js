import React from 'react';
import './BackBody.scss';
import Particles from 'react-particles-js';
import {ParticlesConfig} from './ParticlesConfig';
const BackBody = () => (
    <>
        <div className="back-body position-fixed">
        <Particles className='particles' params={ParticlesConfig}/>
        </div>
    </>
);

export default BackBody;