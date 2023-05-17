import { Link } from "react-router-dom";

// function getColor(rating) {
//     let color = "";
//     if (rating > 81) {
//       color = "green";
//     } else if (rating >= 60 && rating <= 79) {
//       color = "yellow";
//     } else {
//       color = "red";
//     }
//     return color;
//   }
// wine_name, img, region, grape_variety, vintage, price, rating
function Wine({ wine }) {
  return (
    <tr>

      {/* <td className="score"><span style={{ color: getColor(wine.rating) }}>{wine.rating}</span></td> */}
      <td className="title">
        <Link to={`/wines/${wine.id}`}
        >
          {wine.wine_name}
        </Link>
      </td>
      <td className="grape">{wine.grape_variety}</td>
      <td className="price">{wine.price}</td>
      <td className="region">{wine.region}</td>
      <td className="vintage">{wine.vintage}</td>
      <td className="vintage">{wine.rating}</td>

    </tr>
  );
}

export default Wine;