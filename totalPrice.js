

let totalPrice =(items)=>{
    let total =0

    for(obj of items){
        for(amount in obj){
          if(amount=="price"){
            total+= obj[amount]
          }

        }
    }
    console.log(`please pay the bill of Rs.${total},\n Thank you visit again!!`)
}

totalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },{ product: "Milk", quantity: 1, price: 1.50 }
  ])