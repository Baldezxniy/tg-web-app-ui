import "./ProductItem.scss"
import {Button} from "../Buttom/Button.jsx";

import img from '../../assets/ava.jpg';

// eslint-disable-next-line react/prop-types
export const ProductItem =({product, className, onAdd})=>{

  const onAddHandler = ()=>{
    onAdd(product)
  }

  return (
    <div className={'product ' + className}>
      <img className={'img'} src={img} />
      {/* eslint-disable-next-line react/prop-types */}
      <div className={'title'}>{product.title}</div>
      {/* eslint-disable-next-line react/prop-types */}
      <div className={'description'}>{product.description}</div>
      <div className={'price'}>
        {/* eslint-disable-next-line react/prop-types */}
        <span> Стоимость: <b>{product.price}</b></span>
      </div>
      <Button className={'add-btn'} onClick={onAddHandler}>
        Добавить в корзину
      </Button>
    </div>
  );
};