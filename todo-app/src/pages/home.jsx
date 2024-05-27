import React, { useEffect, useState } from 'react'
import Modal from '../components/modal/modal'
import axios from 'axios'
import List from '../components/listItems/list'

const Home = () => {
    const [data, setData] = useState([])
    const [fetchAgain, setFetchAgain] = useState(false)
    const email = localStorage.getItem("email")
    console.log(email)

    const getTodos = async () => {
        const res = await axios.get(`http://localhost:8000/todos/${email}`)
        setData(res.data)
        setFetchAgain(false)
    }

    useEffect(() => getTodos, [fetchAgain])
    const handleSignOut = ()=>{
        localStorage.removeItem("email")
        localStorage.removeItem("token")
        window.location.reload()
    }
    return (
        <>
            <div className=' max-w-6xl mx-auto flex justify-between  p-10 bg-gray-100 rounded-xl shadow-lg mt-20'>
                <div>
                    <h1 className='text-3xl'>Task Tamer</h1>
                </div>

                <div className='flex gap-4'>
                    <Modal setFetchAgain={setFetchAgain}/>
                    <button
                        onClick={handleSignOut}
                        className="bg-rose-500 text-white rounded-md px-4 py-2 hover:bg-rose-700 transition"
                    >
                        Sign Out
                    </button>
                </div>
            </div>


            <div className={`max-w-6xl mx-auto p-5 my-5 rounded-lg ${data.todos ? "bg-purple-100 shadow-md h-[600px] overflow-y-scroll" :""}`}>
                {
                    data?.todos?.map((item) => (

                        <List key={item.id} item={item} setFetchAgain={setFetchAgain}/>

                    ))
                }
            </div>



        </>
    )
}

export default Home