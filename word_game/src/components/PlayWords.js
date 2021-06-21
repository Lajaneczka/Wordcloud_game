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
    let elements= document.getElementsByClassName("active")
    Array.from(elements).forEach(el=>{
        if (data.goodWords.includes(el.innerText)){
            el.classList.add('good');
            el.innerHTML = '<span class="good-comment">Good</span>' + el.innerHTML
             console.log(el.innerText, "el.innerHtml")
        }
        else {
            el.classList.add('bad')
             el.innerHTML = '<span class="bad-comment">Bad</span>' + el.innerHTML
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
                <button onClick={check} className="btn">check answers</button>
       {/* <Link to="/score">
                    <button onClick={check} className="btn">check answers</button>
                </Link> */}
            </div>
        </>
    )
}


 