//<div class="editbox" contenteditable=true></div>
//use .localstorage to store to-do list locally

function createAList() {

    let listName = $('.createInput').val();

    $('.createdLists').append('<div>'+ listName + '</div>');

    $('.createInput').val('');
}