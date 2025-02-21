

const NewsLetter = () => {
    return (
        <div className="p-4">

            <section className="relative z-10  lg:max-w-3xl mx-auto bg-gradient-to-r from-blue-100 to-orange-100 p-8 rounded-2xl shadow-lg text-center">
                <h2 className="text-2xl font-semibold text-gray-900">Subscribe to our Newsletter</h2>
                <p className="text-gray-600 mt-2">Get the latest updates and news right in your inbox!</p>
                <div className="mt-4 flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 w-2/3 rounded-l-lg border border-gray-300 focus:outline-none"
                    />
                    <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-r-lg font-semibold">
                        Subscribe
                    </button>
                </div>
            </section>

        </div>
    );
};

export default NewsLetter;