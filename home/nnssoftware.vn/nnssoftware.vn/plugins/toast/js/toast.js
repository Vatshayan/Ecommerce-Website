/**
 * @author Script47 (https://github.com/Script47/Toast)
 * @description Toast - A Bootstrap 4.2+ jQuery plugin for the toast component
 * @version 1.2.0
 **/
(function($) {
    const TOAST_CONTAINER_HTML = `<div id="toast-container" class="toast-container" aria-live="polite" aria-atomic="true"></div>`;

    $.toastDefaults = {
        position: 'bottom-right',
        dismissible: true,
        stackable: true,
        pauseDelayOnHover: true,
        style: {
            toast: 'toast',
            info: '',
            success: '',
            warning: '',
            error: '',
        }
    };

    $('body').on('hidden.bs.toast', '.toast', function() {
        $(this).remove();
    });

    let toastRunningCount = 1;

    function render(opts) {
        /** No container, create our own **/
        if (!$('#toast-container').length) {
            const position = ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'].includes($.toastDefaults.position) ? $.toastDefaults.position : 'top-right';

            $('body').prepend(TOAST_CONTAINER_HTML);
            $('#toast-container').addClass(position);
        }

        let toastContainer = $('#toast-container');
        let html = '';
        let classes = {
            header: {
                fg: '',
                bg: ''
            },
            subtitle: 'text-white',
            dismiss: 'text-white'
        };
        let id = opts.id || `toast-${toastRunningCount}`;
        let type = opts.type;
        let title = opts.title;
        let subtitle = opts.subtitle;
        let content = opts.content;
        let img = opts.img;
        let delayOrAutohide = opts.delay ? `data-delay="${opts.delay}"` : `data-autohide="false"`;
        let hideAfter = ``;
        let dismissible = $.toastDefaults.dismissible;
        let globalToastStyles = $.toastDefaults.style.toast;
        let paused = false;

        if (typeof opts.dismissible !== 'undefined') {
            dismissible = opts.dismissible;
        }

        switch (type) {
            case 'info':
                classes.header.bg = $.toastDefaults.style.info || 'bg-info';
                classes.header.fg = $.toastDefaults.style.info || 'text-white';
                break;

            case 'success':
                classes.header.bg = $.toastDefaults.style.success || 'bg-success';
                classes.header.fg = $.toastDefaults.style.info || 'text-white';
                break;

            case 'warning':
                classes.header.bg = $.toastDefaults.style.warning || 'bg-warning';
                classes.header.fg = $.toastDefaults.style.warning || 'text-white';
                break;

            case 'error':
                classes.header.bg = $.toastDefaults.style.error || 'bg-danger';
                classes.header.fg = $.toastDefaults.style.error || 'text-white';
                break;
        }

        if ($.toastDefaults.pauseDelayOnHover && opts.delay) {
            delayOrAutohide = `data-autohide="false"`;
            hideAfter = `data-hide-after="${Math.floor(Date.now() / 1000) + (opts.delay / 1000)}"`;
        }

        html = `<div id="${id}" class="toast ${globalToastStyles} mb-2" role="alert" aria-live="assertive" aria-atomic="true" ${delayOrAutohide} ${hideAfter}>`;
        html += `<div class="toast-header ${classes.header.bg} ${classes.header.fg}">`;

        if (img) {
            html += `<img src="${img.src}" class="mr-2 ${img.class || ''}" alt="${img.alt || 'Image'}">`;
        }

        html += `<strong class="me-auto">${title}</strong>`;

        if (subtitle) {
            html += `<small class="${classes.subtitle}">${subtitle}</small>`;
        }

        if (dismissible) {
            html += `<button type="button" data-bs-dismiss="toast" aria-label="Close" class="btn-close">
                    </button>`;
        }

        html += `</div>`;

        if (content) {
            html += `<div class="toast-body">
                        ${content}
                    </div>`;
        }

        html += `</div>`;

        if (!$.toastDefaults.stackable) {
            toastContainer.find('.toast').each(function() {
                $(this).remove();
            });

            toastContainer.append(html);
            toastContainer.find('.toast:last').toast('show');
        } else {
            toastContainer.append(html);
            toastContainer.find('.toast:last').toast('show');
        }

        if ($.toastDefaults.pauseDelayOnHover) {
            setTimeout(function() {
                if (!paused) {
                    $(`#${id}`).toast('hide');
                }
            }, opts.delay);

            $('body').on('mouseover', `#${id}`, function() {
                paused = true;
            });

            $(document).on('mouseleave', '#' + id, function() {
                const current = Math.floor(Date.now() / 1000),
                    future = parseInt($(this).data('hideAfter'));

                paused = false;

                if (current >= future) {
                    $(this).toast('hide');
                }
            });
        }

        toastRunningCount++;
    }

    /**
     * Show a snack
     * @param type
     * @param title
     * @param delay
     */
    $.snack = function(type, title, delay) {
        return render({
            type,
            title,
            delay
        });
    }

    /**
     * Show a toast
     * @param opts
     */
    $.toast = function(opts) {
        return render(opts);
    }
}(jQuery));