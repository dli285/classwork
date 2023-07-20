//Инпуты
let productType = document.querySelector('#type-select')
let productName = document.querySelector('#product-name')
let productCount = document.querySelector('#product-count')

//Кнопки
let addProductButton = document.querySelector('.add-product')

//Таблица
let productsListElement = document.querySelector('.products-list')

let productsArray = []

addProductButton.addEventListener('click', function(event){
    let productTypeValue=productType.value
    let productNameValue=productName.value
    let productCountValue=productCount.value

    let productString = `Тип: ${productTypeValue} Название: ${productNameValue} Количество: ${productCountValue}`

    productsArray.push(productString)
})