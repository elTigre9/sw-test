import React, { useRef } from 'react';
import schedule from 'node-schedule';

const NotificationsOnly = () => {

  const permissionsRef = useRef('');
  
  const enableNotifs = () => {
    console.log('notifs!');
    if(!window.Notification) return;
  
    Notification.requestPermission().then(showNotification);
  }
  
  const showNotification = (permission: string) => {
    permissionsRef.current = permission;
    if(permission !== 'granted') return;
  
    const notification = new Notification('Subscribed!', {
      body: 'Thanks for subscribing!'
    });
  } 
  
  const notificationSchedule = () => {
    if(permissionsRef.current !== 'granted') return;
    console.log('scheduling job!');
    const job = schedule.scheduleJob('*/1 * * * *', () => {
      const notification = new Notification('Doing it!', {
        body: 'And doing it, and doing it, well.'
      });
    })
  }

  return (
    <section>
      <button onClick={enableNotifs}>Show Notifs</button>
      <button onClick={notificationSchedule}>Show Notifs</button>
    </section>
  );
}

export default NotificationsOnly;