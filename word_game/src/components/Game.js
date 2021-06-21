import {useState, useContext} from "react";
import {UserContext } from "./UserContext";
import { useHistory } from "react-router-dom";

export const Game = ({data}) => {
    const [selectedWords, setSelectedWord] = useState([]);
    const [mode, setMode] = useState(true);
    const {score, setScore} = useContext(UserContext);
    let history = useHistory();

   const allWords = data.allWords;
   const goodWords = data.goodWords;

    const handleClick = (el) => {
        setSelectedWord(words => {
            return words.includes(el)
                ? words.filter((word) => word !== el)
                : [...words, el];
        });
    };

    const check = () => {
    let elements= document.getElementsByClassName("active")
    Array.from(elements).forEach(el=>{
        if (data.goodWords.includes(el.innerText)){
            el.classList.add('good');
            el.innerHTML = '<span class="good-comment">Good</span>' + el.innerHTML
        }
        else {
            el.classList.add('bad')
            el.innerHTML = '<span class="bad-comment">Bad</span>' + el.innerHTML
             }
    })
    setMode(false)
}

const sumScores=()=>{
    const wrongAnswers = selectedWords.filter((word) => !goodWords.includes(word))
    const goodAnswers = selectedWords.filter((word) => goodWords.includes(word))
    const notChecked = goodWords.filter((word) => !goodAnswers.includes(word))
    setScore(goodAnswers.length * 2 - (wrongAnswers.length + notChecked.length))
    history.push("/score");
}

    return (<>
            <section className="game">
                <div>{data.question}</div>
                <div className="game__container">
                    {data.allWords.map(el => 
                      <div className="game__container__wrap">
                        <p onClick={() => handleClick(el)} className={selectedWords.includes(el) && "active"}
                           key={el}>{el}</p>
                    </div>)}
                </div>
                <button onClick={mode ? check : sumScores} className="btn">{mode ? " check answers": "finish game"}</button>
            </section>
        </>
    )
}


 