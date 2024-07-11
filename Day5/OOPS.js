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
 
    getQuantity() {

        return this.quantity;

   }

}
// const idlie = new food('idlie', 30, ['rice', 'salt', 'fenugreek', 'gramdall'], 'Veg',
//     'https://www.thestatesman.com/wp-content/uploads/2019/04/idli.jpg',3);

// const dosa = new food('dosa', 50, ['rice', 'salt', 'fenugreek', 'gramdall', 'Oil'], 'Veg',
//     'https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg',6);


// class car {
//     constructor(carname, module, colour, speed) {
//         this.carname = carname;
//         this.module = module;
//         this.colour = colour;
//         this.speed = speed;

//         console.log(carname, module, colour, speed);
            
//     }


//     getCarColour() {
//         return this.colour;

//     }


//     getKilometer() {
//         return this.speed;

//     }
// }
    


// const nixan = new car('nixan', "rc500", 'red', " 200 KM/perhour");
// const maruti= new car('maruti','RC800','violet','800/kmperhour')


 
// console.log(idlie.getItemPrice(), dosa.getItemPrice())
// console.log(idlie.getFoodtype(), dosa.getFoodtype());
// console.log(idlie.getQuantity(), dosa.getQuantity());
// console.log(maruti.getCarColour(), nixan.getCarColour());

/*
* INHERITANCE
*Derived class


*/

class SuperFood extends food  {

    constructor( name, price, incrediant, foodtype, img, quantity, specialIncrediant = []) {
        super(name, price, incrediant, foodtype, img, quantity);
        this.specialIncrediant = specialIncrediant;  
        

    }
}


const AmbaniBreakfast = new SuperFood('idlie', 30, ['rice', 'salt', 'fenugreek', 'gramdall'], 'Veg',
     'https://www.thestatesman.com/wp-conten t/uploads/2019/04/idli.jpg',3,['x','y']);

console.log(AmbaniBreakfast);
