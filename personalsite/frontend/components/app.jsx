import React from 'react';
import { Provider } from 'react-redux';
import {
	Route,
	Redirect,
	Switch,
	Link,
	HashRouter
} from 'react-router-dom';
import ProjectContainer from './projects/projects';
import FireworkContainer from './fireworks/fireworks';
const App = () => (
	<div className='main-div'>
    <ProjectContainer/>
    <FireworkContainer/>
	</div>
);

export default App;
