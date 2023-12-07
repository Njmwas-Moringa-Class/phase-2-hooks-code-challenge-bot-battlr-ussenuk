import React from "react";
import BotCard from "./BotCard";

function BotCollection({displayBots, dischargeBot, addBotToArmy}) {
  // Your code here
  
 // map the data received as a prop from the parent and render it as a card 
 // using BotCard component
 // make sure the callback is {bot} under the BotCard


  return (
    <div className="ui four column grid">
      
      <div className="row">
        { 
        
        displayBots.map((bot)=>(
          <BotCard key={bot.id} bot={bot} dischargeBot={dischargeBot} handleBot={addBotToArmy} />
        ))

        }
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
