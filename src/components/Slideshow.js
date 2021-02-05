import React, { useEffect, useState } from 'react';
const url1 = 'https://raw.githubusercontent.com/zchen665/resume/main/src/img/mendota.jpg';
const url2 = 'https://raw.githubusercontent.com/zchen665/resume/main/src/img/mendota2.jpg';
const url3 = 'https://raw.githubusercontent.com/zchen665/resume/main/src/img/mendota3.jpg';
const url4 = 'https://raw.githubusercontent.com/zchen665/resume/main/src/img/mendota4.jpg';

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

        // console.log("to next, curindx: ", curIndx, typeof (curIndx));
        curIndx === 3 ? setIndex("1") : setIndex(`${curIndx + 2}`);
    }

    const handleSlide = () => {
        window.setInterval(toNext, 5000);
    }

    useEffect(() => {
        handleSlide();
    }, [])

    return (
        <div className='silde'>
            <div className={`slide__wrapper ${index !='1'? 'slide--hide': ''}`}>
                <img className='slide__img' src={url1} />
                <div className='slide__left'></div>
                <div className='slide__right'></div>
            </div>
            <div className={`slide__wrapper ${index !='2'? 'slide--hide': ''}`}>
                <img className='slide__img' src={url2} />
                <div className='slide__left'></div>
                <div className='slide__right'></div>
            </div>
            <div className={`slide__wrapper ${index !='3'? 'slide--hide': ''}`}>
                <img className='slide__img' src={url3} />
                <div className='slide__left'></div>
                <div className='slide__right'></div>
            </div>
            <div className={`slide__wrapper ${index !='4'? 'slide--hide': ''}`}>
                <img className='slide__img' src={url4} />
                <div className='slide__left'></div>
                <div className='slide__right'></div>
            </div>
        </div>
    );
}

export default Slideshow;