import {useState, useContext} from "react";
import {UserContext } from "./UserContext";
import { useHistory } from "react-router-dom";

export const PlayWords = ({data}) => {
    const [selectedWords, setSelectedWord] = useState([]);
    const [mode, setMode] = useState(true);
    const { score, setScore} = useContext(UserContext);
    let history = useHistory();

const all_words = data.allWords
   const good_words = data.goodWords
   const bad_words = all_words.filter((word) => !good_words.includes(word))

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
    let wrong_answers = selectedWords.filter((word) => !good_words.includes(word))
    let good_answers = selectedWords.filter((word) => !bad_words.includes(word))
    let omitted_answers = good_words.filter((word) => !good_answers.includes(word))

    setScore(good_answers.length * 2 - (wrong_answers.length + omitted_answers.length))
  history.push("/score");
}

    return (<>
            <div className="words__main">
                <div>{data.question}</div>
                <div className="words__container">
                    {data.allWords.map(el => <div className="paragraf__container">
                        <p onClick={() => handleClick(el)} className={selectedWords.includes(el) && "active"}
                           key={el}>{el}</p>
                    </div>)}
                </div>
                <button onClick={mode ? check : sumScores} className="btn">{mode ? " check answers": "finish game"}</button>
            </div>
        </>
    )
}


 