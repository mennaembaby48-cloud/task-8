 var lastIndex = -1;

    document.getElementById("random-recipe-btn").addEventListener("click", function () {
        var next;
        do {
            next = Math.floor(Math.random() * recipes.length);
        } while (next === lastIndex && recipes.length > 1);

        lastIndex = next;
        showrecipe(recipes[next]);
    })

var recipes = [
    {
        title: "Greek Moussaka",
        desc: "Traditional layered eggplant casserole with lamb",
        image: "imgs/photo-1601050690597-df0568f70950.jpeg",
        rate: "4.8",
        reviews: "(234 reviews)",
        level: "Intermediate",
        cuisine: "Mediterranean",
        preptime: "30 min",
        cooktime: "60 min",
        servings: "4 people",
        nutritions: { calories: "580 kcal", protein: "36g", carbs: "32g", fat: "32g", fiber: "8g", sodium: "820mg" },
        ingredients: ["3 large eggplants, sliced", "500g ground lamb", "400g canned tomatoes", "1 onion, diced", "3 cloves garlic, minced", "500ml béchamel sauce", "100g parmesan cheese", "Cinnamon and oregano", "Olive oil"],
        instructions: ["Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.", "Brush eggplant slices with olive oil, grill or bake until softened.", "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.", "Preheat oven to 180°C (350°F).", "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan."],
        tips: ["Salt eggplant to remove bitterness", "Don't skip the resting time - it helps set the layers", "Use ground beef if lamb is unavailable", "Make ahead and reheat for easier serving"]
    },
    {
        title: "Spicy Thai Basil Chicken",
        desc: "Quick stir-fry with chilies, basil, and savory sauce",
        image: "imgs/download (7).webp",
        rate: "4.7",
        reviews: "(198 reviews)",
        level: "Easy",
        cuisine: "Thai",
        preptime: "15 min",
        cooktime: "15 min",
        servings: "2 people",
        nutritions: { calories: "470 kcal", protein: "31g", carbs: "18g", fat: "24g", fiber: "5g", sodium: "760mg" },
        ingredients: ["300g chicken thigh, sliced", "2 tbsp vegetable oil", "3 cloves garlic, minced", "2 red chilies, sliced", "1 onion, chopped", "1 cup basil leaves", "2 tbsp soy sauce", "1 tbsp oyster sauce", "1 tsp sugar", "1 tsp fish sauce"],
        instructions: ["Heat oil in a wok and cook the chicken until lightly browned.", "Add garlic, chilies, and onion; stir-fry for 1 minute.", "Mix soy sauce, oyster sauce, sugar, and fish sauce; pour into the pan.", "Add basil leaves and toss until wilted.", "Serve hot with steamed rice."],
        tips: ["Use chicken breast for a leaner option", "Add more chilies if you like it extra spicy", "Don't overcook the basil; it turns dark quickly", "Serve with cucumber salad for freshness"]
    },
    {
        title: "Creamy Mushroom Risotto",
        desc: "Rich and comforting arborio rice with mushrooms and parmesan",
        image: "imgs/download (1).webp",
        rate: "4.9",
        reviews: "(312 reviews)",
        level: "Intermediate",
        cuisine: "Italian",
        preptime: "10 min",
        cooktime: "35 min",
        servings: "4 people",
        nutritions: { calories: "520 kcal", protein: "19g", carbs: "56g", fat: "21g", fiber: "4g", sodium: "680mg" },
        ingredients: ["1 cup arborio rice", "250g mushrooms, sliced", "1 shallot, minced", "3 cups warm vegetable stock", "1/2 cup white wine", "2 tbsp butter", "1/2 cup parmesan cheese", "2 tbsp olive oil", "1 tbsp parsley, chopped", "Salt and black pepper"],
        instructions: ["Sauté mushrooms in olive oil until golden, then set aside.", "Cook shallot in butter until soft, then add arborio rice and toast for 1 minute.", "Pour in wine and stir until absorbed.", "Add stock gradually, stirring often until the rice becomes creamy.", "Fold in mushrooms, parmesan, and parsley; season to taste."],
        tips: ["Keep the stock warm for even cooking", "Stir often to release starch and thicken the risotto", "Use porcini mushrooms for deeper flavor", "Finish with a squeeze of lemon for brightness"]
    },
    {
        title: "Lemon Herb Salmon Bowl",
        desc: "Crispy salmon with quinoa, greens, and tangy dressing",
        image: "imgs/download (1).webp",
        rate: "4.8",
        reviews: "(267 reviews)",
        level: "Easy",
        cuisine: "American",
        preptime: "20 min",
        cooktime: "20 min",
        servings: "2 people",
        nutritions: { calories: "610 kcal", protein: "38g", carbs: "42g", fat: "29g", fiber: "7g", sodium: "540mg" },
        ingredients: ["2 salmon fillets", "1 cup cooked quinoa", "2 cups mixed greens", "1 cucumber, sliced", "1 avocado, diced", "1 lemon, juiced", "2 tbsp olive oil", "1 tbsp dill", "1 tbsp parsley", "Salt and pepper"],
        instructions: ["Season salmon with lemon juice, dill, salt, and pepper.", "Pan-sear the salmon until crispy on both sides and cooked through.", "Arrange quinoa, greens, cucumber, and avocado in bowls.", "Top with salmon and drizzle with olive oil and remaining lemon juice.", "Garnish with parsley before serving."],
        tips: ["Use brown rice instead of quinoa for a heartier bowl", "Chill the grains for a fresher texture", "Add roasted chickpeas for extra crunch", "Serve with yogurt-lime dressing"]
    },
    {
        title: "Chickpea Coconut Curry",
        desc: "Slow-simmered chickpeas in a creamy tomato and coconut sauce",
        image: "imgs/download (2).webp",
        rate: "4.6",
        reviews: "(176 reviews)",
        level: "Easy",
        cuisine: "Indian",
        preptime: "15 min",
        cooktime: "30 min",
        servings: "4 people",
        nutritions: { calories: "420 kcal", protein: "16g", carbs: "38g", fat: "19g", fiber: "10g", sodium: "580mg" },
        ingredients: ["2 cans chickpeas, drained", "1 onion, diced", "3 garlic cloves, minced", "1 tbsp ginger, grated", "1 can coconut milk", "2 tomatoes, chopped", "2 tsp curry powder", "1 tsp turmeric", "1 tbsp olive oil", "Fresh cilantro"],
        instructions: ["Sauté onion, garlic, and ginger in olive oil until aromatic.", "Add curry powder and turmeric, then stir in tomatoes.", "Pour in coconut milk and simmer for 10 minutes.", "Add chickpeas and cook until the sauce thickens.", "Garnish with cilantro and serve with rice."],
        tips: ["Add spinach in the last few minutes for more greens", "Use canned tomatoes for a sharper sauce", "Adjust curry powder for a milder or hotter finish", "Serve with naan bread for dipping"]
    },
    {
        title: "Crispy Beef Tacos",
        desc: "Seasoned ground beef tacos with salsa, lime, and crunchy slaw",
        image: "imgs/download (3).webp",
        rate: "4.9",
        reviews: "(421 reviews)",
        level: "Easy",
        cuisine: "Mexican",
        preptime: "15 min",
        cooktime: "20 min",
        servings: "4 people",
        nutritions: { calories: "560 kcal", protein: "29g", carbs: "36g", fat: "30g", fiber: "6g", sodium: "890mg" },
        ingredients: ["500g ground beef", "8 taco shells", "1 onion, finely chopped", "2 cloves garlic, minced", "1 tbsp chili powder", "1 tsp cumin", "1/2 cup tomato sauce", "2 cups shredded cabbage", "1 lime", "Fresh coriander"],
        instructions: ["Brown the beef with onion and garlic until fully cooked.", "Stir in chili powder, cumin, and tomato sauce; simmer for 5 minutes.", "Toss cabbage with lime juice and coriander to make quick slaw.", "Fill taco shells with beef and slaw.", "Serve with salsa, avocado, and hot sauce."],
        tips: ["Warm tortillas for a softer, more flexible taco", "Add pickled onions for extra tang", "Swap beef for chicken if preferred", "Top with queso fresco for extra richness"]
    },
    {
        title: "Chicken Caesar Pasta",
        desc: "Creamy Caesar pasta with grilled chicken and crunchy croutons",
        image: "imgs/download (4).webp",
        rate: "4.7",
        reviews: "(153 reviews)",
        level: "Easy",
        cuisine: "American",
        preptime: "15 min",
        cooktime: "20 min",
        servings: "3 people",
        nutritions: { calories: "640 kcal", protein: "35g", carbs: "62g", fat: "24g", fiber: "5g", sodium: "850mg" },
        ingredients: ["250g pasta", "2 chicken breasts, grilled and sliced", "1/2 cup Caesar dressing", "1/4 cup parmesan cheese", "2 cups romaine lettuce, chopped", "1/2 cup croutons", "2 tbsp olive oil", "1 lemon, juiced", "1 garlic clove, minced", "Black pepper"],
        instructions: ["Cook pasta according to package instructions and set aside.", "Sear or grill chicken until fully cooked, then slice thinly.", "Whisk Caesar dressing with lemon juice and garlic.", "Toss warm pasta with dressing, parmesan, and chicken.", "Fold in lettuce and top with croutons before serving."],
        tips: ["Add extra lettuce at the end so it stays crisp", "Use rotisserie chicken for a faster version", "Swap Parmesan for pecorino for stronger flavor", "Add cherry tomatoes for a fresh bite"]
    },
    {
        title: "Sun-Dried Tomato Gnocchi",
        desc: "Soft potato gnocchi in a creamy tomato basil sauce",
        image: "imgs/download (5).webp",
        rate: "4.8",
        reviews: "(229 reviews)",
        level: "Easy",
        cuisine: "Italian",
        preptime: "10 min",
        cooktime: "20 min",
        servings: "3 people",
        nutritions: { calories: "500 kcal", protein: "15g", carbs: "58g", fat: "22g", fiber: "4g", sodium: "710mg" },
        ingredients: ["400g potato gnocchi", "1 cup cream", "1/2 cup sun-dried tomatoes", "2 cloves garlic, minced", "1/2 cup basil leaves", "2 tbsp butter", "1/4 cup parmesan", "1 tbsp olive oil", "Salt and pepper", "Chili flakes"],
        instructions: ["Cook gnocchi in salted water until they float, then drain.", "Sauté garlic in olive oil and butter with chopped sun-dried tomatoes.", "Stir in cream and parmesan, then simmer until slightly thickened.", "Add gnocchi and basil; toss gently to coat.", "Season with salt, pepper, and chili flakes before serving."],
        tips: ["Use fresh gnocchi if available for a softer bite", "Add spinach for extra color and nutrition", "Serve with garlic bread on the side", "Finish with a splash of lemon for balance"]
    },
    {
        title: "Teriyaki Tofu Stir-Fry",
        desc: "Golden tofu, vegetables, and glossy teriyaki sauce over rice",
        image: "imgs/download (6).webp",
        rate: "4.6",
        reviews: "(184 reviews)",
        level: "Easy",
        cuisine: "Japanese",
        preptime: "15 min",
        cooktime: "20 min",
        servings: "2 people",
        nutritions: { calories: "430 kcal", protein: "22g", carbs: "39g", fat: "18g", fiber: "7g", sodium: "640mg" },
        ingredients: ["250g firm tofu, cubed", "1 cup broccoli florets", "1 bell pepper, sliced", "1 carrot, julienned", "2 tbsp soy sauce", "1 tbsp mirin", "1 tbsp sesame oil", "1 tsp ginger, grated", "1 tsp cornstarch", "2 tbsp sesame seeds"],
        instructions: ["Press tofu and pan-fry until browned on all sides.", "Stir-fry vegetables until crisp-tender.", "Mix soy sauce, mirin, ginger, and cornstarch to make the sauce.", "Add sauce to the pan and toss in tofu and vegetables.", "Serve over rice and sprinkle with sesame seeds."],
        tips: ["Freeze and thaw tofu for a chewier texture", "Add edamame for extra protein", "Use brown rice to make it more filling", "Top with sliced scallions for extra aroma"]
    },
    {
        title: "Classic Beef Stroganoff",
        desc: "Tender strips of beef in a creamy mushroom sauce over egg noodles",
        image: "imgs/OIP.webp",
        rate: "4.9",
        reviews: "(298 reviews)",
        level: "Intermediate",
        cuisine: "Russian",
        preptime: "20 min",
        cooktime: "35 min",
        servings: "4 people",
        nutritions: { calories: "670 kcal", protein: "34g", carbs: "55g", fat: "31g", fiber: "4g", sodium: "720mg" },
        ingredients: ["500g beef sirloin, thinly sliced", "200g mushrooms, sliced", "1 onion, diced", "2 cloves garlic, minced", "200ml sour cream", "1 cup beef stock", "2 tbsp butter", "1 tbsp flour", "250g egg noodles", "Fresh parsley"],
        instructions: ["Cook egg noodles according to the package and set aside.", "Sear beef strips in batches until browned, then remove.", "Cook onion and mushrooms in the same skillet until soft.", "Stir in flour, stock, and sour cream, then return the beef to the pan.", "Serve over noodles and garnish with parsley."],
        tips: ["Do not boil the sour cream too long or it may split", "Use sirloin or tenderloin for best texture", "Add a splash of Dijon for more depth", "Serve with peas for a classic finish"]
    }
]


function showrecipe(R) {
    document.getElementById("recipe-image").src = R.image;
    document.getElementById("recipe-title").innerText = R.title;
    document.getElementById("recipe-desc").innerText = R.desc;
    document.getElementById("recipe-rate").innerText = R.rate;
    document.getElementById("recipe-reviews").innerText = R.reviews;
    document.getElementById("recipe-level").innerText = R.level;
    document.getElementById("recipe-cuisine").innerText = R.cuisine;
    document.getElementById("prep-time").innerText = R.preptime;
    document.getElementById("cook-time").innerText = R.cooktime;
    document.getElementById("serving").innerText = R.servings;
    document.getElementById("nutrition-calories").innerText = R.nutritions.calories;
    document.getElementById("nutrition-protein").innerText = R.nutritions.protein;
    document.getElementById("nutrition-carbs").innerText = R.nutritions.carbs;
    document.getElementById("nutrition-fat").innerText = R.nutritions.fat;
    document.getElementById("nutrition-fiber").innerText = R.nutritions.fiber;
    document.getElementById("nutrition-sodium").innerText = R.nutritions.sodium;

    var steps = "";

    for (var i = 0; i < R.ingredients.length; i++) {

        steps += `<li class="d-flex align-items-start mb-12">
                                        <div class="d-flex align-items-center justify-content-center me-12 Ingredients-steps rounded-circle text-white fs-12 fw-bolder">
                                            ${i + 1}</div>
                                        <span class="text-darkGray fs-12 fs-lg-16 fw-300">${R.ingredients[i]}
                                        </span>
                                    </li>`
    }
    document.getElementById("ingredients-list").innerHTML = steps;

    var instructions_hm = "";

    for (var i = 0; i < R.instructions.length; i++) {
        instructions_hm += `<div class="d-flex align-items-center mb-4">
                                        <div
                                            class="Instructions rounded-14 me-3 fs-lg-18 fs-16 d-flex align-items-center justify-content-center text-white fw-bolder">
                                            ${i + 1}
                                        </div>

                                        <span class="text-darkGray fs-lg-16 fs-14 fw-400">${R.instructions[i]}</span>

                                    </div>`
    }
    document.getElementById("Instructions-list").innerHTML = instructions_hm;

    var tips_hm = "";

    for (var i = 0; i < R.tips.length; i++) {
        tips_hm += ` <div class="d-flex align-items-center p-3 mb-3 rounded-14">
                                        <div class="d-flex align-items-center">

                                            <i class="fa-solid fa-circle-check fs-18 rounded-circle me-12"></i>
                                            <span class="text-darkGray fs-14 fs-lg-16 fw-400">${R.tips[i]}</span>
                                        </div>
                                    </div>`
    }
    document.getElementById("tips-list").innerHTML = tips_hm;


var warning = document.getElementById("time-warning");

if((parseInt(R.preptime)+ parseInt(R.cooktime)) >=45){
        warning.classList.remove("d-none")
}
else{
    warning.classList.add("d-none")
}



document.getElementById("recipe-section").scrollIntoView({ behavior: 'smooth',block:'start' });

}



