import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import mendota1 from '../img/mendota.jpg';
import mendota2 from '../img/mendota2.jpg';
import mendota3 from '../img/mendota3.jpg';
import mendota4 from '../img/mendota4.jpg';

const Slideshow = (props) => {
    const [index, _setIndex] = useState("1");
    const useIndex = React.useRef("1");
    const imgList = ["1", "2", "3", "4"];

    const setIndex = (val) => {
        _setIndex(val);
        useIndex.current = val;
    }

    const toNext = () => {
        let curIndx = imgList.indexOf(useIndex.current);

        console.log("to next, curindx: ",curIndx, typeof(curIndx));
        curIndx === 3 ? setIndex("1") : setIndex(`${curIndx + 2}`);
    }

    const handleSlide = () => {
        // window.setInterval(toNext, 2000);
    }

    useEffect(() => {
        // handleSlide();
    }, [])

    return (
        <div className='silde'>
            <div className='slide__wrapper'>
                <LazyLoad height={300} >
                    <img className='slide__img' src= '../img/mendota.jpg' />
                </LazyLoad>
                <div className='slide__left'></div>
                <div className='slide__right'></div>
            </div>
            <div className='slide__wrapper'>
                <LazyLoad height={300} >
                    <img className='slide__img' src={mendota2} />
                </LazyLoad>
                <div className='slide__left'></div>
                <div className='slide__right'></div>
            </div>
        </div>
    );
}

export default Slideshow;