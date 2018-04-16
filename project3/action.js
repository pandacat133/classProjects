//use content editable true so you can make the player names change-able
//put a remove button next to each player that will remove every input that ties to that player
//let them select "champion", "pro", "men", "women" and then populate off of that

let numPlayers = 4;
let course;

loadDoc();

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            course = JSON.parse(this.responseText);
            console.log(course);


            let selTees = course.holes[0].tees;
            for(let i = 0; i < selTees.length; i++) {
                $('#teeSelect').append('<option value="'+ i +'">'+ selTees[i].teeName +'</option>');
            }

            //createCard();
        }
    };
    xhttp.open("GET", "holes.txt", true);
    xhttp.send();
}

function createCard() {
    for(let i = 0; i < course.holes.length; i++) {
        $('.right').append('<div id="col'+ i +'" class="column">\n' +
        '                       <div class="cHeader">\n' +
            '                       \n' + course.holes[i].name +
            '                   </div>\n' +
        '                   </div>');
    }

    fillCard();
}

function fillCard() {
    for(let p = 1; p <= numPlayers; p++) {
        $('.left').append('<div class="playerLabel">\n' +
            '                Player\n' + p +
            '            </div>');

        for(let h = 0; h < course.holes.length; h++) {
            $('#col'+ h).append('<input class="holeInput" id="p'+ p +' h'+ h +'" type="text">');
        }
    }
}