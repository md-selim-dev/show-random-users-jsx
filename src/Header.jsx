

import { Plus } from "lucide-react";
import React from 'react'

const Header = ({ addUser, users }) => {
    return (
        <div className="flex justify-between items-center sticky top-0 bg-sky-600 p-6">
            <h4 className="font-bold text-2xl">User Count: {users.length}</h4>
            <button onClick={()=> addUser()} className='bg-green-400 rounded-lg w-12 h-8 grid place-items-center cursor-pointer'><Plus></Plus></button>
        </div>
    )
}

export default Header