console.log('App.js is running!');

var React = require('react');
var ReactDOM = require('react-dom');
var app= {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
}

var template = (
<div>
 <h1>{app.title}</h1>
 <p>{app.subtitle}</p>
 <ol>
   <li> Item one </li>
   <li> Item Two </li>
 </ol>
</div>
);

var user ={
	name: 'Andrew',
	age:26,
	location: 'philippines',
}


var templateTwo = (
	<div>
	<h1>{user.name}</h1>
	<p> Age: {user.age} </p>
	<p> Location: {user.location} </p>
	</div>
	);

var appRoot =document.getElementById('app');

ReactDOM.render(template, appRoot);