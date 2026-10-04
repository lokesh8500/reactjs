import React from 'react'

function Rightcardcontent(props) {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col'>
        <h1 className="absolute font-semibold top-4 left-4 text-white text-2xl border-2 rounded-full h-10 w-10 flex justify-center items-center">{props.id}</h1>
        <div className='text-white absolute bottom-4 left-4 right-4 text-2xl'>
            <p className='text-xs font-medium mb-6 leading-3.5'>{props.intro}</p>
            <div className='flex items-center'>
                <button className="text-sm bg-blue-500 text-white px-2 py-1 rounded-b-2xl h-8 w-full">{props.tag}</button>
            </div>
        </div>
    </div>
  )
}

export default Rightcardcontent
