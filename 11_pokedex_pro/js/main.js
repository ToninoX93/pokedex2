jQuery(document).ready(function($){
  var px1 = new Pokedex('Pokedex 1');
  px1.load(function(){
    console.log(px1.listaPokemon);

    for (var i = 0; i < px1.listaPokemon.length; i++) {
      $('#pokemon').append(px1.listaPokemon[i].toHtml())
    }
    
  });

});