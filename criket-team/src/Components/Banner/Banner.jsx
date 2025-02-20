import PropTypes from 'prop-types';

const Banner = ({handleAddFreeCoins}) => {
    return (
        <div className="px-20 mb-10 ">
            <div className="text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% space-y-3 p-3">

                <img className="mx-auto" src="../../../public/assets/banner-main.png" alt="" />
                <h1 className="lg:text-3xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p>Beyond Boundaries Beyond Limits</p>
                <button onClick={handleAddFreeCoins} className="btn bg-yellow-200 px-2 py-2 ">Claim Free Credit</button>
            </div>

           
        </div>
    );
};

Banner.propTypes={
    handleAddFreeCoins:PropTypes.func.isRequired
}

export default Banner;