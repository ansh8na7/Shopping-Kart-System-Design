export default class Product{
    name:string;
    origPrice:number;
    type:string;
    discPrice:number;
    constructor(name,origPrice,type){
        this.name=name;
        this.origPrice=origPrice;
        this.type = type;
        this.discPrice = origPrice;
    }
    getPrice(){
        return this.origPrice;
    }
    getType(){
        return this.getType;
    }
}

enum ProductType{
    BagPack, Tshirt, Card
}