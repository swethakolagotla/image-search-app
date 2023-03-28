import React ,{useState } from 'react'
const Images = ( ) => {
    const[state,setState]=useState("")
    const [res, setRes] = useState([]);
const handleChange=(event)=>{
        console.log(event.target.value)
        setState(event.target.value)
    }
const handleClick=()=>{
        fetchRequest();
        setState("")
    }
const Access_Key = "cFxDEqNeJfbjzOTwm1BAGIc5nIj6H6ueoDCseLZnQS0";
const fetchRequest=async()=>{
    debugger
    try{
        const data = await fetch(
  `https://api.unsplash.com/search/photos?page=1&query=${state}&client_id=${Access_Key}`
);
  const Data = await data.json();
  const result=Data.results
  console.log(result)
  setRes(result)
}
 catch(err){
console.log("err",err)
 }
    };
   
return (
      <div className="main">
        <h1 className='h1'>Images Search App</h1>
        <input
          className="input"
          type="text"
          name="state"
          placeholder='search anything......'
          value={state}
          onChange={handleChange}
        />
        <button className="button"type="submit" onClick={handleClick}>
          Search
        </button>
        <div className="images">
          <br></br>
          {res.map((ele, i) => (
            <img
              style={{ width: "200px", height: "200px" }}
              key={i}
              className="col-3 img-fluid img-thumbnail"
              src={ele.urls.small_s3}
              alt="ele.alt_description"
            />
          ))}
        </div>
      </div>
    );
}

export default Images