//use .localstorage to store to-do list locally

function createAList() {
    $('.list')
        .append('<div class="toDoList editbox" contenteditable="true"> ' +
                '<span class="listLabel">Click to edit list title</span> ' +
                '</div>');
}

function addToDoItem() {
    $('.toDoList')
        .append('<div class="listItemContainer editbox" contenteditable="true">\n' +
                '<span class="listItem">Click to edit list item</span>\n' +
                '</div>');
}

function deleteAList() {
    $('.toDoList').remove($(this));
}


// $(document).ready(function() {
//
//     $('.fa-square').on('click', function() {
//         $(this).toggleClass('fa-square fa-check-square');
//     });
//
// });