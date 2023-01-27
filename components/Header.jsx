import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import { BiCategoryAlt, BiMoon, BiHome, BiSearch } from 'react-icons/bi'
import { IoLogoElectron } from 'react-icons/io5'

import { getCategories } from '../services'


const Header = () => {
    const [categories, setCategories] = useState([])
    const [categoriesToggle, setCategoriesToggle] = useState(false)

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className='mx-auto mb-8'>
            <div className="w-full px-10 border-black py-8 flex items-center justify-between lg:justify-center">
                <div className="md:float-left block">
                    <Link href='/'>
                        <span className='flex gap-3 items-center justify-center cursor-pointer font-bold text-4xl text-gray-800 transition duration-300 hover:text-indigo-600'>
                            <IoLogoElectron />ShivuNet
                        </span>
                    </Link>
                </div>

                <div className="flex md:float-left md:contents">

                    <div className='w-full h-full md:float-right flex gap-4 justify-end'>
                        <span className='text-gray-800 transition duration-300 hover:text-gray-600 font-semibold text-3xl cursor-pointer'>
                            <BiSearch />
                        </span>
                        <span className='text-gray-800 transition duration-300 hover:text-gray-600 font-semibold text-3xl cursor-pointer' onClick={() => setCategoriesToggle(!categoriesToggle && true)}>
                            <BiCategoryAlt />
                        </span>
                        {categoriesToggle &&
                            <div className='absolute w-[200px] right-10 top-20 flex flex-col bg-white px-4 py-2 pb-3 z-50 shadow-lg rounded-lg'>
                                <span className='mt-2 text-gray-900 font-semibold pb-2 mb-2 w-full text-center border-b'>
                                    Controls
                                </span>
                                <div className='flex gap-5 text-gray-900 font-semibold pb-5 mt-3 mb-3 w-full text-center border-b items-center justify-center'>
                                    <Link href='/' onClick={() => setCategoriesToggle(false)} className='flex text-gray-800 transition duration-300 hover:text-gray-600 font-semibold text-xl cursor-pointer items-center justify-center'>
                                        <BiHome />
                                        <span className='text-sm ml-1'>Home</span>
                                    </Link>
                                    <span href='/' onClick={() => setCategoriesToggle(false)} className='flex text-gray-800 transition duration-300 hover:text-gray-600 font-semibold text-xl cursor-pointer items-center justify-center'>
                                        <BiMoon />
                                        <span className='text-sm ml-1'>Mode</span>
                                    </span>
                                </div>
                                <span className='mt-2 text-gray-900 font-semibold pb-2 mb-2 w-full text-center border-b'>
                                    Categories
                                </span>
                                {categories.map((category) => (
                                    <Link key={category.slug} href={`/category/${category.slug}`} className='w-full hover:text-gray-600 hover:bg-gray-100 hover:border rounded-lg duration-500 p-2 px-2 transition flex items-center border border-white hover:border-gray-200' onClick={() => setCategoriesToggle(false)}>
                                        <span className='text-gray-700 font-semibold text-[12px] cursor-pointer'>
                                            {category.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header