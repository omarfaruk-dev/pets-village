const loadCategory = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    const data = await response.json();
    displayCategory(data.categories);
}

const displayCategory = (categories)=> {
    categories.forEach((element)=>{
        const categoryBtnContainer = document.getElementById("btn-container");
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <button class="btn border hover:bg-gray-200 px-12 py-8 bg-gray-50 text-2xl font-bold"><img class="w-8" src="${element.category_icon}" alt="${element.category}">${element.category}</button>
        `
        categoryBtnContainer.appendChild(newDiv);
    });
    
}


loadCategory()