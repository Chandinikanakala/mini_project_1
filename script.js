 let recipes =
    JSON.parse(localStorage.getItem("recipes")) || [

    {
        name: "Pasta",
        ingredients: ["Pasta", "Cheese", "Tomato Sauce"]
    },

    {
        name: "Pancakes",
        ingredients: ["Flour", "Milk", "Eggs"]
    },

    {
        name: "Salad",
        ingredients: ["Lettuce", "Tomatoes", "Cucumber"]
    }

];

const recipeContainer =
    document.getElementById("recipeContainer");

const shoppingList =
    document.getElementById("shoppingList");

function displayRecipes() {

    recipeContainer.innerHTML = "";

    recipes.forEach(recipe => {

        const button =
            document.createElement("button");

        button.textContent = recipe.name;

        button.addEventListener("click", () => {

            generateShoppingList(
                recipe.ingredients
            );

        });

        recipeContainer.appendChild(button);

    });

}

displayRecipes();

function generateShoppingList(ingredients) {

    shoppingList.innerHTML = "";

    ingredients.forEach(item => {

        const li =
            document.createElement("li");

        li.innerHTML =
    `<input type="checkbox"
            onchange="updateProgress()">
     ${item}`;

        shoppingList.appendChild(li);

    });

}

const clearBtn =
    document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {

    shoppingList.innerHTML = "";

});

const addRecipeBtn =
    document.getElementById("addRecipeBtn");

addRecipeBtn.addEventListener("click", () => {

    const name =
        document.getElementById("recipeName").value;

    const ingredients =
        document.getElementById("recipeIngredients")
        .value
        .split(",");
    const category =
    document.getElementById("recipeCategory")
    .value;
    if (name !== "" &&
        ingredients[0] !== "") {

       recipes.push({

    name: name,

    ingredients: ingredients,

    category: category

});

        localStorage.setItem(
            "recipes",
            JSON.stringify(recipes)
        );

        displayRecipes();

        document.getElementById(
            "recipeName"
        ).value = "";

        document.getElementById(
            "recipeIngredients"
        ).value = "";

    }

});
const deleteAllBtn =
    document.getElementById("deleteAllBtn");

deleteAllBtn.addEventListener("click", () => {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete all saved recipes?"
        );

    if (confirmDelete) {

        localStorage.removeItem("recipes");

        recipes = [

            {
                name: "Pasta",
                ingredients: ["Pasta", "Cheese", "Tomato Sauce"]
            },

            {
                name: "Pancakes",
                ingredients: ["Flour", "Milk", "Eggs"]
            },

            {
                name: "Salad",
                ingredients: ["Lettuce", "Tomatoes", "Cucumber"]
            }

        ];

        displayRecipes();
const searchRecipe =
    document.getElementById("searchRecipe");

searchRecipe.addEventListener("input", () => {

    const searchText =
        searchRecipe.value.toLowerCase();

    recipeContainer.innerHTML = "";

    recipes.forEach(recipe => {

        if (
            recipe.name
            .toLowerCase()
            .includes(searchText)
        ) {

            const button =
                document.createElement("button");

            button.textContent =
    `${recipe.name} (${recipe.category || "General"})`;

            button.addEventListener(
                "click",
                () => {

                    generateShoppingList(
                        recipe.ingredients
                    );

                }
            );

            recipeContainer.appendChild(
                button
            );

        }

    });

});
        shoppingList.innerHTML = "";

    }

});
function updateProgress() {

    const total =
        document.querySelectorAll(
            "#shoppingList input"
        ).length;

    const checked =
        document.querySelectorAll(
            "#shoppingList input:checked"
        ).length;

    document.getElementById(
        "progress"
    ).textContent =
        `Progress: ${checked}/${total} purchased`;

}
function logout() {

    localStorage.removeItem("username");

    window.location.href = "login.html";

}
function logout() {

    localStorage.removeItem("username");

    window.location.href = "login.html";

}