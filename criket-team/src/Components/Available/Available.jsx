import PropTypes from 'prop-types';
import Player from '../Player/Player';

const Available = ({ players }) => {
    console.log(players)
    return (
        <div >
            <h1>Available Players {players.length}</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    players.map(player => <Player key={player.id} player={player}></Player>)
                }
            </div>
        </div>
    );
};

Available.propTypes = {
    players: PropTypes.object.isRequired,
}


export default Available;