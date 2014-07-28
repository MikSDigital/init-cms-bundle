function createInitCmsMessageBox(status, message) {
    var messageHtml = '<div class="col-sm-12 col-xs-12 col-md-offset-2 col-md-10 alert alert-' + status + '"><a class="close" data-dismiss="alert" href="#">×</a>' + message + '</div>';

    jQuery('.notice-block').html(messageHtml);
}

function trim(str) {
    str = str.replace(/^\s+/, '');
    for (var i = str.length - 1; i >= 0; i--) {
        if (/\S/.test(str.charAt(i))) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return str;
}

function uploadError(xhr) {
    alert(xhr.error);
}

(function ($) {

    var noticeBlock = $('.notice-block');

    noticeBlock.on('DOMNodeInserted', function () {
        $(this).fadeIn().delay('3000').fadeOut(500);
    });

    noticeBlock.each(function (k, e) {
        if (trim($(e).html()) != '') {
            $(e).fadeIn().delay('3000').fadeOut(500);
        }
    });

    // Restore value from hidden input
    $('input[type=hidden]', '.date').each(function () {
        if ($(this).val()) {
            $(this).parent().datetimepicker('setValue');
        }
    });

    $(document).on('show.bs.modal', '.modal', function () {
        var modalBody = $('.modal .modal-body');
        modalBody.css('overflow-y', 'auto');
        modalBody.css('max-height', $(window).height() * 0.7);
    });


    // Restore value from hidden input
    $('input[type=hidden]', '.date').each(function () {
        if ($(this).val()) {
            $(this).parent().datetimepicker('setValue');
        }
    });


    // handle the #toggle click event
    $("#toggleNav").on("click", function () {
        // apply/remove the active class to the row-offcanvas element
        $(".row-offcanvas").toggleClass("active");
    });

    $('[data-provider="datepicker"]').datetimepicker();

    $('[data-provider="datetimepicker"]').datetimepicker();

    $('[data-provider="timepicker"]').datetimepicker();

    // Restore value from hidden input
    $('input[type=hidden]', '.date').each(function () {
        if ($(this).val()) {

            $(this).parent().datetimepicker('setValue');
        }
    });

})(jQuery);

$.fn.modal.Constructor.prototype.enforceFocus = function () {
    modal_this = this
    $(document).on('focusin.modal', function (e) {
        if (modal_this.$element[0] !== e.target && !modal_this.$element.has(e.target).length
            // add whatever conditions you need here:
            && !$(e.target.parentNode).hasClass('cke_dialog_ui_input_select') && !$(e.target.parentNode).hasClass('cke_dialog_ui_input_text')) {
            modal_this.$element.focus()
        }
    })
};