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
    console.log("tab index:", tabIndex);
  }


  return (
    <div className="main">
      <div className="main__left">
        <SelfPanel />
      </div>
      <div className="main__right">
        <Navigator onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
