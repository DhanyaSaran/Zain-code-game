class Player {
  constructor(){}

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  
  }

  gettext(){
    var playerIndex = 'tasks/task' + 2+'/task'
    console.log(playerIndex)
    var playerCountRef = database.ref(playerIndex);
    playerCountRef.on("value",function(data){
      text = data.val();
      console.log(data.val())
    })
    console.log(text)
  }
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(name){
    var playerIndex = "tasks/task" + playerCount;
    database.ref(playerIndex).set({
      task:name
    });
  }
}
