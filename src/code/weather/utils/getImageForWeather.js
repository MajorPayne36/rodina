const images = {
    Clear: require('../../../resources/weather-images/clear.jpg'),
    Hail: require('../../../resources/weather-images/hail.jpg'),
    'Heavy Cloud': require('../../../resources/weather-images/heavy-cloud.png'), // не менять расширение
    'Light Cloud': require('../../../resources/weather-images/light-cloud.jpg'),
    'Heavy Rain': require('../../../resources/weather-images/heavy-rain.jpg'),
    'Light Rain': require('../../../resources/weather-images/light-rain.jpg'),
    Showers: require('../../../resources/weather-images/showers.jpg'), // Ливни
    Sleet: require('../../../resources/weather-images/sleet.jpg'), // Снег с дождем
    Snow: require('../../../resources/weather-images/snow.jpg'),
    Thunder: require('../../../resources/weather-images/thunder.jpg'),
  };
  
  export default weather => images[weather];