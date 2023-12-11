const tabs = document.querySelectorAll('.offer__input')
const productList = document.querySelector('.products__list')
const productButton = document.querySelector('.products__button')

let products
let currentProducts
let modal
let price = 0
let addictivesPrice = 0
let sizePrice = 0
let currentProduct

let step = -1
let steppedProducts = []

let prevProducts

tabs.forEach((tab) => tab.addEventListener('change', changeTabEvent))

window.addEventListener('resize', () => {
  step = -1
  steppedProducts = []

  if (window.matchMedia('(min-width: 768px)').matches) {
    steppedProducts = [...currentProducts]
  } else {
    updateProductsForMobiles()
  }

  if (currentProducts.length === steppedProducts.length) {
    productButton.style.display = 'none'
  } else {
    productButton.style.display = 'flex'
  }

  if (JSON.stringify(prevProducts) !== JSON.stringify(steppedProducts))
    renderProductsFn()
})

productButton.addEventListener('click', () => {
  step++
  updateProductsForMobiles()
  renderProductsFn()
  if (currentProducts.length === steppedProducts.length) {
    productButton.style.display = 'none'
  }
})

function changeTabEvent({ target }) {
  currentProducts = products.filter(
    (product) => product.category === target.value
  )

  step = -1
  steppedProducts = []

  if (window.matchMedia('(min-width: 768px)').matches) {
    steppedProducts = [...currentProducts]
  } else {
    updateProductsForMobiles()
  }

  if (currentProducts.length === steppedProducts.length) {
    productButton.style.display = 'none'
  } else {
    productButton.style.display = 'flex'
  }

  renderProductsFn()
}

function changeSizeEvent(value) {
  sizePrice = +value
  updatePriceFn()
}

function changeAdditiveEvent(value) {
  if (value.checked) {
    addictivesPrice += +value.value
  } else {
    addictivesPrice -= +value.value
  }
  updatePriceFn()
}

function updatePriceFn() {
  price = addictivesPrice + sizePrice + +currentProduct.price
  const priceElement = document.querySelector('.price')
  priceElement.textContent = `$${price.toFixed(2)}`
}

function renderProductsFn() {
  productList.innerHTML = ``

  prevProducts = steppedProducts

  steppedProducts.map((product) => {
    const li = document.createElement('li')
    li.className = 'products__item'
    li.innerHTML = `
        <div class="products__image">
          <img src="../images/products/${product.image}" alt="${product.name}">
        </div>
        <div class="products__content">
          <p class="products__name">${product.name}</p>
          <p class="products__text">
            ${product.description}
          </p>
          <p class="products__price">$${product.price}</p>
        </div>
      `

    li.addEventListener('click', () => {
      currentProduct = product
      showModalFn()
    })

    productList.appendChild(li)
  })
}

function createSizesFn(sizes) {
  let tabs = ''
  for (let size in sizes) {
    const obj = sizes[size]
    tabs += `
        <label class="modal__tab">
          <input
            type="radio"
            name="size"
            class="modal__input"
            value="${obj['add-price']}"
            ${size === 's' ? 'checked' : ''}
            onchange="changeSizeEvent(this.value)"
          >
          <i class="icon">${size.toUpperCase()}</i>
          <span>${obj.size}</span>
        </label>
      `
  }
  return tabs
}

function createAdditivesFn(additives) {
  let tabs = ''
  additives.map((additive, i) => {
    tabs += `
      <label class="modal__tab">
        <input
        type="checkbox"
        name="additives"
        class="modal__input"
        value="${additive['add-price']}"
        onchange="changeAdditiveEvent(this)"
      >
        <i class="icon">${i + 1}</i>
        <span>${additive.name}</span>
      </label>
      `
  })
  return tabs
}

function closeModalFn() {
  document.body.style.overflow = ''
  document.body.removeChild(modal)
}

function showModalFn() {
  price = Number(currentProduct.price).toFixed(2)
  addictivesPrice = 0
  sizePrice = 0
  document.body.style.overflow = 'hidden'
  modal = document.createElement('div')
  modal.className = 'modal'

  const sizes = createSizesFn(currentProduct.sizes)
  const additives = createAdditivesFn(currentProduct.additives)

  modal.innerHTML = `
    <div class="modal__backdrop" onclick="closeModalFn()"></div>
    <div class="modal__wrapper">
      <img
        src="../images/products/${currentProduct.image}"
        class="modal__image"
        alt="${currentProduct.name}"
      >
      <div class="modal__content">
        <div class="modal__header">
          <div class="modal__name">${currentProduct.name}</div>
          <p class="modal__text">
            ${currentProduct.description}
          </p>
        </div>
        <div class="modal__size">
          <p class="modal__title">Size</p>
          <div class="modal__tabs">
            ${sizes}
          </div>
        </div>
        <div class="modal__additives">
          <p class="modal__title">Additives</p>
          <div class="modal__tabs">
            ${additives}
          </div>
        </div>
        <div class="modal__total">
          <span>Total:</span>
          <span class="price">$${price}</span>
        </div>
        <div class="modal__disclaimer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_268_12877)">
              <path
                d="M8 7.66663V11"
                stroke="#403F3D"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 5.00667L8.00667 4.99926"
                stroke="#403F3D"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z"
                stroke="#403F3D"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_268_12877">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>
            The cost is not final. Download our mobile app to see the final
            price and place your order. Earn loyalty points and enjoy your
            favorite coffee with up to 20% discount.
          </p>
        </div>
        <button class="modal__button" onclick="closeModalFn()">Close</button>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.classList.add('active')
}

;(async () => {
  products = await fetch('../api/products.json')
    .then((req) => req.json())
    .then((data) => data)

  currentProducts = await products.filter(
    (product) => product.category === 'coffee'
  )

  if (window.matchMedia('(min-width: 768px)').matches) {
    steppedProducts = [...currentProducts]
  } else {
    updateProductsForMobiles()
  }

  if (currentProducts.length === steppedProducts.length) {
    productButton.style.display = 'none'
  } else {
    productButton.style.display = 'flex'
  }

  renderProductsFn()
})()

function updateProductsForMobiles() {
  steppedProducts.push(
    ...[...currentProducts].slice(step * 4 + 4, step * 4 + 8)
  )
}
