const getFetch = () => {

  let mainContent = document.getElementById('main-content');
  const cantPaises = 12;

  //código de la función fetch
  fetch('https://restcountries.com/v3.1/all')
      .then((resp) => resp.json())
      .then(function(data) { 
        for (let i = 0; i < cantPaises; i++) {
          let paisAleatorio = data[NumerosAleatorios(1, 250)];
          console.log(data[NumerosAleatorios(1, 250)].name.common)
          mainContent.innerHTML += `<pais-component name="${paisAleatorio.name.common}" capital="${paisAleatorio.capital[0]}" poblacion="${paisAleatorio.population}" subregion="${paisAleatorio.subregion}" region="${paisAleatorio.region}" imagen="${paisAleatorio.flags.png}" continente="${paisAleatorio.continents[0]}" maps="${paisAleatorio.maps.googleMaps}"></pais-component>`
        }
      })
      .catch(function(error) {
        console.log(JSON.stringify(`Error ${error}`));
      });
}

getFetch();

function NumerosAleatorios(min, max) {
   return Math.round(Math.random() * (max - min) + min);
}