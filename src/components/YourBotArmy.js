import React from "react";
import BotCard from "./BotCard";



function YourBotArmy({botsArmy, releaseBot, dischargeBot}) {
  //your bot army code here...
  
  // Keep track of enlisted bots to avoid duplicates

  const enlistedBot = botsArmy.map((bot) => {
    return <BotCard key={bot} bot={bot} handleBot={releaseBot} dischargeBot={dischargeBot}/>

  })


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        {enlistedBot}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
