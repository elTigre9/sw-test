import React from 'react';

const PushManager = () => {
  const subscribe = async () => {
    const sw = await navigator.serviceWorker.ready;
    const push = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'TODO'
    })
  }
  return (
    <section>
      <button>Subscribe</button>
    </section>
  );
}