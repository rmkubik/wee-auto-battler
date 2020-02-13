import React from "react";

const Grid = ({ width, height, tiles }) => {
  return (
    <div
      style={{
        gridTemplateColumns: "32px ".repeat(width),
        gridTemplateRows: "32px ".repeat(height),
        display: "grid",
        textAlign: "center",
        lineHeight: "32px"
      }}
    >
      {tiles.map(row => {
        return row.map(tile => {
          const { bg, icon, border } = tile;

          return (
            <div
              style={{
                backgroundColor: bg,
                border: `${border ? `2px ${border}` : "1px black"} solid`
              }}
            >
              {icon}
            </div>
          );
        });
      })}
    </div>
  );
};

export default Grid;
