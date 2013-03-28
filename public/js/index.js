function getSelected() {
    return $('input:checkbox:checked.item-group').map(function () {
        return this.value;
    }).get().join(',');
}
$(document).ready(function () {
    $('.app-bar').hide();
    $('.charms').hide();
    $('#done').click(function () {
        var values = getSelected();
        $('#itemopt').attr('action', '/item/done').submit();
    });
    $('#undone').click(function () {
        var values = getSelected();
        $('#itemopt').attr('action', '/item/undone').submit();
    });
    $('#remove').click(function () {
        $('#message').fadeIn();
    });
    $('#delete').click(function () {
        var values = getSelected();
        $('#itemopt').attr('action', '/item/del').submit();
    });
    $('#cancel').click(function () {
        $('#message').fadeOut();
    });
    $('#github').click(function () {
        window.open('https://github.com/johnsmith17th/TodoExpress', '_blank');
    });
    $('#back').click(function () {
        $('#detail').fadeOut();
    });
    $('.item-group').bind('click', function () {
        var values = getSelected();
        $('.item-selected').val(values);
        if (values) {
            $('#detail').fadeOut();
            $('#options').fadeIn();            
        }
        else $('#options').fadeOut();
    });
    $('.item-what').bind('click', function () {
        var id = $(this).attr('id').substring(1);
        $.get('/item', { id: id }, function (data) {
            if (data) {
                $('#what').html(data.what);
                $('#status').html(data.done ? 'Done (' + moment(data.dont).fromNow() + ')' : 'Undone');
                $('#post').html(moment(data.time).fromNow());
                $('#detail').fadeIn();
            }
        });
    });
});