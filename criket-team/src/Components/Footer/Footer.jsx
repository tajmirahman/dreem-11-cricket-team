

const Footer = () => {
    return (
        <div className="p-20">

            <div className="grid grid-cols-3 p-5">
                <div className="w-5/6">
                    <h1 className="text-xl font-bold">About Us</h1>
                    <p className="">We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Quick Links</h1>
                    <ul>
                        <li>Home</li>
                        <li>Service</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div >
                    <h1 className="text-xl font-bold">Subscribe</h1>
                    <p className="w-5/6 text-center mb-10">Subscribe to our newsletter for the latest updates.</p>
                    <div className="lg:flex">
                        <input className="p-3  rounded-l-lg border border-gray-300 focus:outline-none" type="text" placeholder="subscribe" />

                        <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-2 py-3 rounded-r-lg font-semibold">
                        Subscribe
                    </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;