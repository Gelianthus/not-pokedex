import { useState, useEffect, useRef } from "react";
import PokemonCard from "./PokemonCard";
import ErrorMessage from "./ErrorMessage";
import { BsFillInfoCircleFill } from "react-icons/bs";
const Pokedex = require("pokeapi-js-wrapper");

function DataFetcher () {

    const [ pokemonName, setPokemonName ] = useState("pikachu");
    const [ displayPokemon, setDisplayPokemon ] = useState(null);
    const [ isError, setIsError ] = useState(false);
    const [ isDisabled, setIsDisabled ] = useState(true);
    const [ isTextHidden, setIsTextHidden ] = useState(true);

    const textVisibilityToggle = () => {
        setIsTextHidden(!isTextHidden);
    }
    const inputRef = useRef(null);

    useEffect(() => {
        const Pkdx = new Pokedex.Pokedex();
        async function fetchPokemon ()  {
            try {
                const pokemon = await Pkdx.getPokemonByName(pokemonName);
                setDisplayPokemon(pokemon);
                console.log(pokemon);
            } catch (error) {
                errorDisplayTimeout();
            }
            
        }
        fetchPokemon();
        // eslint-disable-next-line
    }, [pokemonName]);



    const clickHandle = () => {
        setPokemonName(inputRef.current.value.toLowerCase());
        setIsDisabled(true);
        inputRef.current.value = "";
        inputRef.current.focus();
    }

    const changeHandle = (event) => {
        if (event.target.value !== "") {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }

    const errorDisplayTimeout = () => {
        setIsError(true)
        setTimeout(() => {
            setIsError(false)
        }, 1000)

    }

    return (
        <div className="data-fetcher">
            
            <div className="user-inputs-container">
                <div className="text-input-container">
                    <p className={isTextHidden ? "info-text-hidden" : "search-info-visible"}>Pokémon not showing? Use the link below to check all available inputs.</p>
                    <input className="text-input user-input" type="text" ref={inputRef} onChange={changeHandle}/>
                    <div className="icon-container">
                        <BsFillInfoCircleFill className="info-icon" onClick={textVisibilityToggle}></BsFillInfoCircleFill>
                    </div>
                </div>
                <button className="button-input user-input" disabled={isDisabled} onClick={clickHandle}>Search</button>
            </div>
            {isError && <ErrorMessage />}
            {displayPokemon && <PokemonCard displayPokemon={displayPokemon} pokemonName={pokemonName} />}
        </div>
    )
}

export default DataFetcher;