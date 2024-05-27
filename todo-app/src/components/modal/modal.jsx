import axios from 'axios';
import React, { useState } from 'react';

const Modal = ({setFetchAgain}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [task, setTask] = useState("")
    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('overflow-y-hidden');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('overflow-y-hidden');
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 27) {
            closeModal();
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const date = new Date()
    const email = localStorage.getItem("email")
    const addTodo = async () => {
        const res = await axios.post("http://localhost:8000/todos", {
            user_email: email,
            title: task,
            date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
        })

        console.log(res.data)
        setTask("")
        setFetchAgain(true)
        closeModal()
    }

    return (
        <div>
            <button
                className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-700 transition"
                onClick={openModal}
            >
                Add new
            </button>

            {isModalOpen && (
                <div
                    id="modelConfirm"
                    className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
                >
                    <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-xl">
                        <div className="flex justify-end p-2">
                            <button
                                onClick={closeModal}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        <div className="p-6 pt-0 text-center">

                            <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                                Please add something to-DO
                            </h3>

                            <div className="bg-white p-4 rounded-lg">
                                <div className="relative bg-inherit">
                                    <input value={task} onChange={(e) => setTask(e.target.value)} type="text" id="username" name="username" className="peer bg-transparent h-10  rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type inside me" /><label for="username" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">ADD TODO</label>
                                </div>
                            </div>

                            <div className='flex justify-end mt-20'>
                                <button
                                    className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-700 transition"
                                    onClick={addTodo}
                                >
                                    Add TODO
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
