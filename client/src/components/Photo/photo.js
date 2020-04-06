import React, { Component } from 'react';
import './photo.css'
import hamza from './hamza.png'

const photo = () => {
	return (
	<div>
 		<img className="profile" src={hamza}/>
	</div>

	);
}

export default photo;