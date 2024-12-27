import "./Todo.module.css";
import React, { useState } from "react";

const Todo: React.FC = () => {
	let [color, setColor] = useState("green");
	const onClickHandler = () => {
		color === "green" ? setColor("pink") : setColor("green");
	};
	return (
		<ul>
			<li onClick={onClickHandler} style={{ backgroundColor: color }}>
				One
			</li>
			<li onClick={onClickHandler} style={{ backgroundColor: color }}>
				Two
			</li>
			<li onClick={onClickHandler} style={{ backgroundColor: color }}>
				Three
			</li>
		</ul>
	);
};

export default Todo;
