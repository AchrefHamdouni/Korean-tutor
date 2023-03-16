import React from 'react'

function List({phrase}) {
  return (
     <div className="phrase-row">
            <div className="phrase-data">{phrase.kor}</div>
            <div className="phrase-data">{phrase.rom}</div>
            <div className="phrase-data">{phrase.eng}</div>
            <div className="phrase-data">{phrase.status}</div>
          </div>
  )    
}

export default List
