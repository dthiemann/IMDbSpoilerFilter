var filterSpoilers = function() {
    var episodeCount = document.getElementsByClassName("toggle-episodes");
    for (var i = 0; i < episodeCount.length; i ++) {
        episodeCount.item(i).style.display = "none";
    }

    episodeCount = document.getElementsByClassName("filmo-episodes");
    for (var i = 0; i < episodeCount.length; i++) {
        episodeCount.item(i).style.display = "none";
    }
}

filterSpoilers();