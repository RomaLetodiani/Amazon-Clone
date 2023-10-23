import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  decrAmount,
  removeItem,
  updateQuantity,
} from '../../Redux/slices/cartSlice';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((cartItem) => cartItem.id === item.id)
  );
  return (
    <div className="p-5 border-b items-center flex gap-5 min-[500px]:flex-row flex-col">
      <div className="max-w-[180px] max-h-[180px]">
        <img
          className="min-w-[150px] aspect-square min-h-[150px]"
          alt={item.name}
          src={item.image || item.images[0]}
        />
      </div>
      <div className="flex flex-col flex-1 gap-8">
        <div className="overflow-hidden max-w-lg">
          <Link to={`/shop/${item.categoryId}/${item.id}`}>
            <h3 className="line-clamp-2">{item.name}</h3>
          </Link>
          <p className="font-bold mt-2 text-xl">${item.price}</p>
        </div>

        <div className="flex">
          <div className="overflow-hidden border-2 flex border-[#D5D9D9] rounded-xl">
            <Button
              onClick={() => {
                dispatch(decrAmount(item));
              }}
            >
              -
            </Button>
            <input
              autoComplete="off"
              className="h-9 w-[3ch] box-content outline-none border-x-2 border-[#D5D9D9] px-2 text-center"
              onChange={(e) => {
                const newAmount = parseInt(e.target.value, 10);
                if (!isNaN(newAmount)) {
                  dispatch(updateQuantity({ id: item.id, newAmount }));
                }
              }}
              type="tel"
              maxLength="3"
              value={cartItem.amount || ''}
            />
            <Button
              onClick={() => {
                dispatch(addItem({ id: item.id }));
              }}
            >
              +
            </Button>
          </div>
          <button
            onClick={() => dispatch(removeItem(item))}
            className="border-l-2 text-sm ml-5 px-5  text-[#007185]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
