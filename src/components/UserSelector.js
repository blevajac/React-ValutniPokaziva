import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';

//helpers
import dataValute from '../helpers/data'

//css
import '../css/user-selector.css';


// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {

  const escapedValue = escapeRegexCharacters(value.trim());

  const regex = new RegExp('\\b' + escapedValue, 'i');

  return dataValute.filter(valuta => regex.test(getSuggestionValue(valuta)));
}

function shouldRenderSuggestions() {
  return true;
}

function getSuggestionValue(suggestion) {
  return `${suggestion.nazivDrzave} ${suggestion.valuta}`;
}

function renderSuggestion(suggestion, { query }) {
  const suggestionText = `${suggestion.nazivDrzave}`;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
    <span className={'suggestion-content ' + suggestion.slika}>
      <span className="name">
        {
          parts.map((part, index) => {
            const className = part.highlight ? 'highlight' : null;

            return (
              <span className={className} key={index}>{part.text}</span>
            );
          })
        }
      </span>
    </span>
  );
}

class UserSelector extends Component {
    constructor(){
      super();
      this.state = {
        value: '',
        suggestions: [],
        placeholder: 'Izaberite valutu: Trenutno izabrana valuta je EUR'
      };
    }

    onChange = (event, { newValue, method }) => {
      this.setState({
        placeholder: `Izabrana valuta je: ${newValue}`,
        value: newValue
      });
      this.props.onSelectValuta(newValue)
    };

    onSuggestionSelected = () => {
      this.setState({
        value: ''
      });
    };

    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };

//
  onSuggestionsClearRequested = () => {
    this.setState({
       suggestions: []
    });
  };
//

  storeInputReference = autosuggest => {
    if (autosuggest !== null) {
      this.input = autosuggest.input;
    }

  };

  render() {
    const { value, suggestions, placeholder } = this.state;
    const inputProps = {
      placeholder,
      value,
      onChange: this.onChange
    };
    return(
      <div className="data-container">
        <div className="box-middle">
          <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          shouldRenderSuggestions={shouldRenderSuggestions}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps}
          ref={this.storeInputReference}
        />
        </div>
      </div>
    );
  }
}

export default UserSelector;
