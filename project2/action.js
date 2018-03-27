//use .localstorage to store to-do list locally

$(document).ready(function() {

    $('.blueBtn').on('click', function() {
        $('.list')
            .append('<div class="toDoList">\n' +
                '    <div class="top">\n' +
                '        <div class="editbox" contenteditable="true">\n' +
                '            <span class="listLabel">Click to edit list title</span>\n' +
                '        </div>\n' +
                '\n' +
                '        <div class="iconsTop">\n' +
                '            <div>\n' +
                '                <i class="fas fa-plus"></i>\n' +
                '            </div>\n' +
                '\n' +
                '            <div class="deleteList">\n' +
                '                <i class="fas fa-trash-alt"></i>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</div>');
    });

    $(document.body).on('click', '.fa-plus', function(){
        $(this).closest('.toDoList')
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
                '                <div>\n' +
                '                    <i class="fas fa-minus"></i>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>');
    });

    $(document.body).on('click', '.fa-square', function() {
        $(this).toggleClass('fa-square fa-check-square');
    });

    $(document.body).on('click', '.fa-trash-alt', function() {
        $(this).closest('.toDoList').remove();
    });


    $(document.body).on('click', '.fa-minus', function() {
        $(this).closest('.bottom').remove();
    });
});