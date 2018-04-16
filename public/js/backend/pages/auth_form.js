/* ========================================================================
 * register.js
 * Page/renders: page-register.html
 * Plugins used: parsley
 * ======================================================================== */

'use strict';

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            'parsley',
            'ladda'
        ], factory);
    } else {
        factory();
    }
}(function () {

    $(function () {
        // Register form function
        // ================================
        var $form   = $('form.auth-form');
        // On button submit click
        $form.on('click', 'button[type=submit]', function (e) {
            $form = $('form.auth-form');
            debugger;
            var $btn  = $form.find('button[type="submit"]'),
                data  = $form.serialize(),
                type  = $form.attr('method'),
                url   = $form.attr('action')
            ;
            
            var $this = $(this);

            // Run parsley validation
            if ($form.parsley().validate()) {
                // Disable submit button
                $this.prop('disabled', true);

                // start nprogress bar
                NProgress.start();

                var jxhr = $.ajax({
                    type: type,
                    url: url,
                    dataType: 'json',
                    data: data
                });

                // clear all password fields after sending request
                $form.find('input[type="password"]').val('');

                jxhr.done(function (data) {

                    NProgress.done();
                    $this.prop('disabled', false);

                    var bsalert = '';
                        bsalert += '<div class="alert alert-success animation animating flipInX">';
                        bsalert += '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>';
                        bsalert += '<h4 class="semibold mb5">Success!</h4>';
                        bsalert += '<p class="nm">'+data.text+'</p>';
                        bsalert += '</div>';
                    console.info(bsalert);
                    $form.find('.message-container').html(bsalert);
                    
                });

                jxhr.fail(function (data) {
                    $this.prop('disabled', false);
                    NProgress.done();

                    var bsalert = '', 
                        message;

                    // construct message base on status code
                    switch (data.status) {
                        case 404:
                            message = 'The requested file is not found!';
                        break;
                        case 500:
                            message = 'Internal server / script error!';
                        break;
                        case 422:
                            message = 'Validation error';
                        break;
                        default:
                            message = data.statusText;
                    }
                    // construct bootstrap alert with some css animation
                    bsalert += '<div class="alert alert-danger animation animating fadeIn">';
                    bsalert += '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>';
//                    bsalert += '<h4 class="semibold mb5">'+data.status+' error!</h4>';
                    bsalert += '<p class="nm">'+message+'</p>';
                    bsalert += '</div>';

                    // append to affected form
                    $form.find('.message-container.global').html(bsalert);
                    
                    Object.keys( data.responseJSON.errors ).forEach(
                        (key) => {
                            let fieldAlert = '';
                            fieldAlert += '<div class="notif text-danger animation animating fadeIn">';
                            fieldAlert += '<p class="nm">'+data.responseJSON.errors[key].join(' ')+'</p>';
                            fieldAlert += '</div>';
                            console.info('ERROR', data.responseJSON.errors[key].join(' '))
                            $form.find('.message-container').html(fieldAlert);
                        }
                    );
                });
                // you can do the ajax request here
                // this is for demo purpose only
//                setTimeout(function () {
//                    // done nprogress bar
//                    NProgress.done();
//
//                    // redirect user
//                    location.href = '/login';
//                }, 500);
            } else {
                // toggle animation
                $form
                    .removeClass('animation animating shake')
                    .addClass('animation animating shake')
                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).removeClass('animation animating shake');
                    });
            }
            // prevent default
            e.preventDefault();
        });
    });

}));