import React, { useState } from 'react'

export default function TextArea(props) {

  const doOnChange = (event) => {
    setText(event.target.value);
  }

  const doOnFind = (event) => {
    setFind(event.target.value);
  }

  const doOnReplace = (event) => {
    setRep(event.target.value);
  }

  const upCase = () => {
    setText(text.toUpperCase());
  }
  const lowCase = () => {
    setText(text.toLowerCase());
  }

  const clearTxt = () => {
    setText("");
  }

  const findReplace = () => {
    setText(text.replace(find, rep));
  }

  const [text, setText] = useState('');
  const [find, setFind] = useState('');
  const [rep, setRep] = useState('');
  return (
    <>
      <div className="container txtarea">
        <br />
        <div>
          <form>
            <h2>{props.heading}</h2>
            <div className="form-group">
              <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter text to modify" onChange={doOnChange} value={text} rows="10"></textarea>
            </div>
          </form>
        </div>
        <div>
          <button className="btn btn-primary " onClick={upCase}>TEXT</button>
          <button className="btn btn-primary mx-3" onClick={lowCase}>text</button>
          <button className="btn btn-primary mx-3" onClick={clearTxt}>Clear text</button>
          <br /> <br />

        </div>
        <div className="container">
          <textarea name="tofind" id="find" value={find} cols="20" rows="1" onChange={doOnFind} placeholder="find"></textarea>
          <br />
          <textarea name="toreplace" id="replace" value={rep} cols="20" rows="1" onChange={doOnReplace} placeholder="replace"></textarea>
          <br />
          <button className="btn btn-primary my-2" onClick={findReplace}>Replace</button>

        </div>
        <div className="container my-3">
          <p>No. of characters : {text.length} <br />
            total number of words : {text.split(/\s+/).length} <br />
            Number of lines : {text.split("\n").length}</p>
          <br />
        </div>
      </div>
    </>
  )
}
