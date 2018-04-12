//could have "enter" key make it so that you go to the next to-do list item
//"load list" button is not intuitive
//instead of "add list", use "create new list" verbiage

$(document).ready(function() {

    $('.save').on('click', function() {
       let htmlContents = document.getElementById('list').innerHTML;
       localStorage.setItem('myToDoList', JSON.stringify(htmlContents));
    });

    $('.load').on('click', function() {
        let savedHtml = localStorage.getItem('myToDoList');
        let parsedHtml = JSON.parse(savedHtml);
        $('#list').html(parsedHtml);
    });

    $('.add').on('click', function() {
        $('#list')
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
        $(this).toggleClass('fa-check-square fa-square');
        $(this).closest('.listItemContainer').toggleClass('itemComplete');
    });


    $(document.body).on('click', '.fa-check-square', function() {
        $(this).toggleClass('fa-check-square fa-square');
        $(this).closest('.listItemContainer').toggleClass('itemComplete');
    });


    $(document.body).on('click', '.fa-trash-alt', function() {
        $(this).closest('.toDoList').slideUp(200, function() {
            $(this).closest('.toDoList').remove();
        });
    });


    $(document.body).on('click', '.fa-minus', function() {
        $(this).closest('.bottom').slideUp(200, function() {
            $(this).closest('.bottom').remove();
        });
    });
});