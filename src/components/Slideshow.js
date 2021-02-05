import React, { useEffect, useState } from 'react';
const url1 = 'https://raw.githubusercontent.com/zchen665/resume/main/src/img/mendota.jpg';
const url2 = 'https://raw.githubusercontent.com/zchen665/resume/main/src/img/mendota2.jpg';
const url3 = 'https://raw.githubusercontent.com/zchen665/resume/main/src/img/mendota3.jpg';
const url4 = 'https://raw.githubusercontent.com/zchen665/resume/main/src/img/mendota4.jpg';

const Slideshow = (props) => {
    const [index, _setIndex] = useState("1");
    const useIndex = React.useRef("1");
    const usePause = React.useRef(false);

    const imgList = ["1", "2", "3", "4"];

    const setIndex = (val) => {
        _setIndex(val);
        useIndex.current = val;
    }

    const setIsPaused = (val) => {
        usePause.current = val;
    }

    const toNext = () => {
        let curIndx = imgList.indexOf(useIndex.current);

        //curIndx+2 because curIndx starts from 0 to 3
        curIndx === 3 ? setIndex("1") : setIndex(`${curIndx + 2}`);
    }

    const handleSlide = () => {
        window.setInterval(() => {
            if (!usePause.current) {
                toNext();
            }
        }, 5000);
    }

    useEffect(handleSlide, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div
            className='slide'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={toNext}
        >
            <div className={`slide__wrapper ${index !== '1' ? 'slide--hide' : ''}`}>
                <img className='slide__img slide--pointer' src={url1} alt="lake Mendota" />
            </div>
            <div className={`slide__wrapper ${index !== '2' ? 'slide--hide' : ''}`}>
                <img className='slide__img slide--pointer' src={url2} alt="lake Mendota" />
            </div>
            <div className={`slide__wrapper ${index !== '3' ? 'slide--hide' : ''}`}>
                <img className='slide__img slide--pointer' src={url3} alt="lake Mendota" />
            </div>
            <div className={`slide__wrapper ${index !== '4' ? 'slide--hide' : ''}`}>
                <img className='slide__img slide--pointer' src={url4} alt="lake Mendota" />
            </div>
        </div>
    );
}

export default Slideshow;