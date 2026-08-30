const CACHE = 'kat-rpg-v7';
const CORE  = ['./index.html', './icon-192.png', './icon-512.png', './manifest.json'];

// â”€â”€ Install / Activate / Fetch â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      // best-effort: one missing asset must not fail the whole install
      .then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Network-first for same-origin GETs: a reload always gets the latest code when
// online. Only fall back to cache when the network actually fails (offline),
// and for a failed navigation fall back to the cached shell so the app still
// opens rather than showing a blank screen.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request).then(resp => {
      if (resp && resp.ok) {
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone)).catch(() => {});
      }
      return resp;
    }).catch(async () => {
      const hit = await caches.match(e.request);
      if (hit) return hit;
      if (e.request.mode === 'navigate') {
        return (await caches.match('./index.html')) || Response.error();
      }
      return Response.error();
    })
  );
});

// â”€â”€ Periodic Background Sync â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

self.addEventListener('periodicsync', e => {
  if (e.tag === 'kat-rpg-reminder') {
    e.waitUntil(checkAndNotify());
  }
});

async function checkAndNotify() {
  const state = await readReminderState();
  if (!state || !state.lastDate) return;

  const { lastDate, nagAfterDays, pauseUntil, offDays, customReminders, name, sessions } = state;

  // Mirror isPaused()
  const todayStr = localDateStr(new Date());
  if (pauseUntil && todayStr <= pauseUntil) return;

  // Mirror effectiveGapDays()
  const gap = Math.floor((Date.now() - new Date(lastDate)) / 86400000);
  const offBetween = (offDays || []).filter(d => d > lastDate && d < todayStr).length;
  const effectiveGap = gap - offBetween;

  if (effectiveGap < (nagAfterDays || 2)) return;

  // Pick message â€” customReminders have the hero name baked in already
  const fallback = [
    `${name} hasn't trained in a while. The adventure is waiting.`,
    `It's been a few days, ${name}. Your body remembers even when your schedule doesn't.`,
    `${name} keeps meaning to train. Today could be the day.`,
  ];
  const pool = (customReminders && customReminders.length) ? customReminders : fallback;
  const msg  = pool[(sessions || 0) % pool.length];

  await self.registration.showNotification('Reps & Relics', {
    body:     msg,
    icon:     './icon-192.png',
    badge:    './icon-192.png',
    tag:      'kat-rpg-reminder',
    renotify: false,
  });
}

function localDateStr(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function readReminderState() {
  return new Promise(resolve => {
    const req = indexedDB.open('kat-rpg-sync', 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore('state');
    req.onsuccess = e => {
      const tx  = e.target.result.transaction('state', 'readonly');
      const get = tx.objectStore('state').get('reminder');
      get.onsuccess = () => resolve(get.result || null);
      get.onerror   = () => resolve(null);
    };
    req.onerror = () => resolve(null);
  });
}

// â”€â”€ Push (server-sent, future use) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  e.waitUntil(
    self.registration.showNotification(data.title || 'Reps & Relics', {
      body:    data.body || 'Your hero awaits.',
      icon:    './icon-192.png',
      badge:   './icon-192.png',
      tag:     'kat-rpg-reminder',
      renotify: false,
    })
  );
});

// â”€â”€ Notification click â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      const existing = list.find(c => c.url.includes('index.html') && 'focus' in c);
      if (existing) return existing.focus();
      return clients.openWindow('./index.html');
    })
  );
});
