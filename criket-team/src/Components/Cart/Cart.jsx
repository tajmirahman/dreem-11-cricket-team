import { MdDelete } from "react-icons/md";
import PropTypes from 'prop-types';


const Cart = ({cart}) => {
    const {img, speciality, price}=cart;
    return (
        <div className="flex justify-between items-center mt-10 border-2 border-gray-200 p-3">
            <div>
                <img className="w-20 h-20 " src={img} alt="" />
            </div>
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">Price</h1>
                <p className="font-semibold">{price}</p>
            </div>
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">Speciality</h1>
                <p>{speciality}</p>
            </div>
            
            <button className="p-2 border-2 border-gray-200 bg-red-400"><MdDelete /></button>
        </div>
    );
};

Cart.propTypes={
    cart:PropTypes.object.isRequired
}

export default Cart;