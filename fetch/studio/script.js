//TODO: Add Your Code Below
window.addEventListener("load", function () {

    const container = document.getElementById("container");


    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (response) {
            console.log(response);


            for (let i = 0; i < response.length; i++) {
                let astronaut = response[i];
                container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astronaut.firstName} ${astronaut.lastName} </h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li>Active: ${astronaut.active}</li>
                                <li>${astronaut.skills.join(", ")}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${astronaut.picture}>
                    </div> `


            }
        });
    });

});