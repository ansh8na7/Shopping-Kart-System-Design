import CouponAll from "./CouponAll";
import CouponType from "./CouponType";
import Product from "./Product";
import CouponNext from "./CouponNext";
import Card from "./Card";

export default class ShoppingKart{
    productList:Product[];
    totalCartValue:number;

    constructor(productList:Product[]){
        this.productList = productList;
        this.totalCartValue = productList.reduce((prev,curr)=>{
            return prev+curr.getPrice();
        },0)
    }

    setProductList(productList:Product[]){
        this.productList = productList;
    }
    applyCoupon(couponAll:CouponAll,couponNext:CouponNext,couponType:CouponType){
        if(couponAll){
            this.productList = (this.productList.map(product => {
                product.discPrice -= product.discPrice * CouponAll.Discount;
                return product;
            }))
        }
        if(couponNext && couponNext.applicableNumberOfItems<=this.productList.length){
            this.productList[couponNext.applicableNumberOfItems].discPrice -= this.productList[couponNext.applicableNumberOfItems].discPrice*CouponNext.Discount;
        }
        if(couponType){
            this.productList = this.productList.map(item=>{
                for(let i=0;i<CouponType.ApplicableItems.length;i++){
                    if (item.type === CouponType.ApplicableItems[i])
                    item.discPrice -= CouponType.Discount;
                }
                return item;
            })
        }
    }
}