import "./ProductList.scss"
import {ProductItem} from "../ProductItem/ProductItem.jsx";
import {useState} from "react";
import {useTelegram} from "../../hooks/useTelegram.js";

const products = [
  {id: 1, title:"Джинсы", price:5000, description:"Для крутых пацанов"},
  {id: 2, title:"Куртка", price:9000, description:"Чтобы не заболеть"},
  {id: 3, title:"Пробка", price:700, description:"Для твоей попки"},
  {id: 4, title:"Шаравары", price:1200, description:"Чтобы бить в барабаны"},
  {id: 5, title:"Друг програмимст", price:0.1, description:"Купи раба заебал"},
  {id: 6, title:"Шлюха", price:9999, description:"Твоя мама"},
  {id: 7, title:"Пачка сиг", price:200, description:"Ну а шо, жизнь сложная"},
  {id: 8, title:"Вкусняшка", price:100000, description:"Хуй с повидном"},
];

const getTotalPrice =(products)=>{
    return products.reduct((acc, item)=>{
        acc + item.price;
    }, 0)
};


export const ProductList = () => {

    const {mainButton }= useTelegram();

    const [addedItem, setAddedItem] = useState([]);
    const onAdd = (product)=>{
        const alreadyAdded = addedItem.filter(item => item.id === product.id);
        let newItem =[];

        if(alreadyAdded.length > 0){
            newItem = addedItem.filter(item => item.id !== product.id);
        }else {
            newItem = [...addedItem, product];
        }

        setAddedItem(newItem);

        if(addedItem.length === 0){
            mainButton.hide();
        }else{
            mainButton.show();
            mainButton.setParams({
                text:'Оформить кредит на ' + getTotalPrice(newItem) + ' грн'
            });
        }
    }

    return(
      <div>
          {
              products.map(product=>(
                <ProductItem
                  product={product}
                  key={product.id}
                  onAdd={onAdd}
                  className={'item'}
                />
              ))
          }
      </div>
    )
}