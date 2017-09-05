import React, { Component } from 'react';

//components
import Header from './Header';

//css
import '../css/about.css';

class About extends Component {
  render() {
    return (
        <div>
          <Header />
            <div className="about-aplikacija row">
              <div className=" large-12 column">
                <h1 className="page-title">React - Valutni pokazivać</h1>
                <p className="about-paragraf-opis">
                  Is an Application to show the exchange rate of the Croatian currency with the currency's of thirteen different Countries, through the time span of 30 days.
                  <br></br>
                  The Application starts with todays date, and goes 30 days in the past. It uses a price graf to show and highlight the data fetched.
                  The user can at any time with the use of the mouse scroll over the graf to see the exchange rate of the user designated currency at any given time.
                </p>
                <p className="about-paragraf-opis">
                  The data was fetched from <strong>HNB (Hrvatska Narodna Banka) API</strong> and hilighted in this APP.
                  <br></br>
                  The Idea for building this small App came from the blog post of <em><strong>Brandon Morelli</strong></em> cam from the <strong>"How I built an Interactive 30-Day Bitcoin Price Graph with React and an API"</strong>.
                  <br></br>
                  The original graph only showed the data for bitcoins in the designated time. Ive updated the app to show the currency differenc of 13 Country with the Croatian currency "kuna".
                </p>
                <ul>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.hnb.hr/pregled-dokumenata?p_p_id=101&p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view&_101_struts_action=%2Fasset_publisher%2Fview_content&_101_assetEntryId=1931636&_101_type=content&_101_urlTitle=tecajna-lista-api&inheritRedirect=false">HNB API</a> - API used to fetche the data for the project
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://codeburst.io/how-i-built-an-interactive-30-day-bitcoin-price-graph-with-react-and-an-api-6fe551c2ab1d">How I built an Interactive 30-Day Bitcoin Price Graph with React and an API</a> - Tutorial used for building the price graph
                    </li>
                </ul>
                <div className="devicon">
                    <i className="devicon-react-original" title="React"></i>
                    <i className="devicon-html5-plain" title="HTML"></i>
                    <i className="devicon-javascript-plain" title="JavaScript"></i>                    
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default About;
