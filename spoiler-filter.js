var filterSpoilers = function() {
    var episodeCount = document.getElementsByClassName("toggle-episodes");
    console.log("Episode count: ", episodeCount);
    for (var i = 0; i < episodeCount.length; i ++) {
        episodeCount.item(i).style.display = "none";
    }
}

filterSpoilers();