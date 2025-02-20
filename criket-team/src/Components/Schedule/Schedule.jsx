import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';

const Schedule = ({ carts, handleDeleteFormCart }) => {

    return (
        <div>
            <h1>This is schedule page {carts.length} / 6</h1>

            <div>
                {
                    carts.map(cart => <Cart
                        key={cart.id} cart={cart}
                        handleDeleteFormCart={handleDeleteFormCart}
                    ></Cart>)
                }
            </div>


        </div>


    );
};

Schedule.propTypes = {
    carts: PropTypes.object.isRequired,
    handleDeleteFormCart: PropTypes.func.isRequired
}

export default Schedule;