

const Header = () => {
    return (
        <div className="flex justify-between items-center px-20 py-5">
            <div>
                <img src="../../public/assets/logo.png" alt="" />
            </div>
            <div>
                <div className="flex gap-4 flex-1">
                    <ul className="flex text-2xl gap-4">
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    <p className="text-2xl border-2 border-e-gray-50 font-bold">$ 500 Coin</p>
                </div>
            </div>
        </div>
    );
};

export default Header;