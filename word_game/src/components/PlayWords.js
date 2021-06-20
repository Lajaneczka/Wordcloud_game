import {useState} from "react";
import {Link} from "react-router-dom";

export const PlayWords = ({data}) => {
    const [selectedWords, setSelectedWord] = useState([]);
    const handleClick = (el) => {
        setSelectedWord(words => {
            console.log(words)
            return words.includes(el)
                ? words.filter((word) => word !== el)
                : [...words, el];
        });
    };

    const check = () => {
        return selectedWords.filter(el => {
            if (data.goodWords.includes(el)) {
                return el
            }
        })
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
                <Link to="/score">
                    <button onClick={check} className="btn">check answers</button>
                </Link>
            </div>
        </>
    )
}


 