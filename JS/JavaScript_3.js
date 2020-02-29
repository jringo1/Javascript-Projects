function displayType(player) {
    var playerType = player.getAttribute("data-football_position");
    alert(playerType + " is the position" + player.innerHTML + " plays!");
}