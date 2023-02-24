import axios from 'axios'
import { useEffect, useState } from 'react'
import './index.css'
import Weather from './Weather'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    getWeather()
  }, [])

  async function getWeather() {
    const data = await axios(
      'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=82fc61551d0b36e7d890acd163c06d9f'
    )
    setData(data.data)
  }
  console.log(data)
  return (
    <div className="">
      <div className="relative ">
        <img
          alt="Background"
          src="images/gg-bg.jpeg"
          className="absolute w-screen h-screen"
        />
        <Weather
          city={data?.name}
          country={data?.sys?.country}
          icon={data?.weather?.[0]?.icon}
          iconDescription={data?.weather?.[0]?.description}
          highlow={`${data?.main?.temp_max}/${data?.main?.temp_min}`}
          humidity={data?.main?.humidity}
          pressrue={data?.main?.pressure}
          visibility={data?.visibility}
          windS={data?.wind?.speed}
          windD={data?.wind?.deg}
          sunR={data?.sys?.sunrise}
          sunS={data?.sys?.sunset}
        />
      </div>
    </div>
  )
}

export default App
