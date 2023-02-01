const typeEffectiveness = [
	{normal: {
		offense: {
			increasedEffect: ["(none)"],
			decreasedEffect: ["Rock", "Steel"],
			noEffect: ["Ghost"]	
			},
		defense: {
			increasedEffect: ["(none)"],
			decreasedEffect: ["Fighting"],
			noEffect: ["Ghost"]	
			}
		}
	},
	{fighting: {
		offense: {
			increasedEffect: ["Normal", "Rock", "Steel", "Ice", "Dark"],
			decreasedEffect: ["Flying", "Poison", "Bug", "Psychic", "Fairy"],
			noEffect: ["Ghost"]
		},
		defense: {
			increasedEffect: ["Rock", "Bug", "Dark"],
			decreasedEffect: ["Flying", "Psychic", "Fairy"],
			noEffect: ["(none)"]
		}}
	},
	{flying: {
		offense: {
			increasedEffect: ["Fighting", "Bug", "Grass"],
			decreasedEffect: ["Rock", "Steel", "Electric"],
			noEffect: ["(none)"]
		},
		defense: {
			increasedEffect: ["Fighting", "Bug", "Grass", "Ground"],
			decreasedEffect: ["Rock", "Electric", "Ice"],
			noEffect: ["(none)"]
		}}
	},
	{poison: {
		offense: {
			increasedEffect: ["Grass", "Fairy"],
			decreasedEffect: ["Poison", "Ground", "Rock", "Ghost"],
			noEffect: ["Steel"]
		},
		defense: {
			increasedEffect: ["Fighting", "Poison", "Grass", "Fairy"],
			decreasedEffect: ["Ground", "Psychic"],
			noEffect: ["(none)"]
		}}
	},
	{ground: {
		offense: {
			increasedEffect: ["Poison", "Rock", "Steel", "Fire", "Electric"],
			decreasedEffect: ["Bug", "Grass"],
			noEffect: ["Flying"]
		},
		defense: {
			increasedEffect: ["Poison", "Rock"],
			decreasedEffect: ["Water", "Grass", "Ice"],
			noEffect: ["(none)"]
		}}
	},
	{rock: {
		offense: {
			increasedEffect: ["Flying", "Bug", "Fire", 	"Ice"],
			decreasedEffect: ["Fighting", "Ground", 	"Steel"],
			noEffect: ["(none)"]
		},
		defense: {
			increasedEffect: ["Normal", "Flying", "Poison", "Fire"],
			decreasedEffect: ["Fighting", "Ground", "Steel", "Water", "Grass"],
			noEffect: ["(none)"]
		}}
	},
	{bug: {
		offense: {
			increasedEffect: ["Grass", "Psychic", "Dark"],
			decreasedEffect: ["Fighting", "Flying", "Poison", "Ghost", "Steel", "Fire", "Fairy"],
			noEffect: ["(none)"]
		},
		defense: {
			increasedEffect: ["Fighting", "Ground", "Grass"],
			decreasedEffect: ["Flying", "Rock", "Fire"],
			noEffect: ["(none)"]
		}}
	},
	{ghost: {
		offense: {
			increasedEffect: ["Ghost", "Psychic"],
			decreasedEffect: ["Dark"],
			noEffect: ["Normal"]
		},
		defense: {
			increasedEffect: ["Poison", "Bug"],
			decreasedEffect: ["Ghost", "Dark"],
			noEffect: ["Normal", "Fighting"]
		}}
	},
	{steel: {
		offense: {
			increasedEffect: ["Rock", "Ice", "Fairy"],
			decreasedEffect: ["Steel", "Fire", "Water", "Electric"],
			noEffect: ["(none)"]
		},
		defense: {
			increasedEffect: ["Normal", "Flying", "Rock", "Bug", "Steel", "Grass", "Psychic", "Ice", "Dragon", "Fairy"],
			decreasedEffect: ["Fighting", "Ground", "Fire"],
			noEffect: ["Poison"]
		}}
	},
	{fire: {
		offense: {
			increasedEffect: ["Bug", "Steel", "Grass", "Ice"],
			decreasedEffect: ["Rock", "Fire", "Water", "Dragon"],
			noEffect: ["(none)"]
		},
		defense: {
			increasedEffect: ["Bug", "Steel", "Fire", "Grass", "Ice"],
			decreasedEffect: ["Ground", "Rock", "Water"],
			noEffect: ["(none)"]
		}}
	},
	{water: {
		offense: {
			increasedEffect: ["Ground", "Rock", "Fire"],
			decreasedEffect: ["Water", "Grass", "Dragon"],
			noEffect: ["(none)"]
		},
		defense: {
			increasedEffect: ["Steel", "Fire", "Water", "Ice"],
			decreasedEffect: ["Grass", "Electric"],
			noEffect: ["(none)"]
		}}
	},
	{grass: {
		offense: {
			increasedEffect: ["Ground", "Rock", "Water"],
			decreasedEffect: ["Flying", "Poison", "Bug", "Steel", "Fire", "Grass", "Dragon"],
			noEffect: ["(none)"]
		},
		defense: {
			increasedEffect: ["Ground", "Water", "Grass", "Electric"],
			decreasedEffect: ["Flying", "Poison", "Bug", "Fire", "Ice"],
			noEffect: ["(none)"]
		}}
	},
	{electric: {
		offense: {
			increasedEffect: ["Flying", "Water"],
			decreasedEffect: ["Grass", "Electric", "Dragon"],
			noEffect: ["Ground"]
		},
		defense: {
			increasedEffect: ["Flying", "Steel", "Electric"],
			decreasedEffect: ["Ground"],
			noEffect: ["(none)"]
		}}
	},
	{psychic: {
		offense: {
			increasedEffect: ["Fighting", "Poison"],
			decreasedEffect: ["Steel", "Psychic"],
			noEffect: ["Dark"]
		},
		defense: {
			increasedEffect: ["Fighting", "Psychic"],
			decreasedEffect: ["Bug", "Ghost", "Dark"],
			noEffect: ["(none)"]
		}}
	},
	{ice: {
		offense: {
			increasedEffect: ["Flying", "Ground", "Grass", "Dragon"],
			decreasedEffect: ["Steel", "Fire", "Water", "Ice"],
			noEffect: ["(none)"]
		},
		defense: {
			increasedEffect: ["Ice"],
			decreasedEffect: ["Fighting", "Rock", "Steel", "Fire"],
			noEffect: ["(none)"]
		}}
	},
	{dragon: {
		offense: {
			increasedEffect: ["Dragon"],
			decreasedEffect: ["Steel"],
			noEffect: ["Fairy"]
		},
		defense: {
			increasedEffect: ["Fire", "Water", "Grass", "Electric"],
			decreasedEffect: ["Ice", "Dragon", "Fairy"],
			noEffect: ["(none)"]
		}}
	},
	{dark: {
		offense: {
			increasedEffect: ["Ghost", "Psychic"],
			decreasedEffect: ["Fighting", "Dark", "Fairy"],
			noEffect: ["(none)"]
		},
		defense: {
			increasedEffect: ["Ghost", "Dark"],
			decreasedEffect: ["Fighting", "Bug", "Fairy"],
			noEffect: ["Psychic"]
		}}
	},
	{fairy: {
		offense: {
			increasedEffect: ["Fighting", "Dragon", "Dark"],
			decreasedEffect: ["Poison", "Steel", "Fire"],
			noEffect: ["(none)"]
		},
		defense: {
			increasedEffect: ["Fighting", "Bug", "Dark"],
			decreasedEffect: ["Poison", "Steel"],
			noEffect: ["Dragon"]
		}}
	}
]

export default typeEffectiveness;