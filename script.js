let cart = [];

function lägg_till_varukorg(varu_namn, varu_pris) {
    let item = {
        namn: varu_namn,
        pris: varu_pris
    };
    cart.push(item);
    visa_varukorg();
}

function visa_varukorg() {
    let cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    cart.forEach(function(item) {
        let itemName = document.createElement('p');
        itemName.textContent = item.namn;
        let itemPrice = document.createElement('p');
        itemPrice.textContent = item.pris + ' €';
        cartElement.appendChild(itemName);
        cartElement.appendChild(itemPrice);
    });
}
