import React from "react";

export const Dropdown = (props) => {
  const dropdownChanged = (e) => {
    props.changed(e.target.value);
  };
  return (
    <div className="form-group row">
      <label>{props.label}</label>
      <select
        value={props.selectedValue}
        onChange={dropdownChanged}
        className="form-control col-sm-10"
        style={{
          marginLeft: "auto",
          display: "block",
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "4px",
          textAlign: "left",
          padding: "0.4rem",
          background: "#fff",
          cursor: "pointer",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <option key={0}>Select...</option>
        {props.options.map((item, idx) => (
          <option key={idx + 1} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
