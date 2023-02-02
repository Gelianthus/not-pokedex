import TypeEffectiveness from "./TypeEffectiveness";
import { useState, useEffect } from "react";
import { typeTransparentColors, typeNonGradientColors} from "./type-colors";
import { BsFillInfoCircleFill } from "react-icons/bs";

function PokemonCard ({displayPokemon }) {

    const [ imgSrc, setImgSrc ] = useState("");
    const [ speciesDesc, setSpeciesDesc] = useState("");
    const [ isTextHidden, setIsTextHidden ] = useState(true);

    const textVisibilityToggle = () => {
        setIsTextHidden(!isTextHidden);
    }

    useEffect(() => {
        caches.match(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${displayPokemon.id}.png`).then(response => {
            if (response) {
                setImgSrc(response.url)
            } else {
                fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${displayPokemon.id}.png`).then(response => {
                    setImgSrc(response.url);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    let copy = response.clone();
                    caches.open("pokemon-sprites").then(cache => cache.put(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${displayPokemon.id}.png`, copy));
            })
            .catch(error => {
                console.log(`Error: ${error}`);
            });
        }
        });
        caches.match(displayPokemon.species.url).then(response => {
            if (response) {
                response.json().then(response => {setSpeciesDesc(response.flavor_text_entries[0].flavor_text)})
            } else {
                fetch(displayPokemon.species.url).then(response => {
                    if(!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`)
                    }
                    let copy = response.clone();
                    response.json().then(res => {
                        console.log(res);
                        setSpeciesDesc(res.flavor_text_entries[0].flavor_text);
                    })
                    caches.open("pokemon-species").then(cache => cache.put(displayPokemon.species.url, copy));
                }).catch(error => {
                    console.log(`Error: ${error}`)
                })
            }
        });
    }, [displayPokemon]);

    const capitalizeStr = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    const backgroundColorGradient = (type) => {
        return type === "normal" ? {background: typeTransparentColors.normal}
        : type === "fire" ? {background: typeTransparentColors.fire}
        : type === "water" ? {background: typeTransparentColors.water}
        : type === "electric" ? {background: typeTransparentColors.electric}
        : type === "grass" ? {background: typeTransparentColors.grass}
        : type === "ice" ? {background: typeTransparentColors.ice}
        : type === "fighting" ? {background: typeTransparentColors.fighting}
        : type === "poison" ? {background: typeTransparentColors.poison}
        : type === "ground" ? {background: typeTransparentColors.ground}
        : type === "flying" ? {background: typeTransparentColors.flying}
        : type === "psychic" ? {background: typeTransparentColors.psychic}
        : type === "bug" ? {background: typeTransparentColors.bug}
        : type === "rock" ? {background: typeTransparentColors.rock}
        : type === "ghost" ? {background: typeTransparentColors.ghost}
        : type === "dragon" ? {background: typeTransparentColors.dragon}
        : type === "dark" ? {background: typeTransparentColors.dark}
        : type === "steel" ? {background: typeTransparentColors.steel}
        : {background: typeTransparentColors.fairy}
    };

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
        <div className="pokemon-card">
            <div className="image-container">
                <img className="pokemon-image" style={backgroundColorGradient(displayPokemon.types[0].type.name)} src={imgSrc} alt={capitalizeStr(displayPokemon.name)}/>
            </div>
            <div className="pokemon-details">
                <h2 className="pokemon-name">{capitalizeStr(displayPokemon.name)}</h2>
                <div className="pokemon-information">
                    <h3 className="card-section-title">Information</h3>
                    {speciesDesc ? <p className="information-text">{speciesDesc}</p>
                    : <p className="information-text">It's a pokemon</p>}
                    <p className="note">Note: Some information are not translated to English</p>
                </div>
                <div className="pokemon-types">
                    <h3 className="card-section-title">Type/s <BsFillInfoCircleFill className="info-icon" onClick={textVisibilityToggle}></BsFillInfoCircleFill><span className="info-text-container"><p className={isTextHidden ? "info-text-hidden" : "info-text-visible"}>The first type is considered the primary.</p></span></h3>
                    <ul className="types">
                        {displayPokemon.types.map((type) => {
                            return <li style={backgroundColorFlat(type.type.name)} key={type.slot} className="type"><p>{capitalizeStr(type.type.name)}</p></li>
                        })}
                    </ul>
                </div>
                <div className="pokemon-base-stats">
                    <h3 className="card-section-title">Base Stats</h3>
                    <div className="stats-container">
                        <div className="stats">
                            <p className="stat">Hit Points</p>
                            <p className="stat">Attack</p>
                            <p className="stat">Defense</p>
                            <p className="stat">Special Attack</p>
                            <p className="stat">Special Defense</p>
                            <p className="stat">Speed</p>
                        </div>
                        <div className="stats-value">
                            <p className="stat-value">{displayPokemon.stats[0].base_stat}</p>
                            <p className="stat-value">{displayPokemon.stats[1].base_stat}</p>
                            <p className="stat-value">{displayPokemon.stats[2].base_stat}</p>
                            <p className="stat-value">{displayPokemon.stats[3].base_stat}</p>
                            <p className="stat-value">{displayPokemon.stats[4].base_stat}</p>
                            <p className="stat-value">{displayPokemon.stats[5].base_stat}</p>
                        </div>
                    </div>
                </div>
                <TypeEffectiveness displayPokemon={displayPokemon} />
            </div>
        </div>
    )
}

export default PokemonCard;