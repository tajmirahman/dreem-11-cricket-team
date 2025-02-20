import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';

const Schedule = ({ carts }) => {

    return (
        <div>
            <h1>This is schedule page {carts.length} / 6</h1>

            <div>
                {
                    carts.map(cart=> <Cart key={cart.id} cart={cart}></Cart>)
                }
            </div>


        </div>


    );
};

Schedule.propTypes={
    carts:PropTypes.object.isRequired
}

export default Schedule;