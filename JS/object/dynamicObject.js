
// There are 2 ways to create objects dynamically in Js.
// 1. Factory Function
const Product = (pName, pPrice, pDescription, counInStock, paymentBool) => {
    return {
        product_name: pName,
        product_price: pPrice,
        product_description: pDescription,
        count_in_stock: counInStock,
        payment_message: () => paymentBool ? console.log("Payment has been received") : console.log(`Payment has not been received of ${pName} . `)
    }
}

const jacket = Product('Note 3', 1200000, 'This is a phone from samsung company with so called Ai .', 50, false,);

console.log(jacket);
jacket.payment_message();

// 2. Constructor Function

function AddProduct(pName, pPrice, pDescription, counInStock, paymentBool) {
    this.product_name = pName,
        this.product_price = pPrice,
        this.product_description = pDescription,
        this.count_in_stock = counInStock,
        this.payment_message = () => paymentBool ? console.log("Payment has been received") : console.log(`Payment has not been received of ${pName} . `)
}
const Shirt = new AddProduct("Denim shirt",8983,"This is very good shirt.",12,true);
console.log(Shirt);
Shirt.payment_message();

