import Hero from "./hero"
function Leftcontent() {
  return (
    <div className='h-full w-1/3 text-black justify-between flex flex-col p-4'>
      <Hero />
      <div className="text-9xl">
        <i className='ri-arrow-right-up-line'></i>
      </div>
    </div>
  )
}

export default Leftcontent
