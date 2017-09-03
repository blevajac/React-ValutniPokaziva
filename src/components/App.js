import React, { Component } from 'react';
import * as moment from 'moment';
import 'moment/locale/hr';
import axios from 'axios';

//css
import '../css/app.css';

//helpers
import h from '../helpers/helper.js';

//components
import Header from './Header';
import UserSelector from './UserSelector';
import InfoBox from './InfoBox';
import LineChart from './LineChart';
import ToolTip from './ToolTip';
import InfoBoxBottom from './InfoBoxBottom';

moment.locale('hr');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingData: true,
      data: null,
      hoverLoc: null,
      activePoint: null,
      valutaDrzave: null,
      test: null
    }
    this.handleValuta = this.handleValuta.bind(this);
  }
  handleChartHover(hoverLoc, activePoint){
    this.setState({
      hoverLoc: hoverLoc,
      activePoint: activePoint
    })
  }
  componentDidMount(traženaValuta){
    const getData = () => {
        //const url = `https://cors-anywhere.herokuapp.com/http://api.hnb.hr/tecajn?datum-od=${h.getDateAfterX()}&datum-do=${h.getDateToday()}`;
        const url = `http://api.hnb.hr/tecajn?datum-od=${h.getDateAfterX()}&datum-do=${h.getDateToday()}`;

        axios.get(url, {
            headers: { 'Access-Control-Allow-Origin': '*'}
        }).then((valutaData) => {
            const valutaDrzave = [];
            const sortedData = [];
            let count = 0;
//-------------------------
            valutaData.data.map((data) => {
                  valutaDrzave.push({
                    nazivDrzave: data.drzava,
                    valuta: data.valuta
                  });
                  return valutaDrzave;
            });
            const newValutaDrzave = valutaDrzave.filter((thing, index, self) => self.findIndex(t => t.nazivDrzave === thing.nazivDrzave && t.valuta === thing.valuta) === index)
        //------------------  vraća [Australija: "AUD", Kanada: "CAD", Češka: "CZK"]
            //var result = [];
            //for (var i=0; i<valutaDrzave.length; i++) {
            //      result[valutaDrzave[i].nazivDrzave] = valutaDrzave[i].valuta;
            //}
        //------------------
//-----------------------------
            valutaData.data.map((data) => {
                  if(data.valuta === 'EUR'){
                    let y = parseFloat(data.srednji_tecaj.replace(",", ".")).toFixed(4);

                    sortedData.push({
                        datum: data.datum,
                        datumLjepi: moment(data.datum).format('L'),
                        srednjiTecajLogo: data.srednji_tecaj.toLocaleString('hr',{ style: 'currency', currency: 'HRK' }),
                        x: count,
                        y: y
                    });
                    count++;
                  }
                  return sortedData;
            })

            this.setState({
                  data: sortedData,
                  fetchingData: false,
                  valutaDrzave: newValutaDrzave
            })
        })
        .catch((e) => {
            console.log(e);
        });
    }
    getData();

  }

  aUbiMe(traženaValuta){
      const getData = () => {
          const url = `https://cors-anywhere.herokuapp.com/http://api.hnb.hr/tecajn?datum-od=${h.getDateAfterX()}&datum-do=${h.getDateToday()}`;

          axios.get(url, {
              headers: { 'Access-Control-Allow-Origin': '*'}
          }).then((valutaData) => {
              const sortedData = [];
              let count = 0;

              valutaData.data.map((data) => {
                    if(data.valuta === traženaValuta){
                      let y = parseFloat(data.srednji_tecaj.replace(",", ".")).toFixed(4);

                      sortedData.push({
                          datum: data.datum,
                          datumLjepi: moment(data.datum).format('L'),
                          srednjiTecajLogo: data.srednji_tecaj.toLocaleString('hr',{ style: 'currency', currency: 'HRK' }),
                          x: count,
                          y: y
                      });
                      count++;
                    }
                    return sortedData;
              })

              this.setState({
                    data: sortedData,
                    fetchingData: false
              })
          })
          .catch((e) => {
              console.log(e);
          });
    }
    getData();
  }


  handleValuta(langValue) {
      const traženaValuta = langValue.slice(-3);
      this.setState({
          test: traženaValuta
      })
      this.aUbiMe(traženaValuta);
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
            <div className='row'>
              { !this.state.fetchingData ? <UserSelector data={this.state.valutaDrzave} onSelectValuta={this.handleValuta}/> : null }
            </div>

            <div className='row'>
              { !this.state.fetchingData ? <InfoBox data={this.state.data} test={this.state.test}/> : null }
            </div>

            <div className='row'>
              <div className='popup'>
                {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint}/> : null}
              </div>
            </div>

            <div className='row'>
              <div className='chart'>
                { !this.state.fetchingData ? <LineChart data={this.state.data} onChartHover={ (a,b) => this.handleChartHover(a,b) }/> : null }
              </div>
            </div>

            <div className='row'>
              { !this.state.fetchingData ? <InfoBoxBottom data={this.state.data} /> : null }
            </div>

        </div>
      </div>
    );
  }
}

export default App;
