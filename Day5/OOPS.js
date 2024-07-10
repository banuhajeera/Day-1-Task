class food{
    constructor(name, price, incrediant, foodtype, img,quantity) {
        this.name = name;
        this.price = price;
        this.incrediant = incrediant;
        this.foodtype = foodtype;
        this.img = img;
        this.quantity=quantity

        console.log('Instance created ',name, price, incrediant, foodtype, img, quantity);
        
    }

    getItemPrice() {
        return this.price * this.quantity;
    }
    
    getFoodtype() {
        return this.foodtype
    }



}
const idlie = new food('idlie', 30, ['rice', 'salt', 'fenugreek', 'gramdall'], 'Veg',
    'https://www.thestatesman.com/wp-content/uploads/2019/04/idli.jpg',3);

const dosa = new food('dosa', 50, ['rice', 'salt', 'fenugreek', 'gramdall', 'Oil'], 'Veg',
    'https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg',6);


console.log(idlie.getItemPrice(), dosa.getItemPrice())
console.log(idlie.getFoodtype(),dosa.getFoodtype());