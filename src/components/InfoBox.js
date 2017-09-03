import React, { Component } from 'react';
import moment from 'moment';

//css
import '../css/info-box.css';

class InfoBox extends Component {
  render() {
    let {data} = this.props;
    let {test} = this.props;
    let price = data[30].y;
    let change = price - data[0].y;
    let changeP = (price - data[0].y) / data[0].y * 100;

    let currentPrice = price;
    let monthChangeData = change.toFixed(4).toLocaleString('hr',{ style: 'currency', currency: 'HRK' });
    let monthChangeProcent = changeP.toFixed(4) + '%';
    let updatedAt = data[30].datum;

    return(
      <div id="data-container">
        { currentPrice ?
          <div id="left" className='box'>
            <div className="subtext">{'Ažurirano: ' + moment(updatedAt ).fromNow()}</div>
            <div className="heading">{currentPrice} kn</div>
          </div>
        : null}
        { currentPrice ?
          <div id="middle" className='box'>
            <div className="subtext">Promjena od prošlog mjeseca ({test ? test : 'EUR'})</div>
            <div className="heading">{monthChangeData} kn</div>
          </div>
        : null}
          <div id="right" className='box'>
            <div className="subtext">Promjena od prošlog mjeseca (%)</div>
            <div className="heading">{monthChangeProcent}</div>
          </div>

      </div>
    );
  }
}

export default InfoBox;
