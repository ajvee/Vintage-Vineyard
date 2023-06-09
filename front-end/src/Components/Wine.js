import { Link } from "react-router-dom";

function Wine({ wine }) {
  return (
    <tr>

      <td className="title">
      <div> <img className="wineImg" alt="wineCover" src={wine.img} width={100}></img></div>

        <Link to={`/wines/${wine.id}`}
        >
          {wine.wine_name}
        </Link>
      </td>
      <td className="grape">{wine.grape}</td>
      <td className="price">{wine.price}</td>
      <td className="region">{wine.region}</td>
      <td className="vintage">{wine.vintage}</td>
      <td className="vintage">{wine.rating}</td>

    </tr>
  );
}

export default Wine;