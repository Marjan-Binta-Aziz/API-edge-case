const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countires');

    countries.forEach(country =>{
        // console.log(country.capital);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `<h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Show Details</button>`;
        countriesDiv.appendChild(div);

        //another way
        /* const h3 = document.createElement('h3');
        h3.innerText = country.name;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChildv9(p); */

    })
}

const loadCountryByName = name => {
    console.log(name);
}