import "./Main.css";
import Filter from "./parts/Filter";

function Main(props) {
  console.log(props.data);
  return (
    <main className="main">
      <Filter />
      <div className="item__list">
        {props.data.map((item, index) => (
          <div className="item" key={index}>
            <img className="item__img" src={item.image} alt={item.name} />
            <p className="item__name">{item.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
