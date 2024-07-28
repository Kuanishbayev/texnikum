import React, { useState } from 'react'
import StickyHeadTable from '../components/StickyHeadTable'
import { CiSearch } from 'react-icons/ci'
import { IoLogOutOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { FaFileDownload } from 'react-icons/fa'

import {ExcelFile, ExcelSheet} from 'react-xlsx-wrapper';
import { applicants } from '../data/db';

const row = applicants.map(applicant => (
    [
        {value: applicant.first_name},
        {value: applicant.last_name},
        {value: applicant.middle_name},
        {value: applicant.date_of_birth},
        {value: applicant.phone_number},
        {value: applicant.secondary_phone_number},
        {value: applicant.direction},
        {value: applicant.type_of_education},
        {value: applicant.source},
        {value: applicant.created_at},
        {value: applicant.updated_at},
    ]
    )
  )
  
  
  const multiDataSet = [
    {
        columns: [
            {title: "Atı", width: {wch: 20}},
            {title: "Familiyası", width: {wch: 25}},
            {title: "Ákesiniń atı", width: {wch: 25}},
            {title: "Tuwılǵan sánesi", width: {wch: 15}},
            {title: "Telefon nomeri", width: {wch: 20}},
            {title: "Ekinshi telefon nomeri", width: {wch: 20}},
            {title: "Tálim baǵdarı", width: {wch: 50}},
            {title: "Tálim túri", width: {wch: 10}},
            {title: "Qay jerden?", width: {wch: 10}},
            {title: "Jaratılǵan waqtı", width: {wch: 20}},
            {title: "Jańalanǵan waqtı", width: {wch: 20}},
        ],
        data: row
    }
  ];
  
  let d = new Date()
  d = (d.getDate() < 10 ? ("0" + d.getDate()) : d.getDate()) + "-" + (d.getMonth() < 10 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1)) + "-" + d.getFullYear() + "_" + (d.getHours() < 10 ? ("0" + d.getHours()) : d.getHours()) + "-" + (d.getMinutes() < 10 ? ("0" + d.getMinutes()) : d.getMinutes()) + "-" + (d.getSeconds() < 10 ? ("0" + d.getSeconds()) : d.getSeconds())
  let fileName = 'arzashilar-dizimi' + "_" + d

const Admin = () => {
    const [searchVal, setSearchVal] = useState('')

  return (
    <div className='min-h-screen'>
        <div className='flex justify-between items-center bg-gray-400 p-4'>
            <p className='font-bold text-xl text-white'>Admin Panel</p>
            <Link to='/'>
                <div className='cursor-pointer' title='Akkounttan shıǵıw'>
                    <IoLogOutOutline stroke='white' size={30} />
                </div>
            </Link>
        </div>
        <div className='flex md:flex-row gap-4 justify-between items-center flex-col p-4'>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <CiSearch className='w-4 h-4 font-bold' />
                </div>
                <input onChange={(e) => setSearchVal(e.target.value)} value={searchVal} type="text" className="border border-black shadow text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5" placeholder="Izlew..." />
            </div>
            <Button variant="outlined" startIcon={<FaFileDownload />}>
                <div>
                    <ExcelFile filename={fileName} element={<button>Excel variantta júklep alıw</button>}>
                        <ExcelSheet dataSet={multiDataSet} name={"Arzashılar"}/>
                    </ExcelFile>
                </div>
            </Button>
        </div>
        <StickyHeadTable searchVal={searchVal} />
    </div>
  )
}

export default Admin