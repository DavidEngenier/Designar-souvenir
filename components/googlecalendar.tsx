// @refresh reset
"use client"
import { signIn, signOut, SessionProvider, useSession } from 'next-auth/react';
import { useState } from 'react';

const CalendarForm = () => {
  const { data: session, status } = useSession();
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
   
    const res = await fetch('/api/calendar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ start, end }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      {!session && (
        <>
          <button onClick={() => signIn('google')}>Sign in with Google</button>
        </>
      )}
      {session && (
        <>
          <button onClick={() => signOut()}>Sign out</button>
          <form onSubmit={handleSubmit}>
            <input
              type="datetime-local"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              required
            />
            <input
              type="datetime-local"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              required
            />
            <button type="submit">Schedule</button>
          </form>
        </>
      )}
    </div>
  );
};

export default CalendarForm;
