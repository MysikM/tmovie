import React, {useEffect, useState} from 'react';
import PropsTypes from 'prop-types';

import './movie-list.scss';

import {SwiperSlide, Swiper} from "swiper/react";
import {Link} from 'react-router-dom';

import Button from "../button/Button";

import tmdbApi, {category} from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

const MovieList = (props) => {
    const [items, setItems] = useState([]);

    useEffect(()=> {
        const getList = async () => {
            let response = null;
            const params = {};

            if(props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {params});
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results.slice(2));
        }
        getList();
    },[])
    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide>
                            <img src={apiConfig.w500Image(item.poster_path)} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

MovieList.propTypes = {
    category: PropsTypes.string.isRequired,
    type: PropsTypes.string.isRequired,

}
export default MovieList;