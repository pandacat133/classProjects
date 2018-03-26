//use .localstorage to store to-do list locally

function createAList() {
    $('.list')
        .append('<div class="toDoList">\n' +
            '    <div class="top">\n' +
            '        <div class="editbox" contenteditable="true">\n' +
            '            <span class="listLabel">Click to edit list title</span>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="iconsTop">\n' +
            '            <div onclick="addToDoItem(this)">\n' +
            '                <i class="fas fa-plus"></i>\n' +
            '            </div>\n' +
            '\n' +
            '            <div class="deleteList" onclick="deleteAList(this)">\n' +
            '                <i class="fas fa-trash-alt"></i>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>');
}

function addToDoItem() {
    $('.toDoList')
        .append('<div class="bottom">\n' +
            '        <div class="listItemContainer">\n' +
            '            <div class="bottomLeft">\n' +
            '                <div class="square">\n' +
            '                    <i class="far fa-square"></i>\n' +
            '                </div>\n' +
            '\n' +
            '                <div class="editbox" contenteditable="true">\n' +
            '                    <span class="listItem">Click to edit list item</span>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '\n' +
            '            <div class="iconsBottom">\n' +
            '                <div onclick="deleteAItem(this)">\n' +
            '                    <i class="fas fa-minus"></i>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>');
}

function deleteAList() {
    $('.toDoList').remove();
}

function deleteAItem() {
    $('.listItemContainer').remove();
}


// $(document).ready(function() {
//
//     $('.fa-square').on('click', function() {
//         $(this).toggleClass('fa-square fa-check-square');
//     });
//
// });