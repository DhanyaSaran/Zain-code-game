class Form {
  constructor() {
    
  }

  display(){
    
    var title=createElement('h2')
    title.html("hello")
    title.position(100,100)


    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(function(){
     
      input.hide()
     var name = input.value();
      player.gettext()
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      title.html("hello"+name)
    title.position(100,100)
      
    });

    

  }
}
