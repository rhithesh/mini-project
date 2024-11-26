export default function Signup() {
    return (
        <div className="bg-gradient-to-r from-green-300 to-green-500 flex justify-center items-center min-h-screen">
            <div className="bg-white shadow-lg text-gray-900 rounded-2xl flex border-2 border-gray-300 h-[350px] w-[850px]">
                {/* Left Section */}
                <div className="flex flex-col justify-center items-center p-6 bg-green-100 rounded-l-2xl h-full w-1/2">
                    <h1 className="text-3xl font-semibold text-center leading-relaxed">
                        Join Us to Create the Next Revolution in Farming
                    </h1>
                    <p className="mt-4 text-gray-600 text-sm text-center">
                        Be part of an innovative movement to empower farmers worldwide.
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col px-8 py-6 w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                    <label htmlFor="username" className="font-medium text-sm mb-2">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        className="border border-green-500 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <label htmlFor="password" className="font-medium text-sm mb-2">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="border border-green-500 rounded-md px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <button className="bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg text-lg font-semibold shadow-md transition duration-300">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}
