import React from "react";
import { Link } from "react-router-dom";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./listgroup.css";
const ListGroup = (props) => {
  const { items, textProperty, valueProperty, onItemSelect, selectedItem } =
    props;

  return (
    <ul className="list-group list-group-flush text-black-50 h6 col-md-10 text-left">
      {/* {console.log(items)} */}
      {items.map((item) => (
        // <Link to={"/" + item[valueProperty] + "?"}>
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          style={{ background: "transparent" }}
          className={
            item === selectedItem
              ? "list-item-active list-group-item"
              : "list-group-item "
          }
        >
          {item.technology}
        </li>
        // </Link>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "technology",
  valueProperty: "key",
};
export default ListGroup;
