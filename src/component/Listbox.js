import React from "react";

const Listbox = (props) => {
  const clicked = (e) => {
    e.preventDefault();
    props.clicked(e.target.id);
  };

  return (
    <div className="col-sm-6 px-0">
      <div className="list-group">
        {props.items.map((item, idx) => (
          <button
            key={idx}
            onClick={clicked}
            style={{
              display: "block",
              width: "100%",
              border: "none",
              textAlign: "left",
              padding: "0.4rem",
              background: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              marginLeft: "auto",
            }}
            id={item.track.id}
          >
            {item.track.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Listbox;
