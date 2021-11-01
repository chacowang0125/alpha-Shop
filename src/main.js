import './scss/main.scss'
//step
const steps = document.querySelectorAll('.step')
    //form
const form = document.getElementById('a-form')
const formParts = form.querySelectorAll('.part')
const deliveryOptions = document.querySelectorAll('.shipping-selection')
const deliveryFeeAmount = document.querySelector('.cart-delivery-price')
const btnControl = document.getElementById('btn-control')
const prevBtn = btnControl.querySelector('.btn-previous-text')
const nextBtn = btnControl.querySelector('.btn-next')
    //cart
const quantityBtns = document.querySelectorAll('.product-quantity-circle')
const cartTotalAmount = document.querySelector('.cart-amount-price')
    //dark mode
const darkModeToggle = document.querySelector('#dark__mode__toggle')

let step = 0
let productCost = 5298
let deliveryFee = 0

//event listener
//在兩個在兩個運送方式都掛上監聽器
deliveryOptions.forEach(option => option.addEventListener('click', handleDelivery))
btnControl.addEventListener('click', handleBtnControl)
quantityBtns.forEach(btn => btn.addEventListener('click', renderCart))
darkModeToggle.addEventListener("change", darkModeToggleHandler);

// function that adds comma to numbers (checkout section)
// let numberWithCommas = x => x.toLocaleString();
//string.toLocalString用Intl代替

function numberWithCommas(num) {
    return new Intl.NumberFormat('hi-IN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(num)
}

//mode switch
function darkModeToggleHandler(event) {
    event.target.checked ?
        document.documentElement.setAttribute("data-theme", "dark") :
        document.documentElement.setAttribute("data-theme", "light")
}



//select delivery method
function handleDelivery(e) {
    deliveryFee = Number(e.currentTarget.querySelector('.shipping-selection__price').innerText.slice(1))
    deliveryOptions.forEach(option => option.classList.remove('checked'))
        //在觸發事件時，用currentTarget在綁定事件的節點上增加checked的class
    e.currentTarget.classList.add('checked')
    if (!Number(deliveryFee)) {
        deliveryFee = 0
    }

    deliveryFeeAmount.innerText = numberWithCommas(deliveryFee)
    cartTotalAmount.innerText = numberWithCommas(productCost + deliveryFee);
}

//control buttons
function handleBtnControl(e) {
    e.preventDefault()
    const nowStep = steps[step]
    if (e.target.matches('.btn-next') && e.target.innerHTML === '下一步') {
        const nextStep = steps[step + 1]
        nowStep.classList.remove('active')
        nowStep.classList.add('checked')
        nextStep.classList.add('active')
        formParts[step].classList.add('d-none')
        formParts[step + 1].classList.remove('d-none')
        step += 1

    } else if (e.target.matches('.btn-previous-text')) {
        const prevStep = steps[step - 1]
        nowStep.classList.remove('active')
        prevStep.classList.remove('checked')
        prevStep.classList.add('active')
        formParts[step].classList.add('d-none')
        formParts[step - 1].classList.remove('d-none')
        step -= 1
    }
    setBtnDisabled()
}

//set btn attribute and content
function setBtnDisabled() {
    if (step === 0) {
        prevBtn.parentElement.setAttribute('disabled', 'disabled')
    } else {
        prevBtn.parentElement.removeAttribute('disabled')
    }
    if (step === 2) {
        nextBtn.innerText = '送出申請'
    } else {
        nextBtn.innerText = '下一步'
    }
}

//change quantity and cart amount
function renderCart(e) {
    if (e.target.matches('.product-quantity-circle__add')) {
        let quantity = e.target.previousElementSibling
        let price = e.target.parentElement.nextElementSibling.innerText.slice(1)
        quantity.innerHTML = Number(quantity.innerHTML) + 1;
        productCost += Number(price.replace(/[^0-9\.]+/g, ""))
    } else {
        let quantity = e.target.nextElementSibling
        let price = e.target.parentElement.nextElementSibling.innerText.slice(1)
        if (Number(quantity.innerHTML)) {
            quantity.innerHTML = Number(quantity.innerHTML) - 1;
            productCost -= Number(price.replace(/[^0-9\.]+/g, ""))
        } else {
            quantity.innerHTML = 0
        }
    }

    cartTotalAmount.innerText = numberWithCommas(productCost + deliveryFee);
}