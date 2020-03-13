if('ServiceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('registered'))
    .catch((err) => console.log('not registered'))
}