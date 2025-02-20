import PropTypes from 'prop-types';
import Schedule from '../Schedule/Schedule';
import Available from '../Available/available';

const Container = ({ handleButtons, isActive, players, handleAddToCart, carts, }) => {

    return (
        <div className="px-20 mb-10">
            <div className="flex justify-end space-x-2">

                <button className={`${isActive.player ? 'px-2 py-2 border-2 border-gray-100 bg-yellow-200' : ''}`} onClick={() => handleButtons('available')}>Available</button>

                <button className={`${isActive.player ? '' : 'px-2 py-2 border-2 border-gray-100 bg-yellow-200'}`} onClick={() => handleButtons('schedule')}>Selected</button>

            </div>

            <div>
                {
                    isActive.player ? <Available
                        players={players}
                        handleAddToCart={handleAddToCart}
                    ></Available> :
                        <Schedule
                            carts={carts}
                            
                        ></Schedule>
                }
            </div>

        </div>
    );
};

Container.propTypes = {
    handleButtons: PropTypes.func.isRequired,
    isActive: PropTypes.object.isRequired,
    players: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
    carts: PropTypes.object.isRequired,
   
}

export default Container;