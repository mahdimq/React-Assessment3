import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFilmFromAPI } from './actions/films';
import Sublist from './Sublist';

function Film() {
	const { id } = useParams(); //<-- id for dynamic routing
	const film = useSelector((st) => st.films[id]); //<-- gets reducer from redux store
	const planetState = useSelector((st) => st.planets); //<-- gets reducer from redux store
	const characterState = useSelector((st) => st.people); //<-- gets reducer from redux store
	const dispatch = useDispatch(); //<-- dispatch action from redux store
	const missing = !film;

	useEffect(
		function () {
			// if film is not available, get from api by invoking dispatch
			if (missing) {
				dispatch(getFilmFromAPI(id));
			}
		},
		[missing, id, dispatch]
	);

	if (missing) return <h1 className='mt-5'>loading...</h1>;

	// Fill data retrieved from API using "id" and save it to variable
	const planets = film.planets.map((pid) => ({
		id: pid,
		url: `/planets/${pid}`,
		display: planetState[pid] ? planetState[pid].name : 'Unknown'
	}));

	// Fill data retrieved from API using "id" and save it to variable
	const characters = film.characters.map((cid) => ({
		id: cid,
		url: `/people/${cid}`,
		display: characterState[cid] ? characterState[cid].name : 'Unknown'
	}));

	return (
		<div>
			<h1 className='mt-3 mb-3'>
				{film.name}
				<small className='text-muted float-right'>{id}</small>
			</h1>

			<p className='lead'>{film.openingCrawl}</p>

			<p>
				<b>Director: </b>
				{film.director}
			</p>

			<Sublist title='Planets' items={planets} />
			<Sublist title='People' items={characters} />
		</div>
	);
}

export default Film;
