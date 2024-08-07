import React, { useEffect, useState } from 'react';
import EventCard from '@/components/ui/Eventcard';
import Link from 'next/link'; 
import eventsData from '@/data/events.json';

const Home: React.FC = () => {

  return (
    <div className="container mx-auto p-4">
      <div className="flex align-left">
        <Link href="/#Home">
          <button className="px-7 py-2 mx-5 rounded-xl bg-white dark:bg-white dark:text-black text-black text-l font-bold" type="button">
            Back
          </button>
        </Link>
      </div>

      {eventsData.map(event => (
        <div key={event.id} className="mb-4" id={`event-${event.id}`}>
          <EventCard
            name={event.name}
            venue={event.venue}
            time={event.time}
            about={event.about}
            imageUrl={event.imageUrl}
            linkUrl={`/Events/posts/${event.id}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;