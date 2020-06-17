function eval(e) {
    // e.preventDefault();
    
    var price = document.getElementById('price');
    priceBox = price.value;

    var qty = document.getElementById('quantity');
    qtyBox = qty.value;

    if (qtyBox < 1){
        alert ("Please, input a valid Number");
    }
    else if (qtyBox >= 1){
        alert ("This will cost you" + " " + "#" + qtyBox * priceBox);
    }
}
    
