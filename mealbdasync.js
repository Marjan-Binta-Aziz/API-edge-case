const searchFood = async() => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //clear data
    searchField.value= '';

    //load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
   try {
    const res = await fetch(url);
    const data = await res.json();
    displaySearchResult(data.meals);
    console.log(url);
   } 
   catch (error) {
       console.log(error);
   }

}
const displaySearchResult = meals =>{
    // console.log(meals);
    const searchResult = document.getElementById('search-result');
    /* searchResult.innerHTML= ''; */  //not recommended 
    searchResult.textContent = '';

    // error handaling
    if (meals.length == 0) {
        console.log('nothing');
    }

    meals.forEach(meal =>{
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick = 'loadMealDetails(${meal.idMeal})' class="card w-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
        </div>`;
        searchResult.appendChild(div);
    })
}

const loadMealDetails = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0])


    /* fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0])) */
}

const displayMealDetail = meal =>{
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text">${meal.strInstructions}</p>
    </div>
</div>`;
mealDetails.appendChild(div);
}




