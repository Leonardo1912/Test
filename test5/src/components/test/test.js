import React, {useState} from "react";
import './test.scss';
import {useDispatch, useSelector} from "react-redux";
import {requestWords} from "../../redux/redux-store/testReducer";

const Test = () => {
    const words = useSelector(state => state.testPage.words)
    const [word, setWord] = useState()
    const [newWord, setNewWord] = useState()
    const dispatch = useDispatch()
    const changeWord = (e) => {
        setWord(e.currentTarget.value)
    }
    const enter = () => {
        setNewWord(word)
        dispatch(requestWords(word))
    }
    return (
        <div>
            <div className='inputBlock'>
                <div>
                    <input onChange={changeWord} type="text"/>
                </div>
                <div>
                    <button onClick={enter}>Enter</button>
                </div>
            </div>
            <div>
                <div>Your word: {newWord}</div>
                <div className="wordsBlock">
                    <div>Rhymes for this word:</div>
                    <div>{words.map(w => <div key={w.word.toString()} className="word">{w.word},</div>)}</div>
                </div>
            </div>
        </div>
    )
}

export default Test
