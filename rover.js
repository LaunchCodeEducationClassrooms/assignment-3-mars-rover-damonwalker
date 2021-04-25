class Rover {
   // Write code here!
   constructor(position){
     this.position = position;
     this.mode = 'NORMAL';
     this.generatorWatts = 110;
  };

  receiveMessage(message){
    let results = [];
    for (let i = 0; message.commands.length < i; i++)
    {
      if (message.commands[i].commandType==="MOVE"){
        results.push({completed: true})
      }else if (message.commands[i].commandType==="STATUS_CHECK"){
        results.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}})
      }else if (message.commands[i].commandType==="MODE_CHANGE"){
        results.push({completed: true})
      }
    }
return {
  message: message.name,
  results: results,
}
  };
}
module.exports = Rover;