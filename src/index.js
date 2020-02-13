import React from "react";
import ReactDOM from "react-dom";
import { initMatrix } from "functional-game-utils";

import Grid from "./components/Grid";

const tiles = initMatrix({ width: 10, height: 10 });

const root = document.getElementById("root");

ReactDOM.render(<Grid height={10} width={10} tiles={tiles} />, root);
