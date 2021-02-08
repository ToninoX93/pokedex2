//Una classe es como un molde en una fabrica, 
//la idea es poder crear tantas pokedex como queramos.
class Pokedex{

	listaPokemon = null;

	load(callback){
		console.log('loading Pokemon...');
		var _this = this;
		$.ajax({
		  url: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
		  method:'get', //post
		  dataType: 'json' //string, xml, json, script, or html
		})
		.done(function(d) {
			_this.listaPokemon = new Array();
			for (var i = 0; i < d.pokemon.length; i++) {
				var p = d.pokemon[i];  				//ids,nums,nam,imgs,tipo,altura,peso,caramelo,contc,huevo,sp,avg,sptime,multi,weak,next,prev
				_this.listaPokemon.push(new Pokemon(p.id, p.num, p.name, p.img, p.type, p.height, p.weight, p.candy, p.candy_count, p.egg, p.spawn_chance, p.avg_spawn, p.spawn_time, p.multipliers, p.weaknesses, p.next_evolution, p.prev_evolution));
			}
		})
		.fail(function(e) {
			$('.container').html('<h3>¡Error! No se han podido cargar los pokemon</h3>');
		})
		.always(function() {
			callback();
		});
	}

	toHtml(){
		var r = '';

		for (var i = 0; i < this.listaPokemon[i].length; i++) {
			r += this.listaPokemon[i].toHtml();
		}
		return r;
	}
}