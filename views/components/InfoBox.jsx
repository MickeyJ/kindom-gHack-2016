import React from 'react'

const InfoBox = (props) => {
  if(props.zips){
    return(
      <div className="player-info-box col-xs-4">
        <h3>Player Info</h3>
        {props.zips.map((x, i) =>(
          <p key={i}>{x.code}</p>
        ))}
      </div>
    );
  } else {
    return(
      <div className="player-info-box col-xs-4">
        <h3>Player Info</h3>
      </div>
    );
  }
};

export default InfoBox