import React from 'react';

import HeroSlide from "../component/hero-slide/HeroSlide";
import {Link} from "react-router-dom";
import {OutlineButton} from "../component/button/Button";

const Home = () => {
    return (
        <>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className="name">
                                View more
                            </OutlineButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;