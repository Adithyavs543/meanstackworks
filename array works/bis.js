var products=[
    [100,"oreo",40,50],
    [101,"fifty fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms magic",45,10]
]

//  products.map(item=>item[1]).forEach(names=>console.log(names))

// print pro rs>30
// products.filter(item=>item[2]>30).forEach(item=>console.log(item))

// highest price
//  var highest_product=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
//  console.log(highest_product);
// var low_product=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
//  console.log(low_product);

// var search=products.find(item=>item[1]=="treat")
// console.log(search);

// var search=products.find(item=>item[2]=="20")
// console.log(search);

// can i purchasw item for < 10 rs ? true or false  some()
// var is_available=products.some(item=>item[2]<30)
// console.log(is_available);


// for(let items of products){
//     console.log(items.length);
// }
// var pro_names=products.map((pro)=>pro[1])
// console.log(pro_names);
// for(let items of products){
//     if(items[3]!=0){
//         console.log(items[1]);
//     }
// }
// console.log(products.length);
// var items=products.filter((pro)=>pro[3]!==0)
// console.log(items.length);
// var available=products.filter(items=>items[3]!==0)
// console.log(available);
// 
// print out of stock items
// var out=products.filter(items=>items[3]==0).map(items=>items[1])
// console.log(out);

// add offer 5 rs for all product whose stock>50
// var out=products.filter(items=>items[3]>50).map(items=>items[2]-=5)
// console.log(out);

// sort the products stock wise
// products.sort((item1,item2)=>item2[3]-item1[3])
// console.log(products);
// products.sort((item1,item2)=>item2[2]-item1[2])
// console.log(products);
// products.sort((item1,item2)=>item1[2]-item2[2])
// console.log(products);



