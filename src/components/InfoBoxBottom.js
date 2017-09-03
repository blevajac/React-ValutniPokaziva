import React, { Component } from 'react';

//css
import '../css/info-box.css';

class InfoBox extends Component {
  render() {
    const {data} = this.props;
    const minValue = data.reduce((min, p) => p.y < min ? p.y : min, data[0].y);
    const maxValue = data.reduce((max, p) => p.y > max ? p.y : max, data[0].y);

    const minDate = () => {
      for(let i = 0; i < data.length; i++){
        if(data[i].y === minValue){
          return data[i].datumLjepi
        };
      };
    };
    const maxDate = () => {
      for(let i = 0; i < data.length; i++){
        if(data[i].y === maxValue){
          return data[i].datumLjepi
        };
      };
    };

    return(
      <div id="data-container">

          <div id="left" className='box'>
            <div className="subtext">Najača vrijednost valute: </div>
            <div className="heading">{ maxValue } kn</div>
          </div>


          <div id="middle" className='box'>
            <div className="subtext">Valuta najača na datum:</div>
            <div className="heading">{ maxDate() } </div>
            <div className="subtext">Valuta najslabija na datum: </div>
            <div className="heading">{ minDate() } </div>
          </div>

          <div id="right" className='box'>
            <div className="subtext">Najslabija vrijednost valute: </div>
            <div className="heading">{ minValue } kn</div>
          </div>

      </div>
    );
  }
}

export default InfoBox;
