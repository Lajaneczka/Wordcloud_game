import {useContext} from "react"
import {UserContext} from "./UserContext"

export const Score = () => {

    const {value, setValue} = useContext(UserContext);

    return (
        <div className="container">
            <h3>
                Congratulations {value} <br/>
                Your score is </h3>
            <p>liczba zaznaczonych poprawnych odpowiedzi * 2) - (liczba zaznaczonych błędnych odpowiedzi +
                liczba niezaznaczonych poprawnych odpowiedzi </p>

        </div>
    )
}