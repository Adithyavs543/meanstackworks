products={p_code:100,name:"treat",price:250,aval_qty:50}

// print pro name
// console.log(products.name);

// update stock as current stck +30
// products.aval_qty+=30
// console.log(products);

// cgk for discount key is present or not
// console.log("discount" in products);

// add discount:10%
// products.discount="10%"
// console.log(products);

//chl for batch_code is present
//if not add batch_code=est_2k21_09
if("batch_code" in products){
    console.log(true);
}
else{
    console.log(false);
    products("batch_code")="est2k21_09"
}
