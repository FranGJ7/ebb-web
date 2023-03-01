import React, { useState, useEffect } from 'react';
import axios from 'axios';
import pokemonLogo from "./assets/pokemon.svg"
import whatPokemon from "./assets/whatPokemon.png"
import './App.css';


// Define o componente App como uma função
const App = () => {

  // Define os estados iniciais dos componentes
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [isRaining, setIsRaining] = useState(false);
  const [lastPokemonType, setLastPokemonType] = useState('');
  const [pokemon, setPokemon] = useState({});
  const [cityNotFound, setCityNotFound] = useState(false);
  const [pokemonHasImage, setPokemonHasImage] = useState(true);


  // Função para buscar o clima atual da cidade a partir da API do OpenWeatherMap
  const fetchWeather = async () => {
    try {
      const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setTemperature(response.data.main.temp);
      setIsRaining(response.data.weather[0].main === 'Rain');
    } catch (erro) {
      setTemperature(0);
      setIsRaining(false);
      setCityNotFound(true);
    }
  };



  // Função para buscar um Pokémon aleatório a partir da API da PokeAPI
  const fetchPokemon = async () => {
    const types = ['fire', 'water', 'electric', 'grass', 'ice', 'ground', 'bug', 'rock', 'normal'];
    let type;
    // Se estiver chovendo, o tipo será elétrico
    if (isRaining) {
      type = 'electric';
    } else {
      // Se não estiver chovendo, define o tipo a partir da temperatura atual
      const temperatureRanges = [
        { min: -Infinity, max: 5, type: 'ice' },
        { min: 5, max: 10, type: 'water' },
        { min: 12, max: 15, type: 'grass' },
        { min: 15, max: 21, type: 'ground' },
        { min: 23, max: 27, type: 'bug' },
        { min: 27, max: 33, type: 'rock' },
        { min: 33, max: Infinity, type: 'fire' },
      ];
      // Encontra o intervalo de temperatura correspondente e define o tipo a partir dele
      const range = temperatureRanges.find((range) => range.min <= temperature && temperature < range.max);
      type = range ? range.type : 'normal';
    }
    // Se o tipo for igual ao último tipo de Pokémon gerado, escolhe um Pokémon normal
    if (type === lastPokemonType) {
      type = 'normal';
    }
    // Busca os Pokémon do tipo escolhido na API da PokeAPI
    setLastPokemonType(type);
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    const pokemons = response.data.pokemon;
    //gera um índice aleatório entre 0 e o número de Pokémons encontrados (menos 1) da lista.
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    const pokemonName = pokemons[randomIndex].pokemon.name;
    const pokemonImageUrl = `https://img.pokemondb.net/artwork/${pokemonName}.jpg`;
    setPokemon({ name: pokemonName, imageUrl: pokemonImageUrl });
  };



  // atualiza o estado pokemonHasImage para false caso ocorra algum erro ao carregar a imagem do Pokémon.
  const handlePokemonImageError = () => {
    setPokemonHasImage(false);
  };



  // atualiza o estado city com o valor digitado no input.
  const handleCityChange = (event) => {
    setCity(event.target.value);
    setCityNotFound(false)
  };



  // previne o comportamento padrão do formulário de recarregar a página e chama a função `fetchWeather()` para buscar a temperatura da cidade selecionada
  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
    setPokemonHasImage(true);
  }


    //executa a função fetchPokemon() apenas quando a temperatura muda.
    useEffect(() => {
      if (temperature !== 0) {
        fetchPokemon();
      }
    }, [temperature]);


    //
    return (
      <div className='container'>

        <img className='pokemonLogo'
          src={pokemonLogo}
          alt="logo Pokemon" />

        <div className='formBox'>
          <form onSubmit={handleFormSubmit}>
            <input
              className='textInput'
              placeholder='Digite o nome da cidade...'
              type="text"
              value={city}
              onChange={handleCityChange}
            />
            <button className='buttonInput' type="submit" onClick={fetchPokemon}>Buscar</button>
          </form>
        </div>


        {cityNotFound ? (
          <div className='errorBox'>
            <p>Cidade não encontrada.</p>
          </div>
        ) :
          temperature !== 0 ? (
            <div className='box'>
              <p className='tempTitle'>Temperatura atual: {city}: {temperature} °C</p>
              <p className='rain'>{isRaining ? 'Está chovendo' : 'Não está chovendo'}</p>
              {pokemon.name && (
                <div className='pokemonBox'>
                  <h2 className='pokemonTitle'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>

                  {pokemonHasImage ?
                    <img className='imgPokemon' src={pokemon.imageUrl} alt={pokemon.name} onError={handlePokemonImageError} />
                    :
                    <div className='errorBox'>
                      <p>Pokémon sem imagem.</p>
                    </div>
                  }
                </div>
              )}
            </div>
          ) :
            (
              <div className='imgDefault'>
                <img className='whatPokemon' src={whatPokemon} alt="Imagem Pokémon?" />
              </div>
            )
        }
      </div>
    );
};

export default App;