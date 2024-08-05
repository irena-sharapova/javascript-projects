function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");
    const abortButton = document.getElementById("abortMission")

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });

    missionAbort.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
     });

     abortButton.addEventListener('click', function() {
        const userConfirmed = confirm('Are you sure you want to abort the mission?');

        if (userConfirmed) {
            statusElement.textContent = 'Mission aborted! Space shuttle returning home.';
        } 
    });
}

window.addEventListener("load", init);
