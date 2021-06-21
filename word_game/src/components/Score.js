import {useContext} from "react"
import {UserContext} from "./UserContext"

export const Score = () => {
    const {value, score} = useContext(UserContext);
    return (
        <section className="container">
            <h3>
                Congratulations {value} <br/>
                Your score is {score} </h3>
        </section>
    )
}