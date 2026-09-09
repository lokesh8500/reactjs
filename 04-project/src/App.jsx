import Card from './components/card.jsx'

function App() {

  const profiles = [
  {
    profileImage: "https://i.pravatar.cc/150?img=12",
    name: "Rahul Patel",
    details: "Frontend Developer and UI/UX enthusiast."
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=47",
    name: "Priya Shah",
    details: "BCA student interested in web development."
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=33",
    name: "Aman Mehta",
    details: "Backend developer learning Node.js and databases."
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=5",
    name: "Neha Joshi",
    details: "Graphic designer passionate about creative design."
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=68",
    name: "Arjun Desai",
    details: "Full-stack developer building web applications."
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=9",
    name: "Kavya Patel",
    details: "Computer science student learning JavaScript."
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=14",
    name: "Rohan Shah",
    details: "Python developer interested in automation."
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=32",
    name: "Anjali Mehta",
    details: "UI/UX designer focused on user-friendly interfaces."
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=51",
    name: "Vivek Kumar",
    details: "Software developer and open-source contributor."
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=44",
    name: "Sneha Desai",
    details: "Web developer learning React and modern CSS."
  }
];


  return (
    <div className="parent">
      {profiles.map(function(props){
        return <Card props={props} />
      })}
    </div>
  )
}

export default App
