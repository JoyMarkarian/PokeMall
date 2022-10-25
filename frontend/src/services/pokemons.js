const pokemons = [
  {
    "pokedex_index": 1,
    "name": "bulbasaur",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    "experience": 64,
    "heigth": 7,
    "hp": 45,
    "stats": {
      "attack": 49,
      "defense": 49,
      "special_attack": 65,
      "special_defence": 65,
      "speed": 45
    },
    "weight": 69,
    "type": {
      "primary_type": "grass",
      "secondary_type": "poison"
    },
    "price": 10,
    "ability": {
      "first_ability": "overgrow",
      "seconde_ability": "chlorophyll"
    },
    "first_move": "razor-wind",
    "seconde_move": "swords-dance",
    "third_move": "cut",
    "fourth_move": "bind"
  },
  {
    "pokedex_index": 2,
    "name": "ivysaur",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
    "experience": 142,
    "heigth": 10,
    "hp": 60,
    "stats": {
      "attack": 62,
      "defense": 63,
      "special_attack": 80,
      "special_defence": 80,
      "speed": 60
    },
    "weight": 130,
    "type": {
      "primary_type": "grass",
      "secondary_type": "poison"
    },
    "price": 22,
    "ability": {
      "first_ability": "overgrow",
      "seconde_ability": "chlorophyll"
    },
    "first_move": "swords-dance",
    "seconde_move": "cut",
    "third_move": "bind",
    "fourth_move": "vine-whip"
  },
  {
    "pokedex_index": 3,
    "name": "venusaur",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
    "experience": 263,
    "heigth": 20,
    "hp": 80,
    "stats": {
      "attack": 82,
      "defense": 83,
      "special_attack": 100,
      "special_defence": 100,
      "speed": 80
    },
    "weight": 1000,
    "type": {
      "primary_type": "grass",
      "secondary_type": "poison"
    },
    "price": 41,
    "ability": {
      "first_ability": "overgrow",
      "seconde_ability": "chlorophyll"
    },
    "first_move": "swords-dance",
    "seconde_move": "cut",
    "third_move": "bind",
    "fourth_move": "vine-whip"
  },
  {
    "pokedex_index": 4,
    "name": "charmander",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
    "experience": 62,
    "heigth": 6,
    "hp": 39,
    "stats": {
      "attack": 52,
      "defense": 43,
      "special_attack": 60,
      "special_defence": 50,
      "speed": 65
    },
    "weight": 85,
    "type": {
      "primary_type": "fire",
      "secondary_type": null
    },
    "price": 10,
    "ability": {
      "first_ability": "blaze",
      "seconde_ability": "solar-power"
    },
    "first_move": "mega-punch",
    "seconde_move": "fire-punch",
    "third_move": "thunder-punch",
    "fourth_move": "scratch"
  },
  {
    "pokedex_index": 5,
    "name": "charmeleon",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
    "experience": 142,
    "heigth": 11,
    "hp": 58,
    "stats": {
      "attack": 64,
      "defense": 58,
      "special_attack": 80,
      "special_defence": 65,
      "speed": 80
    },
    "weight": 190,
    "type": {
      "primary_type": "fire",
      "secondary_type": null
    },
    "price": 22,
    "ability": {
      "first_ability": "blaze",
      "seconde_ability": "solar-power"
    },
    "first_move": "mega-punch",
    "seconde_move": "fire-punch",
    "third_move": "thunder-punch",
    "fourth_move": "scratch"
  },
  {
    "pokedex_index": 6,
    "name": "charizard",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
    "experience": 267,
    "heigth": 17,
    "hp": 78,
    "stats": {
      "attack": 84,
      "defense": 78,
      "special_attack": 109,
      "special_defence": 85,
      "speed": 100
    },
    "weight": 905,
    "type": {
      "primary_type": "fire",
      "secondary_type": "flying"
    },
    "price": 42,
    "ability": {
      "first_ability": "blaze",
      "seconde_ability": "solar-power"
    },
    "first_move": "mega-punch",
    "seconde_move": "fire-punch",
    "third_move": "thunder-punch",
    "fourth_move": "scratch"
  },
  {
    "pokedex_index": 7,
    "name": "squirtle",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
    "experience": 63,
    "heigth": 5,
    "hp": 44,
    "stats": {
      "attack": 48,
      "defense": 65,
      "special_attack": 50,
      "special_defence": 64,
      "speed": 43
    },
    "weight": 90,
    "type": {
      "primary_type": "water",
      "secondary_type": null
    },
    "price": 10,
    "ability": {
      "first_ability": "torrent",
      "seconde_ability": "rain-dish"
    },
    "first_move": "mega-punch",
    "seconde_move": "ice-punch",
    "third_move": "mega-kick",
    "fourth_move": "headbutt"
  },
  {
    "pokedex_index": 8,
    "name": "wartortle",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
    "experience": 142,
    "heigth": 10,
    "hp": 59,
    "stats": {
      "attack": 63,
      "defense": 80,
      "special_attack": 65,
      "special_defence": 80,
      "speed": 58
    },
    "weight": 225,
    "type": {
      "primary_type": "water",
      "secondary_type": null
    },
    "price": 22,
    "ability": {
      "first_ability": "torrent",
      "seconde_ability": "rain-dish"
    },
    "first_move": "mega-punch",
    "seconde_move": "ice-punch",
    "third_move": "mega-kick",
    "fourth_move": "headbutt"
  },
  {
    "pokedex_index": 9,
    "name": "blastoise",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
    "experience": 265,
    "heigth": 16,
    "hp": 79,
    "stats": {
      "attack": 83,
      "defense": 100,
      "special_attack": 85,
      "special_defence": 105,
      "speed": 78
    },
    "weight": 855,
    "type": {
      "primary_type": "water",
      "secondary_type": null
    },
    "price": 41,
    "ability": {
      "first_ability": "torrent",
      "seconde_ability": "rain-dish"
    },
    "first_move": "mega-punch",
    "seconde_move": "ice-punch",
    "third_move": "mega-kick",
    "fourth_move": "headbutt"
  },
  {
    "pokedex_index": 10,
    "name": "caterpie",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
    "experience": 39,
    "heigth": 3,
    "hp": 45,
    "stats": {
      "attack": 30,
      "defense": 35,
      "special_attack": 20,
      "special_defence": 20,
      "speed": 45
    },
    "weight": 29,
    "type": {
      "primary_type": "bug",
      "secondary_type": null
    },
    "price": 6,
    "ability": {
      "first_ability": "shield-dust",
      "seconde_ability": "run-away"
    },
    "first_move": "tackle",
    "seconde_move": "string-shot",
    "third_move": "snore",
    "fourth_move": "bug-bite"
  },
  {
    "pokedex_index": 11,
    "name": "metapod",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
    "experience": 72,
    "heigth": 7,
    "hp": 50,
    "stats": {
      "attack": 20,
      "defense": 55,
      "special_attack": 25,
      "special_defence": 25,
      "speed": 30
    },
    "weight": 99,
    "type": {
      "primary_type": "bug",
      "secondary_type": null
    },
    "price": 11,
    "ability": {
      "first_ability": "shed-skin",
      "seconde_ability": null
    },
    "first_move": "string-shot",
    "seconde_move": "harden",
    "third_move": "iron-defense",
    "fourth_move": "bug-bite"
  },
  {
    "pokedex_index": 12,
    "name": "butterfree",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
    "experience": 198,
    "heigth": 11,
    "hp": 60,
    "stats": {
      "attack": 45,
      "defense": 50,
      "special_attack": 90,
      "special_defence": 80,
      "speed": 70
    },
    "weight": 320,
    "type": {
      "primary_type": "bug",
      "secondary_type": "flying"
    },
    "price": 31,
    "ability": {
      "first_ability": "compound-eyes",
      "seconde_ability": "tinted-lens"
    },
    "first_move": "razor-wind",
    "seconde_move": "gust",
    "third_move": "whirlwind",
    "fourth_move": "headbutt"
  },
  {
    "pokedex_index": 13,
    "name": "weedle",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
    "experience": 39,
    "heigth": 3,
    "hp": 40,
    "stats": {
      "attack": 35,
      "defense": 30,
      "special_attack": 20,
      "special_defence": 20,
      "speed": 50
    },
    "weight": 32,
    "type": {
      "primary_type": "bug",
      "secondary_type": "poison"
    },
    "price": 6,
    "ability": {
      "first_ability": "shield-dust",
      "seconde_ability": "run-away"
    },
    "first_move": "poison-sting",
    "seconde_move": "string-shot",
    "third_move": "bug-bite",
    "fourth_move": "electroweb"
  },
  {
    "pokedex_index": 14,
    "name": "kakuna",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
    "experience": 72,
    "heigth": 6,
    "hp": 45,
    "stats": {
      "attack": 25,
      "defense": 50,
      "special_attack": 25,
      "special_defence": 25,
      "speed": 35
    },
    "weight": 100,
    "type": {
      "primary_type": "bug",
      "secondary_type": "poison"
    },
    "price": 11,
    "ability": {
      "first_ability": "shed-skin",
      "seconde_ability": null
    },
    "first_move": "string-shot",
    "seconde_move": "harden",
    "third_move": "iron-defense",
    "fourth_move": "bug-bite"
  },
  {
    "pokedex_index": 15,
    "name": "beedrill",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
    "experience": 178,
    "heigth": 10,
    "hp": 65,
    "stats": {
      "attack": 90,
      "defense": 40,
      "special_attack": 45,
      "special_defence": 80,
      "speed": 75
    },
    "weight": 295,
    "type": {
      "primary_type": "bug",
      "secondary_type": "poison"
    },
    "price": 28,
    "ability": {
      "first_ability": "swarm",
      "seconde_ability": "sniper"
    },
    "first_move": "swords-dance",
    "seconde_move": "cut",
    "third_move": "headbutt",
    "fourth_move": "fury-attack"
  },
  {
    "pokedex_index": 16,
    "name": "pidgey",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
    "experience": 50,
    "heigth": 3,
    "hp": 40,
    "stats": {
      "attack": 45,
      "defense": 40,
      "special_attack": 35,
      "special_defence": 35,
      "speed": 56
    },
    "weight": 18,
    "type": {
      "primary_type": "normal",
      "secondary_type": "flying"
    },
    "price": 8,
    "ability": {
      "first_ability": "keen-eye",
      "seconde_ability": "tangled-feet"
    },
    "first_move": "razor-wind",
    "seconde_move": "gust",
    "third_move": "wing-attack",
    "fourth_move": "whirlwind"
  },
  {
    "pokedex_index": 17,
    "name": "pidgeotto",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
    "experience": 122,
    "heigth": 11,
    "hp": 63,
    "stats": {
      "attack": 60,
      "defense": 55,
      "special_attack": 50,
      "special_defence": 50,
      "speed": 71
    },
    "weight": 300,
    "type": {
      "primary_type": "normal",
      "secondary_type": "flying"
    },
    "price": 19,
    "ability": {
      "first_ability": "keen-eye",
      "seconde_ability": "tangled-feet"
    },
    "first_move": "razor-wind",
    "seconde_move": "gust",
    "third_move": "wing-attack",
    "fourth_move": "whirlwind"
  },
  {
    "pokedex_index": 18,
    "name": "pidgeot",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",
    "experience": 216,
    "heigth": 15,
    "hp": 83,
    "stats": {
      "attack": 80,
      "defense": 75,
      "special_attack": 70,
      "special_defence": 70,
      "speed": 101
    },
    "weight": 395,
    "type": {
      "primary_type": "normal",
      "secondary_type": "flying"
    },
    "price": 34,
    "ability": {
      "first_ability": "keen-eye",
      "seconde_ability": "tangled-feet"
    },
    "first_move": "razor-wind",
    "seconde_move": "gust",
    "third_move": "wing-attack",
    "fourth_move": "whirlwind"
  },
  {
    "pokedex_index": 19,
    "name": "rattata",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg",
    "experience": 51,
    "heigth": 3,
    "hp": 30,
    "stats": {
      "attack": 56,
      "defense": 35,
      "special_attack": 25,
      "special_defence": 35,
      "speed": 72
    },
    "weight": 35,
    "type": {
      "primary_type": "normal",
      "secondary_type": null
    },
    "price": 8,
    "ability": {
      "first_ability": "run-away",
      "seconde_ability": "guts"
    },
    "first_move": "cut",
    "seconde_move": "headbutt",
    "third_move": "tackle",
    "fourth_move": "body-slam"
  },
  {
    "pokedex_index": 20,
    "name": "raticate",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",
    "experience": 145,
    "heigth": 7,
    "hp": 55,
    "stats": {
      "attack": 81,
      "defense": 60,
      "special_attack": 50,
      "special_defence": 70,
      "speed": 97
    },
    "weight": 185,
    "type": {
      "primary_type": "normal",
      "secondary_type": null
    },
    "price": 23,
    "ability": {
      "first_ability": "run-away",
      "seconde_ability": "guts"
    },
    "first_move": "swords-dance",
    "seconde_move": "cut",
    "third_move": "headbutt",
    "fourth_move": "tackle"
  },
  {
    "pokedex_index": 21,
    "name": "spearow",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg",
    "experience": 52,
    "heigth": 3,
    "hp": 40,
    "stats": {
      "attack": 60,
      "defense": 30,
      "special_attack": 31,
      "special_defence": 31,
      "speed": 70
    },
    "weight": 20,
    "type": {
      "primary_type": "normal",
      "secondary_type": "flying"
    },
    "price": 8,
    "ability": {
      "first_ability": "keen-eye",
      "seconde_ability": "sniper"
    },
    "first_move": "razor-wind",
    "seconde_move": "whirlwind",
    "third_move": "fly",
    "fourth_move": "headbutt"
  },
  {
    "pokedex_index": 22,
    "name": "fearow",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg",
    "experience": 155,
    "heigth": 12,
    "hp": 65,
    "stats": {
      "attack": 90,
      "defense": 65,
      "special_attack": 61,
      "special_defence": 61,
      "speed": 100
    },
    "weight": 380,
    "type": {
      "primary_type": "normal",
      "secondary_type": "flying"
    },
    "price": 24,
    "ability": {
      "first_ability": "keen-eye",
      "seconde_ability": "sniper"
    },
    "first_move": "razor-wind",
    "seconde_move": "whirlwind",
    "third_move": "fly",
    "fourth_move": "headbutt"
  },
  {
    "pokedex_index": 23,
    "name": "ekans",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg",
    "experience": 58,
    "heigth": 20,
    "hp": 35,
    "stats": {
      "attack": 60,
      "defense": 44,
      "special_attack": 40,
      "special_defence": 54,
      "speed": 55
    },
    "weight": 69,
    "type": {
      "primary_type": "poison",
      "secondary_type": null
    },
    "price": 9,
    "ability": {
      "first_ability": "intimidate",
      "seconde_ability": "shed-skin"
    },
    "first_move": "bind",
    "seconde_move": "slam",
    "third_move": "headbutt",
    "fourth_move": "body-slam"
  },
  {
    "pokedex_index": 24,
    "name": "arbok",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg",
    "experience": 157,
    "heigth": 35,
    "hp": 60,
    "stats": {
      "attack": 95,
      "defense": 69,
      "special_attack": 65,
      "special_defence": 79,
      "speed": 80
    },
    "weight": 650,
    "type": {
      "primary_type": "poison",
      "secondary_type": null
    },
    "price": 25,
    "ability": {
      "first_ability": "intimidate",
      "seconde_ability": "shed-skin"
    },
    "first_move": "bind",
    "seconde_move": "slam",
    "third_move": "headbutt",
    "fourth_move": "body-slam"
  },
  {
    "pokedex_index": 25,
    "name": "pikachu",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
    "experience": 112,
    "heigth": 4,
    "hp": 35,
    "stats": {
      "attack": 55,
      "defense": 40,
      "special_attack": 50,
      "special_defence": 50,
      "speed": 90
    },
    "weight": 60,
    "type": {
      "primary_type": "electric",
      "secondary_type": null
    },
    "price": 18,
    "ability": {
      "first_ability": "static",
      "seconde_ability": "lightning-rod"
    },
    "first_move": "mega-punch",
    "seconde_move": "pay-day",
    "third_move": "thunder-punch",
    "fourth_move": "slam"
  },
  {
    "pokedex_index": 26,
    "name": "raichu",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg",
    "experience": 243,
    "heigth": 8,
    "hp": 60,
    "stats": {
      "attack": 90,
      "defense": 55,
      "special_attack": 90,
      "special_defence": 80,
      "speed": 110
    },
    "weight": 300,
    "type": {
      "primary_type": "electric",
      "secondary_type": null
    },
    "price": 38,
    "ability": {
      "first_ability": "static",
      "seconde_ability": "lightning-rod"
    },
    "first_move": "mega-punch",
    "seconde_move": "pay-day",
    "third_move": "thunder-punch",
    "fourth_move": "slam"
  },
  {
    "pokedex_index": 27,
    "name": "sandshrew",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg",
    "experience": 60,
    "heigth": 6,
    "hp": 50,
    "stats": {
      "attack": 75,
      "defense": 85,
      "special_attack": 20,
      "special_defence": 30,
      "speed": 40
    },
    "weight": 120,
    "type": {
      "primary_type": "ground",
      "secondary_type": null
    },
    "price": 9,
    "ability": {
      "first_ability": "sand-veil",
      "seconde_ability": "sand-rush"
    },
    "first_move": "scratch",
    "seconde_move": "swords-dance",
    "third_move": "cut",
    "fourth_move": "sand-attack"
  },
  {
    "pokedex_index": 28,
    "name": "sandslash",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg",
    "experience": 158,
    "heigth": 10,
    "hp": 75,
    "stats": {
      "attack": 100,
      "defense": 110,
      "special_attack": 45,
      "special_defence": 55,
      "speed": 65
    },
    "weight": 295,
    "type": {
      "primary_type": "ground",
      "secondary_type": null
    },
    "price": 25,
    "ability": {
      "first_ability": "sand-veil",
      "seconde_ability": "sand-rush"
    },
    "first_move": "scratch",
    "seconde_move": "swords-dance",
    "third_move": "cut",
    "fourth_move": "sand-attack"
  },
  {
    "pokedex_index": 29,
    "name": "nidorino",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg",
    "experience": 55,
    "heigth": 4,
    "hp": 55,
    "stats": {
      "attack": 47,
      "defense": 52,
      "special_attack": 40,
      "special_defence": 40,
      "speed": 41
    },
    "weight": 70,
    "type": {
      "primary_type": "poison",
      "secondary_type": null
    },
    "price": 9,
    "ability": {
      "first_ability": "poison-point",
      "seconde_ability": "rivalry"
    },
    "first_move": "scratch",
    "seconde_move": "cut",
    "third_move": "double-kick",
    "fourth_move": "headbutt"
  },
  {
    "pokedex_index": 30,
    "name": "nidorina",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg",
    "experience": 128,
    "heigth": 8,
    "hp": 70,
    "stats": {
      "attack": 62,
      "defense": 67,
      "special_attack": 55,
      "special_defence": 55,
      "speed": 56
    },
    "weight": 200,
    "type": {
      "primary_type": "poison",
      "secondary_type": null
    },
    "price": 20,
    "ability": {
      "first_ability": "poison-point",
      "seconde_ability": "rivalry"
    },
    "first_move": "scratch",
    "seconde_move": "cut",
    "third_move": "double-kick",
    "fourth_move": "headbutt"
  },
  {
    "pokedex_index": 31,
    "name": "nidoqueen",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg",
    "experience": 253,
    "heigth": 13,
    "hp": 90,
    "stats": {
      "attack": 92,
      "defense": 87,
      "special_attack": 75,
      "special_defence": 85,
      "speed": 76
    },
    "weight": 600,
    "type": {
      "primary_type": "poison",
      "secondary_type": "ground"
    },
    "price": 40,
    "ability": {
      "first_ability": "poison-point",
      "seconde_ability": "rivalry"
    },
    "first_move": "mega-punch",
    "seconde_move": "pay-day",
    "third_move": "fire-punch",
    "fourth_move": "ice-punch"
  },
  {
    "pokedex_index": 32,
    "name": "nidoking",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg",
    "experience": 253,
    "heigth": 14,
    "hp": 81,
    "stats": {
      "attack": 102,
      "defense": 77,
      "special_attack": 85,
      "special_defence": 75,
      "speed": 85
    },
    "weight": 620,
    "type": {
      "primary_type": "poison",
      "secondary_type": "ground"
    },
    "price": 40,
    "ability": {
      "first_ability": "poison-point",
      "seconde_ability": "rivalry"
    },
    "first_move": "mega-punch",
    "seconde_move": "pay-day",
    "third_move": "fire-punch",
    "fourth_move": "ice-punch"
  },
  {
    "pokedex_index": 33,
    "name": "clefairy",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg",
    "experience": 113,
    "heigth": 6,
    "hp": 70,
    "stats": {
      "attack": 45,
      "defense": 48,
      "special_attack": 60,
      "special_defence": 65,
      "speed": 35
    },
    "weight": 75,
    "type": {
      "primary_type": "fairy",
      "secondary_type": null
    },
    "price": 18,
    "ability": {
      "first_ability": "cute-charm",
      "seconde_ability": "magic-guard"
    },
    "first_move": "pound",
    "seconde_move": "double-slap",
    "third_move": "mega-punch",
    "fourth_move": "fire-punch"
  },
  {
    "pokedex_index": 34,
    "name": "clefable",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/36.svg",
    "experience": 242,
    "heigth": 13,
    "hp": 95,
    "stats": {
      "attack": 70,
      "defense": 73,
      "special_attack": 95,
      "special_defence": 90,
      "speed": 60
    },
    "weight": 400,
    "type": {
      "primary_type": "fairy",
      "secondary_type": null
    },
    "price": 38,
    "ability": {
      "first_ability": "cute-charm",
      "seconde_ability": "magic-guard"
    },
    "first_move": "pound",
    "seconde_move": "double-slap",
    "third_move": "mega-punch",
    "fourth_move": "fire-punch"
  },
  {
    "pokedex_index": 35,
    "name": "vulpix",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/37.svg",
    "experience": 60,
    "heigth": 6,
    "hp": 38,
    "stats": {
      "attack": 41,
      "defense": 40,
      "special_attack": 50,
      "special_defence": 65,
      "speed": 65
    },
    "weight": 99,
    "type": {
      "primary_type": "fire",
      "secondary_type": null
    },
    "price": 9,
    "ability": {
      "first_ability": "flash-fire",
      "seconde_ability": "drought"
    },
    "first_move": "headbutt",
    "seconde_move": "tackle",
    "third_move": "body-slam",
    "fourth_move": "take-down"
  },
  {
    "pokedex_index": 36,
    "name": "ninetales",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg",
    "experience": 177,
    "heigth": 11,
    "hp": 73,
    "stats": {
      "attack": 76,
      "defense": 75,
      "special_attack": 81,
      "special_defence": 100,
      "speed": 100
    },
    "weight": 199,
    "type": {
      "primary_type": "fire",
      "secondary_type": null
    },
    "price": 28,
    "ability": {
      "first_ability": "flash-fire",
      "seconde_ability": "drought"
    },
    "first_move": "headbutt",
    "seconde_move": "tackle",
    "third_move": "body-slam",
    "fourth_move": "take-down"
  },
  {
    "pokedex_index": 37,
    "name": "jigglypuff",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg",
    "experience": 95,
    "heigth": 5,
    "hp": 115,
    "stats": {
      "attack": 45,
      "defense": 20,
      "special_attack": 45,
      "special_defence": 25,
      "speed": 20
    },
    "weight": 55,
    "type": {
      "primary_type": "normal",
      "secondary_type": "fairy"
    },
    "price": 15,
    "ability": {
      "first_ability": "cute-charm",
      "seconde_ability": "competitive"
    },
    "first_move": "pound",
    "seconde_move": "double-slap",
    "third_move": "mega-punch",
    "fourth_move": "fire-punch"
  },
  {
    "pokedex_index": 38,
    "name": "wigglytuff",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg",
    "experience": 218,
    "heigth": 10,
    "hp": 140,
    "stats": {
      "attack": 70,
      "defense": 45,
      "special_attack": 85,
      "special_defence": 50,
      "speed": 45
    },
    "weight": 120,
    "type": {
      "primary_type": "normal",
      "secondary_type": "fairy"
    },
    "price": 34,
    "ability": {
      "first_ability": "cute-charm",
      "seconde_ability": "competitive"
    },
    "first_move": "pound",
    "seconde_move": "double-slap",
    "third_move": "mega-punch",
    "fourth_move": "fire-punch"
  },
  {
    "pokedex_index": 39,
    "name": "zubat",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/41.svg",
    "experience": 49,
    "heigth": 8,
    "hp": 40,
    "stats": {
      "attack": 45,
      "defense": 35,
      "special_attack": 30,
      "special_defence": 40,
      "speed": 55
    },
    "weight": 75,
    "type": {
      "primary_type": "poison",
      "secondary_type": "flying"
    },
    "price": 8,
    "ability": {
      "first_ability": "inner-focus",
      "seconde_ability": "infiltrator"
    },
    "first_move": "razor-wind",
    "seconde_move": "gust",
    "third_move": "wing-attack",
    "fourth_move": "whirlwind"
  },
  {
    "pokedex_index": 40,
    "name": "golbat",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/42.svg",
    "experience": 159,
    "heigth": 16,
    "hp": 75,
    "stats": {
      "attack": 80,
      "defense": 70,
      "special_attack": 65,
      "special_defence": 75,
      "speed": 90
    },
    "weight": 550,
    "type": {
      "primary_type": "poison",
      "secondary_type": "flying"
    },
    "price": 25,
    "ability": {
      "first_ability": "inner-focus",
      "seconde_ability": "infiltrator"
    },
    "first_move": "razor-wind",
    "seconde_move": "wing-attack",
    "third_move": "whirlwind",
    "fourth_move": "fly"
  },
  {
    "pokedex_index": 43,
    "name": "oddish",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/43.svg",
    "experience": 64,
    "heigth": 5,
    "hp": 45,
    "stats": {
      "attack": 50,
      "defense": 55,
      "special_attack": 75,
      "special_defence": 65,
      "speed": 30
    },
    "weight": 54,
    "type": {
      "primary_type": "grass",
      "secondary_type": "poison"
    },
    "price": 10,
    "ability": {
      "first_ability": "chlorophyll",
      "seconde_ability": "run-away"
    },
    "first_move": "swords-dance",
    "seconde_move": "cut",
    "third_move": "headbutt",
    "fourth_move": "take-down"
  },
  {
    "pokedex_index": 42,
    "name": "gloom",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/44.svg",
    "experience": 138,
    "heigth": 8,
    "hp": 60,
    "stats": {
      "attack": 65,
      "defense": 70,
      "special_attack": 85,
      "special_defence": 75,
      "speed": 40
    },
    "weight": 86,
    "type": {
      "primary_type": "grass",
      "secondary_type": "poison"
    },
    "price": 22,
    "ability": {
      "first_ability": "chlorophyll",
      "seconde_ability": "stench"
    },
    "first_move": "swords-dance",
    "seconde_move": "cut",
    "third_move": "headbutt",
    "fourth_move": "take-down"
  },
  {
    "pokedex_index": 43,
    "name": "vileplume",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/45.svg",
    "experience": 245,
    "heigth": 12,
    "hp": 75,
    "stats": {
      "attack": 80,
      "defense": 85,
      "special_attack": 110,
      "special_defence": 90,
      "speed": 50
    },
    "weight": 186,
    "type": {
      "primary_type": "grass",
      "secondary_type": "poison"
    },
    "price": 38,
    "ability": {
      "first_ability": "chlorophyll",
      "seconde_ability": "effect-spore"
    },
    "first_move": "swords-dance",
    "seconde_move": "cut",
    "third_move": "headbutt",
    "fourth_move": "body-slam"
  },
  {
    "pokedex_index": 44,
    "name": "paras",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/46.svg",
    "experience": 57,
    "heigth": 3,
    "hp": 35,
    "stats": {
      "attack": 70,
      "defense": 55,
      "special_attack": 45,
      "special_defence": 55,
      "speed": 25
    },
    "weight": 54,
    "type": {
      "primary_type": "bug",
      "secondary_type": "grass"
    },
    "price": 9,
    "ability": {
      "first_ability": "effect-spore",
      "seconde_ability": "dry-skin"
    },
    "first_move": "scratch",
    "seconde_move": "swords-dance",
    "third_move": "cut",
    "fourth_move": "headbutt"
  },
  {
    "pokedex_index": 45,
    "name": "parasect",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/47.svg",
    "experience": 142,
    "heigth": 10,
    "hp": 60,
    "stats": {
      "attack": 95,
      "defense": 80,
      "special_attack": 60,
      "special_defence": 80,
      "speed": 30
    },
    "weight": 295,
    "type": {
      "primary_type": "bug",
      "secondary_type": "grass"
    },
    "price": 22,
    "ability": {
      "first_ability": "effect-spore",
      "seconde_ability": "dry-skin"
    },
    "first_move": "scratch",
    "seconde_move": "swords-dance",
    "third_move": "cut",
    "fourth_move": "headbutt"
  },
  {
    "pokedex_index": 46,
    "name": "venonat",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/48.svg",
    "experience": 61,
    "heigth": 10,
    "hp": 60,
    "stats": {
      "attack": 55,
      "defense": 50,
      "special_attack": 40,
      "special_defence": 55,
      "speed": 45
    },
    "weight": 300,
    "type": {
      "primary_type": "bug",
      "secondary_type": "poison"
    },
    "price": 10,
    "ability": {
      "first_ability": "compound-eyes",
      "seconde_ability": "tinted-lens"
    },
    "first_move": "headbutt",
    "seconde_move": "tackle",
    "third_move": "take-down",
    "fourth_move": "double-edge"
  },
  {
    "pokedex_index": 47,
    "name": "venomoth",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/49.svg",
    "experience": 158,
    "heigth": 15,
    "hp": 70,
    "stats": {
      "attack": 65,
      "defense": 60,
      "special_attack": 90,
      "special_defence": 75,
      "speed": 90
    },
    "weight": 125,
    "type": {
      "primary_type": "bug",
      "secondary_type": "poison"
    },
    "price": 25,
    "ability": {
      "first_ability": "shield-dust",
      "seconde_ability": "tinted-lens"
    },
    "first_move": "razor-wind",
    "seconde_move": "gust",
    "third_move": "whirlwind",
    "fourth_move": "headbutt"
  },
  {
    "pokedex_index": 48,
    "name": "diglett",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/50.svg",
    "experience": 53,
    "heigth": 2,
    "hp": 10,
    "stats": {
      "attack": 55,
      "defense": 25,
      "special_attack": 35,
      "special_defence": 45,
      "speed": 95
    },
    "weight": 8,
    "type": {
      "primary_type": "ground",
      "secondary_type": null
    },
    "price": 8,
    "ability": {
      "first_ability": "sand-veil",
      "seconde_ability": "arena-trap"
    },
    "first_move": "scratch",
    "seconde_move": "cut",
    "third_move": "sand-attack",
    "fourth_move": "headbutt"
  },
  {
    "pokedex_index": 49,
    "name": "dugtrio",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/51.svg",
    "experience": 149,
    "heigth": 7,
    "hp": 35,
    "stats": {
      "attack": 100,
      "defense": 50,
      "special_attack": 50,
      "special_defence": 70,
      "speed": 120
    },
    "weight": 333,
    "type": {
      "primary_type": "ground",
      "secondary_type": null
    },
    "price": 23,
    "ability": {
      "first_ability": "sand-veil",
      "seconde_ability": "arena-trap"
    },
    "first_move": "scratch",
    "seconde_move": "cut",
    "third_move": "sand-attack",
    "fourth_move": "headbutt"
  },
  {
    "pokedex_index": 50,
    "name": "meowth",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/52.svg",
    "experience": 58,
    "heigth": 4,
    "hp": 40,
    "stats": {
      "attack": 45,
      "defense": 35,
      "special_attack": 40,
      "special_defence": 40,
      "speed": 90
    },
    "weight": 42,
    "type": {
      "primary_type": "normal",
      "secondary_type": null
    },
    "price": 9,
    "ability": {
      "first_ability": "pickup",
      "seconde_ability": "technician"
    },
    "first_move": "pay-day",
    "seconde_move": "scratch",
    "third_move": "cut",
    "fourth_move": "headbutt"
  },
  {
    "pokedex_index": 51,
    "name": "persian",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/53.svg",
    "experience": 154,
    "heigth": 10,
    "hp": 65,
    "stats": {
      "attack": 70,
      "defense": 60,
      "special_attack": 65,
      "special_defence": 65,
      "speed": 115
    },
    "weight": 320,
    "type": {
      "primary_type": "normal",
      "secondary_type": null
    },
    "price": 24,
    "ability": {
      "first_ability": "limber",
      "seconde_ability": "technician"
    },
    "first_move": "pay-day",
    "seconde_move": "scratch",
    "third_move": "cut",
    "fourth_move": "headbutt"
  }
];

export default pokemons;