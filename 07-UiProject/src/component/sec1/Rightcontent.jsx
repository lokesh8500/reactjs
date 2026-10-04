import Rightcard from "./Rightcard"
function Rightcontent(props) {
  return (
    <div className="h-full flex w-2/3 flex-nowrap gap-6 overflow-x-auto rounded-4xl p-6">
      {props.users.map(function(elem){
        return <Rightcard img={elem.img} intro={elem.intro} tag={elem.tag} id={elem.id} />
      })}
    </div>
  )
}

export default Rightcontent