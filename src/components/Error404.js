import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return(
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Stranica nije nađena</h1>
        <p>Nažalost, Zec nam je pojeo stranicu!!! (BJEŽITE)</p>
        <Link to="/" className="button button--link">Vratite me natrag!</Link>
      </div>
    </div>
  );
}
