import React from 'react'

export default function Documentation() {
    return (
        <>
            <div className="docu">
                <div>
                <h4 className='heading'>DOCUMENTATION</h4>
                <br />
                TextAn is a single-page application built using ReactJS. <br />
                It has the following components : <br /> <br />
                <div>
                    <p className="heading">1. Text area to enter text -
                    </p>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter text to modify" rows="4"></textarea>
                    <br />
                    It is a text area where you can type your content or
                    simply paste it from other reosources. <br />
                </div>
                <div>
                    <p className="heading">2.
                    TEXT  -</p>
                    <button className="btn btn-primary ">TEXT</button>
                    <br /> It is a functionality of TextAn which converts the whole content into
                    uppercase <br />
                </div>
                
                <div>

                <p className="heading">
                3. text - 
                </p>
                <button className="btn btn-primary">text</button>
          <br />
          It is a functionality of TextAn which converts the whole content into
          lowercase <br />
          </div>
          <div>
          <p className="heading">
          4.
          Clear text - 
          </p>
          <button className="btn btn-primary" >Clear text</button>
          <br />
          It is a functionality of TextAn which clears the content <br />
          </div>
          <div>
          <p className="heading">
          5.
          Find and Replace - 
          
          </p>
          <textarea  cols="20" rows="1"placeholder="find"></textarea>
          <br />
          <textarea cols="20" rows="1" placeholder="replace"></textarea>
          <br />
          <button className="btn btn-primary my-2">Replace</button>
          <br />
          find - searches the whole content for the specified string <br />
          replace - replaces the found content by the specified content <br />
          
          </div>
          <div>
          <p className="heading">
          6.
          Statistics - 
          </p>
          The number of character, number of words and number of lines
          are constantly kept track of. <br />
          </div>
          <div>
          <p className="heading">
          7.
          Dark mode and Light Mode - </p>

          To enhance the user experience, switching between dark mode and light
          mode is added.
          </div>
          <br /><br /><br />
                </div>
          </div>
        </>
    )
}
