function Card({ props }) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <img src={props.profileImage} alt="Profile" />
        </div>
        <div className="middle">
          <h1>{props.name}</h1>
        </div>
        <div className="bottom">
          <p>{props.details}</p>
          <button>Follow</button>
        </div> 
      </div>
    </div>
  )
}

export default Card
