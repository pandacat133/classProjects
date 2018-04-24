//use content editable true so you can make the player names change-able
//put a remove button next to each player that will remove every input that ties to that player
//let them select "champion", "pro", "men", "women" and then populate off of that

let numPlayers = 4;
let allCourses;
let selectCourse;
let numberOfHoles = 18;

loadDoc();

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            allCourses = JSON.parse(this.responseText);
            console.log(allCourses);


            let selCourses = allCourses.courses;
            for(let i = 0; i < selCourses.length; i++) {
                $('.coursesDropdown').append('<option value="'+ selCourses[i].id +'">'+ selCourses[i].name +'</option>');
            }
        }
    };
    xhttp.open("GET", "https://uxcobra.com/golfapi/courses.txt", true);
    xhttp.send();
}

function getCourse(courseId) {
    $('.teeDropdown').html('');
    console.log(courseId);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            selectCourse = JSON.parse(this.responseText);
            console.log(selectCourse);

            let holeOneTees = selectCourse.data.holes[0].teeBoxes;
            for(let i = 0; i < holeOneTees.length; i++) {
                $('.teeDropdown').append('<option value="'+ i +'">'+ holeOneTees[i].teeType +'</option>');
            }

        }
    };

    xhttp.open('GET', 'https://uxcobra.com/golfapi/course' + courseId + '.txt', true);
    xhttp.send();
}

function setTee(teeIndex) {
    $('.right').html('');

    let myCourse = selectCourse.data.holes;
    for(let i = 0; i < myCourse.length; i++){

        let myTee = myCourse[i].teeBoxes[teeIndex];

        $('.right').append('<div id="c'+ i +'" class="column">\n' +
            '                <div class="cHeader">\n' +
            '                    <div class="holes">\n' + (i+1) +
            '                    </div>\n' +
            '                    <div class="yards">\n' + myTee.yards +
            '                    </div>\n' +
            '                    <div class="hcp">\n' + myTee.hcp +
            '                    </div>\n' +
            '                    <div class="par horizontalSpacer">\n' + myTee.par +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>');
    }

    fillCard();
}

function fillCard() {
    for(let p = 1; p <= numPlayers; p++) {
        $('.left').append('<div class="playerLabel playa'+ p +'"><span onclick="deletePlayer('+ p +')" class="fa fa-trash"></span>Player'+ p +'</div>');

        let myHoles = selectCourse.data.holes;
        for(let h = 0; h < myHoles.length; h++) {
            $('#c' + h).append('<input onkeyup="addScore(p)" class="holeInput playa'+ p +'" id="p'+ p +' h'+ h +'" type="text">');
        }
    }
}

function addScore(myValue) {
    let tempScore = 0;
    for(let i = 1; i <= numberOfHoles; i++) {
        let inValue = Number($('#p' + myValue + 'h' + i).val());
        tempScore += inValue;
    }

    $('.totalP' + myValue).html(tempScore);
}

function deletePlayer(incPlayer) {
    $('.playa' + incPlayer).remove();
}