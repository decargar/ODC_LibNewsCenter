// public/js/install.js
document.addEventListener('DOMContentLoaded', () => {
    const installButton = document.getElementById('installButton');
    const dismissButton = document.getElementById('dismissButton');
    const installBanner = document.getElementById('installBanner');

    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installBanner.style.display = 'block'; // Show install banner
    });

    installButton.addEventListener('click', async () => {
        installBanner.style.display = 'none'; // Hide install banner
        deferredPrompt.prompt(); // Show install prompt
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
        deferredPrompt = null;
    });

    dismissButton.addEventListener('click', () => {
        installBanner.style.display = 'none'; // Hide banner
    });
});
