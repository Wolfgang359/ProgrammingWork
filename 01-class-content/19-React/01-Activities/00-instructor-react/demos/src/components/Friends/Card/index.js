import { ListItem } from '../List/ListItem';
import "./style.css";

export const Card = ({
  name,
  id,
  image,
  occupation,
  location,
  handleClick
}) => (
  <div className="card text-center">
    <div className="img-container">
      <img
        alt={name}
        src={image}
      />
    </div>
    <div className="content">
      <ul>
        <ListItem
          property="Name"
          value={name}
        />
        <ListItem
          property="Occupation"
          value={occupation}
        />
        <ListItem
          property="Location"
          value={location}
        />
      </ul>
      <button onClick={(event) => handleClick(id)} type="button" className="btn btn-danger">FIEND</button>
    </div>
  </div>
);
