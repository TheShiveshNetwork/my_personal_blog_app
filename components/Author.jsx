import React from 'react'

import Image from 'next/image'

const Author = ({ author }) => {
    return (
        <div className='flex gap-12 text-center mt-20 mb-8 lg:p-10 rounded-lg bg-purple-700 bg-[url("../public/background.jpg")] bg-center bg-cover bg-no-repeat p-8'>
            <div className='w-[30%] max-h-[300px]'>
                <Image
                    alt={author.name}
                    width={100}
                    height={100}
                    unoptimized
                    className='align-middle w-full h-full rounded-lg'
                    src={author.photo.url}
                />
            </div>
            <div className='w-[70%] flex flex-col justify-center text-left'>
                <h3 className='text-white text-xl lg:text-3xl xl:text-5xl font-bold'>{author.name}</h3>
                <p className='text-white text-md lg:text-xl lg:mt-3'>{author.bio}</p>
            </div>
        </div>
    )
}

export default Author