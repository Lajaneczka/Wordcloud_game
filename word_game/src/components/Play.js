import {useState, useEffect} from "react";
import {PlayWords} from "./PlayWords";

export const Play = () => {
    const [words, setWords] = useState(false);
    const [text, setText] = useState("check answear");

    const randomnumber = Math.floor(Math.random() * 3);

    useEffect(() => {
        fetch("http://localhost:3000/words")
            .then((resp) => resp.json())
            .then((data) => {
                setWords(data);
            }).catch(err => console.log(err))
    }, []);


    if (!words) {
        return "Trwa ładowanie"
    }
    return (<>

            <PlayWords data={(words[randomnumber])}/>

        </>
    );
};

