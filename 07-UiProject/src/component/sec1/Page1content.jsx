import Leftcontent from "./Leftcontent"
import Rightcontent from "./Rightcontent"

function Page1content(props) {
  return (
    <div className='flex flex-1 items-center gap-10 px-16 py-10'>
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  )
}

export default Page1content