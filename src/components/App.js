import '../css/App.scss';
import SelfPanel from './SelfPanel';
import Navigator from './Navigator';
import { useState } from 'react';

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
        <article className={`content ${curPage !== "1" ? "content--hide" : ""}`}>
          <h4 className="content__title"> Simple Full-Stack Movie Web (Personal Project), Jan 2021</h4>
          <p className="content__detail"> - A web application that allows movie searching and user authentication
              with React.js, Express.js, and mySQL. <br />
              - Movies are provided by <a href="http://www.omdbapi.com/">The Open Movie Database</a>.<br />
            - <a href="https://github.com/zchen665/MovieWeb">link</a> </p>

          <h4 className="content__title"> Milk Weight Analyzer (Academic), May 2020</h4>
          <p className="content__detail"> - Led 5-person team and developed visual analysis tool targeting to facilitate a
              local cheese company’s production. <br />
              - Actively communicated with members and provided help addressing schedule conflicts and technical difficulties.<br />
              - Built with Java and JavaFX. <br />
            - <a href="https://github.com/zchen665/ATeamProject">link</a>
          </p>

          <h4 className="content__title"> Engineering Physics Research Assistant (Dr.Choy's group) at UW-Madison,   Jul 2019 – May 2020</h4>
          <p className="content__detail"> - Debugged and set up a confocal microscope that enables laser scanning and
              imaging of nitrogen vacancy in diamond. <br />
              - Familiarized with various optical and measuring equipment along with SCPI
              for programming with hardware. <br />
              - Honorable mention in Sophomore Research Fellowship.<br />
            - <a href="https://github.com/Ulm-IQO/qudi">Python software used</a>
          </p>

          <h4 className="content__title">Custodian at UW-Madison Housing,  Sep 2018 – May 2019</h4>
          <p className="content__detail">- Cooperated in team to maintain a clean and safe environment in residence
              hall of 600 residents.<br />
              - Enhanced public image of University by addressing residents and guests’ worries in dorms.
          </p>

          <p> More on the way :)</p>


        </article>

        <article className={`content ${curPage !== "2" ? "content--hide" : ""}`}>
          <h4 className="content__title"> Courses: </h4>
          <div className="content__detail">
            <h5>completed:</h5>
              CS400: Data Structure / CS540: Intro to AI / CS577: Algorithms
              / CS532: Matrix Method for Machine Learning / ECE551: Digital Design&Synthesis <br />
            <h5>in progress:</h5> ECE552: Intro to Computer Architecture / CS537: Operating System
          </div>
          <h4 className="content__title"> Skills: </h4>
          <div className="content__detail">
            <h5>(left being what I'm more confident at)</h5>
            <h5>Programming:</h5>React.js, javascript, HTML/CSS, Python, Verilog, Java, C, SQL
            <h5>Language:</h5> Chinese (native), English (fluent), Japanese (intermediate
             <a href="https://www.jlpt.jp/e/about/levelsummary.html">JLPT N2</a>).
          </div>

        </article>
        <article className={`content ${curPage !== "3" ? "content--hide" : ""}`}>
          <div className="hobby">
            <div className="hobby_item">
              <img className="hobby__img" alt="some books"></img>
              <h5 className="hobby__desc"> coming soon</h5>
            </div>
          </div>
        </article>


      </div>
    </div >
  );
}

export default App;
