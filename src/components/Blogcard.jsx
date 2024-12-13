import React from 'react'

function Blogcard() {
  return (
    <div className='w-full flex gap-4 mb-4 hover:shadow-md'>
        <div>
            <img src="https://picsum.photos/seed/x4ldxHJ/640/480" alt="image" className='w-[200px] shrink-0'/>
        </div>
        <div>
            <h2 className='text-2xl font-semibold text-red-500 mb-4'>title</h2>
            <p>author</p>
        </div>
    </div>
  )
}

export default Blogcard