// Write your JavaScript code here.
// Remember to pay attention to page loading!
 

window.addEventListener("load", function() {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = this.document.getElementById("landing");
    const abortButton = this.document.getElementById("missionAbort");
    const upButton = this.document.getElementById("up");
    const downButton = this.document.getElementById("down");
    const rightButton = this.document.getElementById("right");
    const leftButton = this.document.getElementById("left");

    takeoffButton.addEventListener("click", event => {
    
        let takeoffConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(takeoffConfirm) {
            this.document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            this.document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            this.document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }
    })

    landingButton.addEventListener("click", event => {
        this.window.alert("The shuttle is landing, landing gear engaged")
        this.document.getElementById("shuttleBackground").style.backgroundColor = "green";
        this.document.getElementById("flightStatus").innerHTML = "Shuttle hss landed.";
        this.document.getElementById("spaceShuttleHeight").innerHTML = 0;    
    })

    abortButton.addEventListener("click", event => {
        let abortConfirm = window.confirm("Confirm that you want to abort the mission.");
        
        if(abortConfirm) {
            this.document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            this.document.getElementById("spaceShuttleHeight").innerHTML = 0;
            this.document.getElementById("shuttleBackground").style.backgroundColor = "green";
        }
    });


})


 