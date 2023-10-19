import React from 'react';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

const featuredEvents = getFeaturedEvents();

function HomePage() {
	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
}

export default HomePage;
