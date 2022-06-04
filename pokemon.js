function searchResultsWeather(){
    let city = document.querySelector('#city').value
    
    const apiweather = {
        key: "44957c53e557a03f3d0e73200bac77bc",
        base: "https://api.openweathermap.org/data/2.5/",
        lang: "pt_br",
}
    fetch(`${apiweather.base}weather?q=${city}&appid=${apiweather.key}`)
    .then(function(response){
        response.json().then(function(data)  {
            Results(data);
})
}); 
}



function Results(dados){
    let results = document.querySelector('#results')
    let temInCelsius = (dados.main.temp-273).toFixed(0)
    let rain = (dados.weather[0].main)
    
    if (rain == 'rain'| rain =='Drizzle' | rain =='Thunderstorm') {
        var type = ("electric")
    } else if (temInCelsius>33){
        var type =  ("fire")
    } else if (temInCelsius >= 23 & temInCelsius < 33) {
        var type =  ("rock")
    } else if (temInCelsius >= 23 & temInCelsius < 27) {
        var type =  ("bug")
    } else if (temInCelsius >= 15 & temInCelsius < 21) {
        var type =  ("ground")
    } else if (temInCelsius >= 12 & temInCelsius < 15) {
        var type =  ("grass")
    } else if (temInCelsius >= 5 & temInCelsius < 10) {
        var type =  ("water")
    } else if (temInCelsius < 5 ) {
        var type =  ("ice")
    } 

    fetch(`https://pokeapi.co/api/v2/type/${type}`).then((response) => {return response.json()
    }).then((data) => {
        let number = Math.floor(Math.random()*(data.pokemon.length))
        let namePokemon = (data.pokemon[number].pokemon.name)
        let imagePokemon = (data.pokemon[number].pokemon.url)
        results.innerHTML =`   <p>Sendo sua cidade ${dados.name} , com uma temperatura de ${temInCelsius} </p>
                        <p>Logo os pokemons que poderiam estar presentes são do tipo: ${type} </p>
                        <p> Um possivel pokemon que estaria presente seria o ${namePokemon} </p> 
                        <img src="${imagePokemon}">`
        })
        

 

}