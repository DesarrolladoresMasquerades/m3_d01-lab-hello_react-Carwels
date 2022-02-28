export default function Cards(props) {
    return (
      <div className="cards">
        <img src={props.card.img} alt="card icon"></img>
        <div>
          <h5 className="card-title">{props.card.title}</h5>
          <p className="card-text">{props.card.text}</p>
        </div>
      </div>
    );
  }