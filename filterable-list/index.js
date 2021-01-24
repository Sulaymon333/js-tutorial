const listContainer = document.querySelector('.list-container');
const buttonContainer = document.querySelector('.button-container');
const developedBy = document.querySelector('.developed-by');

const data = teaItems;
let tempData = teaItems;
let categoryItems = teaItems.map((item) => item.category);
categoryItems = ['all', ...new Set(categoryItems)];

// create buttons
const buttons = categoryItems.map((item) => `<button type="button" class="btn">${item}</button>`).join('');
buttonContainer.innerHTML = buttons;

// generate tea items
function teaGenerator(tempData) {
    const teas = tempData
        .map(
            (item) => `
        <div class="list-item">
        <div class="img">
            <img src=${item.img} />
        </div>
        <div class="list-info">
            <div class="list-head">
                <h6>${item.name[0].toUpperCase() + item.name.slice(1)}</h6>
                <h6>${item.price} €</h6>
            </div>
            <p>${item.description}</p>
            <p>Category: ${item.category}</p>
        </div>      
        </div>`
        )
        .join('');

    listContainer.innerHTML = teas;
}

document.addEventListener('DOMContentLoaded', () => {
    teaGenerator(tempData);
});

const buttonItems = buttonContainer.querySelectorAll('.btn');
buttonItems.forEach((button) =>
    button.addEventListener('click', () => {
        if (button.textContent === 'all') {
            tempData = data;
            teaGenerator(tempData);
        } else {
            tempData = data.filter((item) => item.category.toLowerCase() === button.textContent.toLowerCase());
            teaGenerator(tempData);
        }
    })
);

developedBy.innerHTML = ` Developed by <a href="https://suly.dev" target="_blank">Suly.dev</a> ${new Date().getFullYear()} `;

// function itemsGenerator(tempData) {
//     const items = tempData
//         .map(
//             (item) => `<div class="list-item">
//         <div class="img">
//             <img src=${item.img} />
//         </div>
//         <div class="list-info">
//             <div class="list-head">
//                 <h6>${item.name}</h6>
//                 <h6>${item.price} €</h6>
//             </div>
//             <p>${item.description}</p>
//             <p>Category: ${item.category}</p>
//         </div>
//         </div>`
//         )
//         .join('');

//     listContainer.innerHTML = items;
// }

// document.addEventListener('DOMContentLoaded', () => {
//     itemsGenerator(tempData);
// });

// const buttonItems = buttonContainer.querySelectorAll('.btn');
// console.log(buttonItems);

// buttonItems.forEach((button) =>
//     button.addEventListener('click', () => {
//         if (button.textContent === 'all') {
//             tempData = data;
//             itemsGenerator(tempData);
//         } else {
//             tempData = data.filter((item) => item.category.toLowerCase() === button.textContent.toLowerCase());
//             itemsGenerator(tempData);
//         }
//     })
// );
