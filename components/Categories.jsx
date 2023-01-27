import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  // console.log(categories)

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='bg-white w-full shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>

      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer mb-3 transition duration-500 flex items-center w-full border border-white hover:border-gray-200 p-3 rounded-lg hover:bg-gray-100'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories