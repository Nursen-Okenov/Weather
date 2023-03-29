import { useState, useEffect } from 'react'
import axios from 'axios'
function App() {
  const [data, setData] = useState([])
  const [city, setCity] = useState('')
  
  let call = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5901774c9bebcf311959ad49b0254f56`)
      .then(res => { setData(res.data) })
  }
  let submit = (e) => {
    e.preventDefault()
    call()
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input placeholder="Search" onChange={e => { setCity(e.target.value) }}></input>
      </form>
      <h1>{data.sys?.country} {data.name}</h1>
      <h2>{data.main?.temp}</h2>
      <h3>{data.weather?.length && data.weather[0]?.main}</h3>
      <p>{data.main?.temp_min} {data.main?.temp_max}</p>
    </div>
  );
}

export default App;