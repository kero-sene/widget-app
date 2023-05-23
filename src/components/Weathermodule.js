import React from 'react'

const weatherfunc = (d,s,id) => {
  let js,fjs=d.getElementsByTagName(s)[0]
  if(!d.getElementById(id))
  {js=d.createElement(s)
  js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
  fjs.parentNode.insertBefore(js,fjs);}
  }

const WeatherComponent = () => {
  
  return (
    <div>
      <a class="weatherwidget-io" href="https://forecast7.com/en/41d66n83d56/toledo/?unit=us" data-label_1="TOLEDO, OH" data-label_2="WEATHER" data-theme="pure" >TOLEDO, OH WEATHER</a>
      {weatherfunc(document,'script','weatherwidget-io-js')}
    </div>
  )
}
export default WeatherComponent