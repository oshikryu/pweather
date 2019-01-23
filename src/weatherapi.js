//TODO: Get your own key at https://openweathermap.org/api
const key = "0685c4e8066b577d449babf619cf4ab4"

export const getWeather = async (city) => {
    return (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`)).json();
}