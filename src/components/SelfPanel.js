import React from 'react';
import me from '../img/me.jpg'
const SelfPanel = (props) => {

    return (
        <div className='selfPanel' >
            <img className='selfPanel__img' src={me} alt=" me"></img>
            <div className='selfPanel__info'>

                <p className='selfPanel__text selfPanel--italic'>The University of Wisconsin-Madison (2018.9 - 2021.12)</p>

                <p className='selfPanel__text'>B.S in Electrical Engineering and Computer Science</p>

                <p className='selfPanel__text'>azchen665@gmail.com / zchen665@wisc.edu</p>

                <p className='selfPanel__text'>
                    <a href='https://github.com/zchen665'>Gitbub</a>
                </p>
            </div>
        </div>
    );

}


export default SelfPanel;