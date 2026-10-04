import Navbar from './Navbar'
import Page1content from './Page1content'

function Section1(props) {
  return (
    <div className='flex h-screen w-full flex-col bg-slate-100'>
      <Navbar />
      <Page1content users={props.users} />
    </div>
  )
}

export default Section1