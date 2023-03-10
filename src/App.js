import axios from 'axios'
import { useEffect, useState } from 'react'
import './index.css'
import Weather from './Weather'

function App() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getWeather()
  }, [])

  async function getWeather() {
    setIsLoading(true)
    const data = await axios(
      'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=82fc61551d0b36e7d890acd163c06d9f'
    )
    setData(data.data)
    setIsLoading(false)
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
          isLoading={isLoading}
          time={new Date(data?.dt).toLocaleTimeString()}
          city={data?.name}
          country={data?.sys?.country}
          icon={'http://openweathermap.org/img/wn/04n@2x.png'} // data?.weather?.[0]?.icon
          iconDescription={data?.weather?.[0]?.description}
          highlow={`${data?.main?.temp_max}/${data?.main?.temp_min}`}
          humidity={data?.main?.humidity}
          pressrue={data?.main?.pressure}
          visibility={data?.visibility}
          windS={data?.wind?.speed}
          windD={data?.wind?.deg}
          sunR={new Date(data?.sys?.sunrise * 1000).toLocaleTimeString()}
          sunS={new Date(data?.sys?.sunset * 1000).toLocaleTimeString()}
        />
      </div>
    </div>
  )
}

export default App

