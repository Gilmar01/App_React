import { useEffect, useState, useCallback } from "react";
import Input from "../../Paginas/Input";
import Button from "../../Paginas/Button";
import { FiSearch } from "react-icons/fi";
import ContainerPagina from "../../Paginas/ContainerPagina"
import ContainerForm from "../../Paginas/ContainerForm"
function Temperatura() {
    const [city, setCity] = useState("Corrente");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null); 
    const apiKey = "28df23fec63731fc3044f28837cc4a74";
    const fetchWeatherData = useCallback(async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}& units=metric`
);
const data = await response.json();
if (response.ok) {
setWeatherData(data);
setError(null);
} else {
throw new Error(data.message);
}
} catch (error) {
console.error("Erro ao obter dados meteorológicos:", error.message);
setWeatherData(null);
setError("Cidade não encontrada.");
}
}, [city]);
useEffect(() => {
fetchWeatherData();
}, [fetchWeatherData]);
const handleSearchClick = () => {
if (city.trim() !== "") {
fetchWeatherData();
} else {
setError("Digite o nome da cidade.");
}
};
return (
<ContainerPagina>
<ContainerForm>
<h2>Previsão do tempo</h2>
<Input
label="Cidade:"
placeholder="Digite o nome da cidade"
value={city}
onChange={(e) => setCity(e.target.value)}
error={error} />
<Button type="button" onClick={handleSearchClick}>
<FiSearch size={16} color="#FFF" /> Pesquisar
</Button>
{weatherData ? (
<div>
<p>Cidade pesquisada: {city}</p>
<p>País: {weatherData.sys.country}</p>
<p>Máxima: {weatherData.main.temp_max}°C</p>
<p>Mínima: {weatherData.main.temp_min}°C</p>
<p>Temperatura: {weatherData.main.temp}°C</p>
<p>Umidade: {weatherData.main.humidity}%</p>
<p>Descrição: {weatherData.weather[0].description}</p>
</div>
) : (
<p>
{error || "Aguardando dados meteorológicos..."}
</p>
)}
</ContainerForm>
</ContainerPagina>
);
}
export default Temperatura;