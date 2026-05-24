document.getElementById('share-btn').addEventListener('click', (e) => {
    e.preventDefault();
    if (navigator.share) {
        navigator.share({
            title: 'Sushil Devworks',
            text: "Sushil Deveworks | Get your website instant! Visit Sushil's Link in Bio Page. \n",
            url: window.location.href
        }).then(() => {
            console.log('Shared successfully!');
        }).catch(console.error);
    } else {
        alert("Web Share API not supported in this browser.");
    }
});
