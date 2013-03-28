function getSelected() {
    return $('input:checkbox:checked.item-group').map(function () {
        return this.value;
    }).get().join(',');
}
$(document).ready(function () {
    $('.app-bar').hide();
    $('#done').click(function () {
        var values = getSelected();
        $('#itemopt').attr('action', '/item/done').submit();
    });
    $('#undone').click(function () {
        var values = getSelected();
        $('#itemopt').attr('action', '/item/undone').submit();
    });
    $('#remove').click(function () {
        $('#message').show();
    });
    $('#delete').click(function () {
        var values = getSelected();
        $('#itemopt').attr('action', '/item/del').submit();
    });
    $('#cancel').click(function () {
        $('#message').hide();
    });
    $('#github').click(function () {
        window.open('https://github.com/johnsmith17th/TodoExpress', '_blank');
    });
    $('.item-group').bind('click', function () {
        var values = getSelected();
        $('.item-selected').val(values);
        if (values) $('#options').show();
        else $('#options').hide();
    });
});