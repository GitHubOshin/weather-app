function Weather(props) {
  const {
    time,
    city,
    country,
    icon,
    iconDescription,
    highlow,
    humidity,
    pressrue,
    visibility,
    windS,
    windD,
    sunR,
    sunS
  } = props

  const data = [
    { title: 'High/Low', value: highlow },
    { title: 'Wind', value: `${windS} km/hr` },
    { title: 'Humidity', value: `${humidity}%` },
    { title: 'Wind Direction', value: `${windD}° deg` },
    { title: 'Pressrue', value: `${pressrue} hPa` },
    { title: 'Sunrise', value: sunR },
    { title: 'Visibility', value: visibility },
    { title: 'Sunset', value: sunS }
  ]

  function WeatherData(props) {
    return (
      <div className="border-b-2 border-b-gray-300  grid grid-cols-2 text-center items-end pb-5">
        <b>{props.title}</b>
        <p>{props.value}</p>
      </div>
    )
  }

  return (
    <section className="absolute w-screen h-screen flex justify-center gap-x-10 pt-[100px] px-5">
      <div className=" bg-slate-50  rounded-md w-full h-[400px] max-w-[270px] flex flex-col justify-center items-center gap-5">
        <b className="text-8xl">31</b>
        <img alt={iconDescription} src={icon} className="w-[80px] h-[80px]" />
        <p>{time}</p>
        <b>
          {city},{country}
        </b>
      </div>
      <div className="bg-slate-50  rounded-md px-6 pb-8 w-full max-w-[600px] h-full max-h-[400px]  gap-x-10 grid grid-cols-2 ">
        {data.map((data, index) => {
          return (
            <WeatherData key={index} title={data.title} value={data.value} />
          )
        })}
      </div>
    </section>
  )
}

export default Weather

