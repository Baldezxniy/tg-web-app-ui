import "./ProductItemList.scss"
import {Button} from "../Buttom/Button.jsx";
// eslint-disable-next-line react/prop-types
export const ProductItem =({product, className, onAdd})=>{

  const onAddHandler = ()=>{
    onAdd(product)
  }

  return (
    <div className={'product ' + className}>
      <div className={'img'} />
      <div className={'title'}>product.title</div>
      <div className={'description'}>product.description</div>
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