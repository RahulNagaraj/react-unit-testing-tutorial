import React from 'react';
import {render} from 'react-dom';
import './styles/main.scss';

const appRoot = document.getElementById('root');
const App = () => {
	render(
		<div className="h-screen w-screen shadow-2xl bg-gray-600">
			<h1>Hola!!</h1>
		</div>,
		appRoot
	);
};

App();
