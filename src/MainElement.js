import DataFetcher from "./DataFetcher";
import { useState, useEffect, useRef } from "react";
import {BsArrowUpSquareFill} from "react-icons/bs";
import pokemonNamesArr from "./PokemonList";

function MainElement () {

    const [ isIconVisible, setIsIconVisible ] = useState(false);

    const dialogRef = useRef(null);
    const dialogToggle = (dialogStatus) => {
        if (dialogStatus) {
            dialogRef.current.showModal();
        } else if (!dialogStatus) {
            dialogRef.current.close();
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                setIsIconVisible(true);
            } else {
                setIsIconVisible(false);
            }})
    }, []);

        const [ listArr, setListArr ] = useState(pokemonNamesArr);
    const inputValue = useRef(null);

    const filter = () => {
        setListArr(pokemonNamesArr.filter((index) => {
            return index.includes(inputValue.current.value.toLowerCase())
        }))
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <main>
                <header>
                    <h1>Definitely not a Pokédex</h1>
                    <p>Get information about Pokémon's type and effectiveness</p>
                    {/* alt + 130, alt + 0233 for é */}
                </header>
                <DataFetcher/>
            </main>

            <footer>
                <div>
                    <p>Made with</p>
                    <div><a rel="noreferrer" className="external-link" href="https://pokeapi.co/" target="_blank">PokeAPI</a> and <a rel="noreferrer" href="https://github.com/PokeAPI/pokeapi-js-wrapper" target="_blank" className="external-link">pokeapi-js-wrapper</a></div>
                </div>
                <div className="page-link-container">
                    <p>Click <button onClick={() => {dialogToggle(true)}} className="modal-button" >here</button> to browse all available search inputs.</p>
                    <dialog className="dialog-box" ref={dialogRef} >
                        <h2 className="header-two">
                            <button className="back-link" onClick={() => dialogToggle(false)}>Close</button>
                        </h2>
                        <div className="prefixes">
                            <p>Here are some of the available suffixes to target specific forms:</p>
                            <ul className="suffix-list">
                                <li className="suffix-item">"-mega"</li>
                                <li className="suffix-item">"-alola"</li>
                                <li className="suffix-item">"-galar"</li>
                                <li className="prefix-item">"-gmax"</li>
                            </ul>
                        </div>
                        <div className="search-input-container">
                            <input ref={inputValue} className="search-input" placeholder="Type to filter the list" onChange={filter}/>
                        </div>
                        <ul className="list-items">
                            {listArr.length < 1 && <li className="list-item">(No match)</li>}
                            {listArr.map((index) => {
                                return <li key={index} className="list-item">{index}</li>
                            })}
                        </ul>
                        {/* <button onClick={scrollToTop} className={`auto-scroll ${IconVisible ? "icon-visible" : "icon-hidden"}`}><BsArrowUpSquareFill className="arrow-icon"></BsArrowUpSquareFill></button> */}
                    </dialog>
                </div>
                <button onClick={scrollToTop} className={`auto-scroll-main ${isIconVisible ? "icon-visible" : "icon-hidden"}`}><BsArrowUpSquareFill className="arrow-icon-main"></BsArrowUpSquareFill></button>
            </footer>
        </>
    )
}

export default MainElement;
