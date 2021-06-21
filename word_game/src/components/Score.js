import {useContext} from "react"
import {UserContext} from "./UserContext"

export const Score = () => {
    const {value, setValue, score} = useContext(UserContext);
    return (
        <div className="container">
            <h3>
                Congratulations {value} <br/>
                Your score is {score} </h3>
        </div>
    )
}