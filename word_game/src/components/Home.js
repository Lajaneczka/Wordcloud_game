import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "./UserContext"


export const Home = () => {

    const {value, setValue} = useContext(UserContext);


    return (
        <>
            <div className="container">
                <div className="home__wrapper">
                    <h1>Wordcloud game</h1>
                    <div className="input-areas">
                        <form className="form">
                            <input
                                className="input"
                                name="nick"
                                type="text"
                                placeholder="Enter your nickname here..."
                                value={value}
                                onChange={e => setValue(e.target.value)}/>

                            <Link to="/play">
                                <button className="btn">play</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
