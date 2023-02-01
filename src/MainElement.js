import DataFetcher from "./DataFetcher";
import { useState, useEffect } from "react";
import {BsArrowUpSquareFill} from "react-icons/bs"

function MainElement () {

    const [ isIconVisible, setIsIconVisible ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                setIsIconVisible(true);
            } else {
                setIsIconVisible(false);
            }})
    }, [])

 

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
                    <p>Click <a target="_blank" rel="noreferrer" href="https://gelianthus.github.io/pokeapi-pokemon-list" className="page-link">here</a> to browse all available search inputs.</p>
                </div>
                <button onClick={scrollToTop} className={`auto-scroll-main ${isIconVisible ? "icon-visible" : "icon-hidden"}`}><BsArrowUpSquareFill className="arrow-icon-main"></BsArrowUpSquareFill></button>
            </footer>
        </>
    )
}

export default MainElement;