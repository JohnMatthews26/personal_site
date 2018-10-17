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
import SplashContainer from './splash/splash';
import AboutMe from './about_me/about_me';
import Skills from './skills/skills';
const App = () => (
	<div className='main-div'>
		<SplashContainer/>
		<AboutMe/>
    <ProjectContainer/>
		<Skills/>
	</div>
);

export default App;
