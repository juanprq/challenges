const showPosition = (position) => {
  const { latitude, longitude } = position.coords;
  const url = `https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitude}&lon=${longitude}`

  console.log(url);
};

navigator
  .geolocation
  .getCurrentPosition(showPosition);
