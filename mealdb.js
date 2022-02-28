document.getElementById('errormassage').style.display = 'none';
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //clear data
    searchField.value= '';
    //error 
    document.getElementById('errormassage').style.display = 'none';
    if (searchText == '') {
        displayError();
        document.getElementById("errormassage").style.color = "red";
        document.getElementById("errormassage").style.fontFamily = "Arial";
        document.getElementById("errormassage").style.fontSize = "larger";
        document.getElementById("massage").innerHTML="Please Enter Somting";
    }
    else{
        //load data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
        .catch(error => displayError(error))
    }
}
const displayError = error => {
    document.getElementById('errormassage').style.display = 'block';
}
const displaySearchResult = meals =>{
    // console.log(meals);

    const searchResult = document.getElementById('search-result');
    /* searchResult.innerHTML= ''; */  //not recommended 
    searchResult.textContent = '';
    // error handaling
    if (meals == 0) {
        document.getElementById("errormassage").style.color = "red";
        document.getElementById("errormassage").style.fontFamily = "Arial";
        document.getElementById("errormassage").style.fontSize = "larger";
        document.getElementById("massage").innerHTML="No Result Found ";
        displayError();
    }
        else{
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
    
}

const loadMealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal =>{
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
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




