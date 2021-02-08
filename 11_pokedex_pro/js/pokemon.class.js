class Pokemon{
	id = 0;
	num = '';
	nombre = '';
	img = '';
	type = [];
	height = '';
	weight = '';
	candy = '';
	candy_count = 0;
	egg = '';
	spawn_chance = 0;
	avg_spawns = 0;
	spawn_time = '';
	multipliers = [];
	weaknesses = [];
	next_evolution = [];
	prev_evolution = [];

	constructor(ids,nums,nam,imgs,tipo,altura,peso,caramelo,contc,huevo,sp,avg,sptime,multi,weak,next,prev){
		this.id = ids || 0;
		this.num = nums || '';
		this.nombre = nam || '';
		this.img = imgs || '';
		this.type = tipo || [];
		this.height = altura || '';
		this.weight = peso || '';
		this.candy = caramelo || '';
		this.candy_count = contc || 0;
		this.egg = huevo || '';
		this.spawn_chance = sp || 0;
		this.avg_spawns = avg || 0;
		this.spawn_time = sptime || '';
		this.multipliers = multi || [];
		this.weaknesses = weak || [];
		this.next_evolution = next || [];
		this.prev_evolution = prev || [];
	}

	toHtml(){
		var p = '';

		p+= '<div>';
		p+= '<img src="' + this.img + '" class="card-img-top" alt="Imagen de "' + this.nombre +'>';
		p+= '<div>ID: ' + this.id + '<br>';
		p+= 'Numero: ' + this.num + '<br>';
		p+= 'Nombre: ' + this.nombre + '<br>';
		p+= 'Tipo: ' + this.type + '<br>';
		p+= 'Altura: ' + this.height + '<br>';
		p+= 'Peso: ' + this.weight + '<br>';
		p+= 'Caramelo: ' + this.candy + '<br>';
		p+= 'Contador caramelos: ' + this.candy_count + '<br>';
		p+= 'Huevo: ' + this.egg + '<br>';
		p+= 'Ratio de spawn: ' + this.spawn_chance + '<br>';
		p+= 'Avg: ' + this.avg_spawns + '<br>';
		p+= 'Tiempo spawn: ' + this.spawn_time + '<br>';
		p+= 'Multiplicador: ' + this.multipliers + '<br>';
		p+= 'Debilidad: ' + this.weaknesses + '<br>';
		p+= 'Evoluciones: ' + this.next_evolution + '<br>';
		p+= 'Preevoluciones: ' + this.prev_evolution + '</div>';
		p+= '</div>';


		return p;
	}

	tiposPokemon(){
		var types = [];
		for (var i = 0; i < this.type.length; i++) {
			types += this.type[i] + ' ';
		}
		return types;
	}
}