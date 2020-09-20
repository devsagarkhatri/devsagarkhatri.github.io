import React from "react";
import { Link } from "react-router-dom";

const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem,
  } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Link to={"/" + item[valueProperty] + "?"}>
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        </Link>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "technology",
  valueProperty: "key",
};
export default ListGroup;
