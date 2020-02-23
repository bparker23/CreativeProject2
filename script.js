document.getElementById("foodSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
fetch(url)
.then(function(response) {
  return response.json();
}).then(function(json) {
  let meal = "";
  meal += "<div class =\"container\">";

          //ADDS TITLE
           meal += "<div class = \"test\"><h3>" + json.meals[0].strMeal + "</h3></div>";

          //ADDS IMAGE
          meal += "<div class = \"imageContainer\">"
           meal += '<img src=' + json.meals[0].strMealThumb +'>';
          meal += "</div>"

          meal += "<div class = \"randomBox\"></div>"

           //ADDS INGREDIENTS AND INSTRUCTIONS
           meal += "<br>"
           // meal += "<div class =\"ingredients\""
              // meal += "<h3> Primary Ingredients: </h3>"
              meal += "<br><br><ul><h3>Primary Ingredients:</h3>";
                meal += "<li>" + json.meals[0].strIngredient1 + " (" + json.meals[0].strMeasure1 + ")" + "</li>";
                meal += "<li>" + json.meals[0].strIngredient2 + " (" + json.meals[0].strMeasure2 + ")" + "</li>";
                meal += "<li>" + json.meals[0].strIngredient3 + " (" + json.meals[0].strMeasure3 + ")" + "</li>";
                meal += "<li>" + json.meals[0].strIngredient4 + " (" + json.meals[0].strMeasure4 + ")" + "</li>";
                //ADDS LINK TO YOUTUBE VIDEO
                meal += "<br>"
                // meal += "<div class =\"videoLink\""
                let videoLink = json.meals[0].strYoutube
                   meal += "<h3><a href=" + videoLink +">Learn to make it</h3>"
              meal += "</ul>";



  meal += "</div>";


     document.getElementById("mealResults").innerHTML = meal;
});


});
