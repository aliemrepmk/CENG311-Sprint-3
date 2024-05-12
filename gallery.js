lightGallery(document.getElementById('gallery-videojs-demo'), {
    plugins: [lgVideo],
    videojs: true,
    videojsOptions: {
        muted: true,
    },
    thumbnail: true,
    animateThumb: false,
    zoomFromOrigin: false,
    allowMediaOverlap: true,
    toggleThumb: true,
});

