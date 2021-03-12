const showPosition = async (position) => {
  let isCelsius = true;
  const { latitude, longitude } = position.coords;
  const url = `https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitude}&lon=${longitude}`

  const { data } = await axios.get(url);
  const {
    weather: [{ icon }],
    sys: { country },
    main: { temp },
    name,
  } = data;

  document
    .getElementById('loading')
    .remove();

  const cardEl = document.getElementById('card');

  const cityEl = document.createElement('div');
  cityEl.appendChild(document.createTextNode(`${name}, ${country}`));
  cardEl.appendChild(cityEl);

  const temperatureEl = document.createElement('div');
  temperatureEl.setAttribute('id', 'temperature');
  temperatureEl.appendChild(document.createTextNode(`${temp} °C`));
  cardEl.appendChild(temperatureEl);

  const imageEl = document.createElement('img');
  imageEl.setAttribute('src', icon);
  cardEl.appendChild(imageEl);

  const button = document.getElementById('toggle');
  button.onclick = () => {
    isCelsius = !isCelsius;

    const text = isCelsius
      ? `${temp} °C`
      : `${temp * 1.8 + 32} °F`;

    temperatureEl.firstChild.nodeValue = text;
  };
}

navigator
  .geolocation
  .getCurrentPosition(showPosition);
