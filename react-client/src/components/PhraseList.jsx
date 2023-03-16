import React from 'react';
import List from "./List.jsx"

const PhraseList = ({data}) => (

  <div>
    <h1>Phrase List</h1>
    <div className="phrases">
      <div className="phrase-table">
        <div className="phrase-header phrase-row">
          <div className="phrase-data">Korean</div>
          <div className="phrase-data">Romanization</div>
          <div className="phrase-data">English</div>
          <div className="phrase-data">Status</div>
         
        </div>
      </div>
      {data.map((phrase,i)=><List phrase={phrase} key={i} />)}
    </div>
     </div>
);

export default PhraseList;