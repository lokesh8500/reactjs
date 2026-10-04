import React from 'react';

function App() {
  return (
    <div className='bg-blue-800 text-white p-4'>
      <h1 className='text-2xl font-bold'>My App</h1>
      <p className='mt-2'>
        This is a simple React app using Tailwind CSS.
      </p>
      <span className='inline-block mt-4 px-4 py-2 bg-white text-blue-800  hover:bg-gray-200 hover:scale-105 hover:rotate-360 duration-300 cursor-pointer'>
        Click Me
      </span>
    </div>
  );
}

export default App;
 