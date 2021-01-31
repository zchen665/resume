import '../css/App.scss';
import SelfPanel from './SelfPanel';
import Navigator from './Navigator';
import { useEffect, useState } from 'react';

function App() {
  const [curPage, setCurPage] = useState('1')

  const handleClick = (tabIndex) => {
    if (tabIndex !== curPage) {
      setCurPage(tabIndex);
    }
  }


  return (
    <div className="main">
      <div className="main__left">
        <SelfPanel />
      </div>
      <div className="main__right">
        <Navigator onClick={handleClick} />
        {/* following are pages for different tabs */}
        <article className={`content ${curPage!=="1"? "content--hide" : ""}`}>
          <ul className="content__form">
            <li>im</li>
            <li>anonymous</li>
          </ul>
        </article>

        <article className={`content ${curPage!=="2"? "content--hide" : ""}`}>
          page 2
        </article>
        <article className={`content ${curPage!=="3"? "content--hide" : ""}`}>
          page 3
        </article>
        <article className={`content ${curPage!=="4"? "content--hide" : ""}`}>
          page 4
        </article>


      </div>
    </div>
  );
}

export default App;
