import PropTypes from 'prop-types';

const Player = ({player}) => {

    const {img,name,country,speciality,style,price }=player;
    return (
        <div >
            <div className="card card-compact border-2 border-gray-200 p-4 rounded-lg">
                    <figure>
                        <img className='w-full h-[300px] mb-2 rounded-lg' src={img} alt="Shoes" />
                    </figure>
                    <div>
                        <div className='flex gap-3 mb-2'>
                            <img className='w-10 h-10 rounded-full object-cover' src="https://i.ibb.co.com/QthLzzL/blank-profile-picture-973460-1280.webp" alt="" />
                            <h1 className='text-xl font-bold'>{name}</h1>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className='border-2 border-gray-200 p-2 font-bold'>{country}</p>
                            <p className='border-2 border-gray-200 p-2 bg-gray-100'>{speciality}</p>
                        </div>
                        <hr className='mb-2'/>

                        <div className='flex justify-between mb-2'>
                            <p className='font-bold'>{style}</p>
                            <p className="text-gray-500">{style}</p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className='font-bold'>Price-$ {price}</p>
                            <button className='border-2 border-gray-200 p-2'>Choose Player</button>
                        </div>
                        
                    </div>
                </div>
        </div>
    );
};

Player.propTypes={
    player:PropTypes.object.isRequired,
}

export default Player;