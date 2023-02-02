import typeEffectiveness from "./type-effectiveness_data";
import { typeNonGradientColors } from "./type-colors";

function TypeEffectiveness ({ displayPokemon }) {
    
    const checkType = (type, action, actionEffect) => {
        return typeEffectiveness.filter((typeObj) => {
            return typeObj[type];
        })[0][type][action][actionEffect].join(", ");
    }

    const capitalizeStr = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    const backgroundColorFlat = (type) => {
        return type === "normal" ? {background: typeNonGradientColors.normal}
        : type === "fire" ? {background: typeNonGradientColors.fire}
        : type === "water" ? {background: typeNonGradientColors.water}
        : type === "electric" ? {background: typeNonGradientColors.electric}
        : type === "grass" ? {background: typeNonGradientColors.grass}
        : type === "ice" ? {background: typeNonGradientColors.ice}
        : type === "fighting" ? {background: typeNonGradientColors.fighting}
        : type === "poison" ? {background: typeNonGradientColors.poison}
        : type === "ground" ? {background: typeNonGradientColors.ground}
        : type === "flying" ? {background: typeNonGradientColors.flying}
        : type === "psychic" ? {background: typeNonGradientColors.psychic}
        : type === "bug" ? {background: typeNonGradientColors.bug}
        : type === "rock" ? {background: typeNonGradientColors.rock}
        : type === "ghost" ? {background: typeNonGradientColors.ghost}
        : type === "dragon" ? {background: typeNonGradientColors.dragon}
        : type === "dark" ? {background: typeNonGradientColors.dark}
        : type === "steel" ? {background: typeNonGradientColors.steel}
        : {background: typeNonGradientColors.fairy}
    };


    return (
        <div className="pokemon-type-effectiveness">
            <h3 className="card-section-title">Type Effectiveness</h3>
            {displayPokemon.types.map((typeIndex) => {
                const pokemonType = typeIndex.type.name;
                return (
                    <div style={backgroundColorFlat(pokemonType)} key={typeIndex.slot} className="type-effectiveness">
                        <h4 className="type-heading">{capitalizeStr(typeIndex.type.name)}</h4>
                        <div className="effect-status-container">
                            <div className="effect-status">
                                <p className="status">Offensively strong against</p>
                                <p className="affected">{checkType(pokemonType, "offense", "increasedEffect")}</p>
                            </div>
                            <div className="effect-status">
                                <p className="status">Offensively weak against</p>
                                <p className="affected">{checkType(pokemonType, "offense", "decreasedEffect")}</p>
                            </div>
                            <div className="effect-status">
                                <p className="status">Has no effect against</p>
                                <p className="affected">{checkType(pokemonType, "offense", "noEffect")}</p>
                            </div>
                            <div className="effect-status">
                                <p className="status">Defensively strong against</p>
                                <p className="affected">{checkType(pokemonType, "defense", "increasedEffect")}</p>
                            </div>
                            <div className="effect-status">
                                <p className="status">Defensively weak against</p>
                                <p className="affected">{checkType(pokemonType, "defense", "decreasedEffect")}</p>
                            </div>
                            <div className="effect-status">
                                <p className="status">Cannot be affected by</p>
                                <p className="affected">{checkType(pokemonType, "defense", "noEffect")}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TypeEffectiveness;