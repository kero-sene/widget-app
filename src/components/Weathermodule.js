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
      <a class="weatherwidget-io" href="https://forecast7.com/en/45d52n122d68/portland/" data-label_1="PORTLAND, OR" data-label_2="WEATHER" data-font="Roboto" data-theme="beige" data-textcolor="#000000" data-highcolor="#000000" data-lowcolor="#000000" >PORTLAND, OR WEATHER</a>
      {weatherfunc(document,'script','weatherwidget-io-js')}
    </div>
  )
}

export default WeatherComponent