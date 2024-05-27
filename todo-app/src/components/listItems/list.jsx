import axios from 'axios'
import React, { useState } from 'react'

const List = ({ item, setFetchAgain }) => {
    const [modal, setModal] = useState(false)
    const [updateData, setUpdateData] = useState(item.title)  // State for the input value

    const handleDelete = async (id) => {
        const res = await axios.delete(`http://localhost:8000/todos/delete/${id}`)
        setFetchAgain(true)
        console.log(res)
    }

    const handleModal = () => {
        setModal(!modal)
    }

    const date = new Date()

    const handleUpdate = async (id) => {
        const res = await axios.put(`http://localhost:8000/todos/update/${id}`, {
            user_email: "ahmad@gmail.com",
            title: updateData, 
            date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
        })
        setFetchAgain(true)
        setModal(false)  
        console.log(res)
    }

    return (
      <>
         {
            item!==null ?   <div className='max-w-6xl mx-auto flex justify-between my-5 bg-white p-5 rounded-md items-center'>
            <div>
                <h1>{item.title}</h1>
            </div>

            <div className='flex gap-2'>
                <button
                    className="bg-rose-500 text-white rounded-md px-4 py-2 hover:bg-rose-700 transition"
                    onClick={() => handleDelete(item.id)}
                >
                    Delete
                </button>

                <button
                    className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-700 transition"
                    onClick={handleModal}
                >
                    Update
                </button>

                {
                    modal && (
                        <div className='h-screen absolute z-30 w-full left-0 top-0 flex items-center justify-center'>
                            <div className='p-5 border bg-gray-100 shadow-lg rounded-lg h-1/2'>
                                <div className="flex justify-end p-2">
                                    <button
                                        onClick={handleModal}
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
                                <h1 className='text-center my-10 text-lg'>Update Your TO-DO</h1>
                                <div className="relative bg-inherit">
                                    <input
                                        type="text"
                                        id="updateTodo"
                                        name="updateTodo"
                                        value={updateData}  
                                        onChange={(e) => setUpdateData(e.target.value)} 
                                        className="peer bg-transparent h-10 rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                        placeholder="Type inside me"
                                    />
                                    <label
                                        htmlFor="updateTodo"
                                        className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                                    >
                                        UPDATE TODO
                                    </label>
                                </div>
                                <div className="flex justify-end align-center mt-4">
                                    <button
                                        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition"
                                        onClick={() => handleUpdate(item.id)}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div> : <h1 className='text-3xl'>No task Added click on add new</h1>
         }
      </>
    )
}

export default List
