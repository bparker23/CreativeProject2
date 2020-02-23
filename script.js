document.getElementById("foodSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
fetch(url)
.then(function(response) {
  return response.json();
}).then(function(json) {
  let meal = "";
  meal += "<div class =\"review-container\">";

          //ADDS TITLE
           meal += "<div class = \"review-container-title\"><h3>" + json.meals[0].strMeal + "</h3></div>";

          //ADDS IMAGE
          meal += "<div class = \"review-image-container\">"
           meal += '<img src=' + json.meals[0].strMealThumb +'>';
          meal += "</div>"

          // meal += "<div class = \"randomBox\"></div>"

           //ADDS INGREDIENTS AND INSTRUCTIONS
           meal += "<br>"
           meal += "<div class =\"review-paragraph-container\">"
              meal += "<h3>Ingredients: </h3><br>"
              meal += "<ul>";
              let randomVariable = true;
              if (randomVariable === true){
                testItem = json.meals[0].strIngredient1 + " (" + json.meals[0].strMeasure1 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient2 + " (" + json.meals[0].strMeasure2 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient3 + " (" + json.meals[0].strMeasure3 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient4 + " (" + json.meals[0].strMeasure4 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient5 + " (" + json.meals[0].strMeasure5 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient6 + " (" + json.meals[0].strMeasure6 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient7 + " (" + json.meals[0].strMeasure7 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient8 + " (" + json.meals[0].strMeasure8 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient9 + " (" + json.meals[0].strMeasure9 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient10 + " (" + json.meals[0].strMeasure10 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient11 + " (" + json.meals[0].strMeasure11 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient12 + " (" + json.meals[0].strMeasure12 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient13 + " (" + json.meals[0].strMeasure13 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient14 + " (" + json.meals[0].strMeasure14 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient15 + " (" + json.meals[0].strMeasure15 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient16 + " (" + json.meals[0].strMeasure16 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient17 + " (" + json.meals[0].strMeasure17 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient18 + " (" + json.meals[0].strMeasure18 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient19 + " (" + json.meals[0].strMeasure19 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
                testItem = json.meals[0].strIngredient20 + " (" + json.meals[0].strMeasure20 + ")"
                if (testItem != " ()"){
                  if (testItem != null){
                    if (testItem != " ( )"){
                      meal += "<li>" + testItem + "</li>";
                    }
                  }
                }
            }

                //ADDS INSTRUCTIONS
                meal += "<br>"
                meal += "</ul>";
                meal += "<h3> Instructions: </h3>"
                meal += "<div class =\"instructions-paragraph-container\">"
                  let instructions = json.meals[0].strInstructions
                  meal += "<p>" + instructions +"</p><br><br>"

                  //ADDS LINK TO YOUTUBE VIDEO
                  meal += "<br>"
                  let videoLink = json.meals[0].strYoutube
                  meal += "<a href=" + videoLink +">Instructional Video</a><br><br>"
                meal += "</div>"



            meal += "</div>";



  meal += "</div>";


     document.getElementById("mealResults").innerHTML = meal;
});


});
