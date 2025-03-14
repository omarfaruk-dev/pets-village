
const loadCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    const data = await response.json();
    displayCategory(data.categories);
}

const displayCategory = (categories) => {
    categories.forEach((element) => {
        const categoryBtnContainer = document.getElementById("btn-container");
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <button onclick="loadPets('${element.category}')" class="btn border hover:bg-gray-200 px-12 py-8 bg-gray-50 text-2xl font-bold"><img class="w-8" src="${element.category_icon}" alt="${element.category}">${element.category}</button>
        `
        categoryBtnContainer.appendChild(newDiv);
    });

}
//display data by category

const loadPets = async (categoryName) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`);
    const data = await res.json();
    displayPets(data.data);
}

const displayPets = (pets) => {
    console.log(pets);
    // document.getElementById("birds-data").classList.add="hidden";
    document.getElementById("birds-data").innerHTML = "";

    if (pets.length == 0) {
        const birdsData = document.getElementById("birds-data");
        const div = document.createElement("div");
        div.innerHTML = `
        <img class="w-26 md:w-44 h-26 md:h-44 mx-auto" src="./assets/error.webp" alt="">
                <h2 class=" text-xl md:text-4xl font-semibold pb-2 md:pb-4">No Information Available</h2>
                <p class="text-sm md:text-lg font-medium">It is a long established fact that a reader will be
                    distracted by the
                    readable content of a page when looking at its layout. The point of using more one of that it
                    has a.</p>
        `
        birdsData.append(div);
    }

    const petsContainer = document.getElementById("pets-card-container");
    petsContainer.innerHTML = "";
    pets.forEach((pet) => {

        const div = document.createElement("div");
        div.innerHTML = `
        <div class="p-3 border-2 rounded-lg">
                    <img class="rounded-md md:rounded-xl" src='${pet.image}' alt="">
                    <h3 class="text-lg md:text-xl font-bold mt-2 mb-1 md:mt-4">${pet.pet_name}</h3>
                    <div class="space-y-1 border-b-2 pb-3">
                        <p class="flex gap-2 items-center text-primary-color"><img src="./assets/birth.svg"
                                alt="">Breed: ${pet.breed}</p>
                        <p class="flex gap-2 items-center text-primary-color"><img src="./assets/breed.svg"
                                alt="">Birth: ${pet.date_of_birth}</p>
                        <p class="flex gap-2 items-center text-primary-color"><img src="./assets/gender.svg"
                                alt="">Gender: ${pet.gender}</p>
                        <p class="flex gap-2 items-center text-primary-color"><img src="./assets/price.svg"
                                alt="">Price: ${pet.price}</p>
                    </div>
                    <!-- card footer  -->
                    <div class="pt-2 flex items-center justify-between">
                        <button class="btn border-2 px-3 rounded-lg"><img src="./assets/like.svg"></button>
                        <button class="btn border-2 px-3 rounded-lg text-btn-bg">Adopt</button>
                        <button class="btn border-2 px-3 rounded-lg text-btn-bg">Details</button>
                    </div>
                </div>
        
        `
        petsContainer.appendChild(div);
    })
}




loadPets("cat")

loadCategory()


