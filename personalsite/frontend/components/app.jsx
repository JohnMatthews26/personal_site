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
import SplashContainer from './splash/splash';
import AboutMe from './about_me/about_me';
import Skills from './skills/skills';
import Navbar from './navbar/navbar';
import MessageContainer from './contact/message_container';

const App = () => (
	<div className='main-div'>
		<div className="all-but-navbar-div">
			<SplashContainer/>
			<AboutMe/>
	    <ProjectContainer/>
			<Skills/>
			<MessageContainer/>
		</div>
		<Navbar/>
	</div>
);

export default App;
