import React from 'react';
import Avatar from '../avatar/Avatar';
import SocialList from '../social/SocialLists';
import { NavLink } from 'react-router-dom';
import './LeftSide.scss';

const LeftSide = () => (
    <>
        <div className="col-12 col-md-6 left-back d-flex align-items-center">
            <div className="d-flex flex-column align-items-center">
                <Avatar margin />
                <div className="d-flex justify-content-center flex-wrap align-items-baseline">
                    <p className="o-font-lg text-white mb-1 mb-sm-3">Hi, I am</p>
                    <h2 className="o-font-lg ml-2 text-white">Alexandre Carvalho</h2>
                </div>
                <p className="text-center text-white">I am a Full Stack developer. I can provide fully working Apps for your ideas . Lets make things Happen!</p>
                <h1><SocialList margin /></h1>
                <div className="row mb-5 justify-content-center">
                    <NavLink to="/contact">
                    <button className="d-block m-3 text-white o-btn text-center py-2 position-relative">CONTACT ME</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </>
);

export default LeftSide;