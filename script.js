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
        let itemName = document.createElement('h4');
        itemName.textContent = item.namn;
        let itemPrice = document.createElement('p');
        itemPrice.textContent = item.pris + ' €';
        cartElement.appendChild(itemName);
        cartElement.appendChild(itemPrice);
    });
    visa_totalt_pris();
}

function visa_totalt_pris() {
    let totalPris = 0;
    cart.forEach(function(item) {
        totalPris += item.pris;
    });
    let totalElement = document.getElementById('total');
    totalElement.textContent = 'Totalt pris: ' + totalPris + ' €';
}

function rensa() {
    cart.length = 0;
    visa_varukorg();
    visa_totalt_pris(); 
}
