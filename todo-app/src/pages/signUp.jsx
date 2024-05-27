import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [data, setData] = useState({ fullName: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/user/register', {
                name: data.fullName,
                email: data.email,
                password: data.password
            });
            
            const resData = res.data
            if (resData) {
                navigate("/login");
            }

        } catch (error) {
            console.error("There was an error registering the user!", error);
        }
    };

    return (
        <section className="flex flex-col items-center pt-20">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Your full name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                onChange={handleData}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Emelia Erickson"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleData}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="emelia_erickson24@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={handleData}
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Create an account
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?{' '}
                            <NavLink to={"/login"} className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/signin">
                                Sign in here
                            </NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SignUpForm;
