import React, { useState } from 'react'
import StickyHeadTable from '../components/StickyHeadTable'
import { FaFileDownload } from 'react-icons/fa'
import { Button } from '@mui/material'
import { CiSearch } from 'react-icons/ci'
import { RiAccountCircleLine } from 'react-icons/ri'
import { JsonToExcel } from 'react-json-to-excel'
import { applicants } from '../data/db'

const Admin = () => {
    const [searchVal, setSearchVal] = useState('')
  return (
    <div className='min-h-screen'>
        <div className='flex justify-between items-center bg-gray-400 p-4'>
            <p className='font-bold text-xl'>Admin Panel</p>
            <div className='cursor-pointer'>
                <RiAccountCircleLine size={40} />
            </div>
        </div>
        <div className='flex justify-between items-center p-4'>
            <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <CiSearch className='w-4 h-4 font-bold' />
                </div>
                <input onChange={(e) => setSearchVal(e.target.value)} value={searchVal} type="text" className="border border-black shadow text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5" placeholder="Izlew..." />
            </div>
            {/* <Button variant="outlined" startIcon={<FaFileDownload />}>
            </Button> */}
                <JsonToExcel
                    title="Excel variantın júklep alıw"
                    data={applicants}
                    fileName="sample-file"
                />
        </div>
        <StickyHeadTable searchVal={searchVal} />
    </div>
  )
}

export default Admin