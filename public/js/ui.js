// Author : Zin Lin Htun


const recipes = document.querySelector(".recipes");


document.addEventListener("DOMContentLoaded", function(){

const menus = document.querySelectorAll(".side-menu");
M.Sidenav.init(menus, {edge: "right"});

const forms = document.querySelectorAll(".side-form");
M.Sidenav.init(forms, {edge: "left"});



});


const renderRecipe = (data, id) =>{

    const html =`  
    <div class="card-panel recipe " data-id ="${id}">
   
    <img src="./img/dish.png" alt="recipe thumb" />
    
      <div class="recipe-details">
        <div class="recipe-title">${data.title}</div>
       
        <div class="recipe-ingredients">${data.ingredient}</div>
      </div>
      <div class="recipe-delete">
        
        <button class="trans" > <i class="material-icons" data-id ="${id}" >delete_outline</i>
        </button> 
      </div>
      <br/>
 `;

    console.log();
 
    recipes.innerHTML += html;
    //output in the getted material
}


//remove recipe form DOM 

const removeRecipe= (id) =>{

    const recipe = document.querySelector(`.recipe[data-id='${id}']`);
    recipe.remove();

}