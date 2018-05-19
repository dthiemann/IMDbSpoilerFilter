var filterSpoilers = function() {
    var episodeCount = document.getElementsByClassName("toggle-episodes");
    episodeCount.forEach(count => {
        count.style.display = "none";
    });
}

filterSpoilers();