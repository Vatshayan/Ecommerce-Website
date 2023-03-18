;
if (CloudflareApps.matchPage(CloudflareApps.installs['9RpseGghkkgk'].URLPatterns)) {
    (function() {
        'use strict'
        var element
        var options = CloudflareApps.installs['9RpseGghkkgk'].options

        function updateElement() {
            element = CloudflareApps.createElement(options.location, element)
            for (var i = 0; i < options.buttons.length; i++) {
                var link = options.buttons[i].url
                var target = options.buttons[i].targetBlank
                var text = options.buttons[i].text
                var color = options.buttons[i].color
                var backgroundColor = options.buttons[i].backgroundColor
                var borderRadius = options.buttons[i].borderRadius
                var horizontalAlignment = options.horizontalAlignment
                var stacked = options.stacked
                element.setAttribute('app', 'button-builder')
                element.setAttribute('data-horizontal-alignment', horizontalAlignment)
                if (stacked) {
                    element.setAttribute('data-stacked', stacked)
                }
                var buttonContent = document.createElement('a')
                if (link) {
                    buttonContent.setAttribute('href', link)
                    if (target) {
                        buttonContent.setAttribute('target', '_blank')
                    }
                }
                buttonContent.innerHTML = text
                buttonContent.className = 'button-content'
                buttonContent.style.color = color
                buttonContent.style.backgroundColor = backgroundColor
                buttonContent.setAttribute('role', 'button')
                buttonContent.setAttribute('data-size', options.buttons[i].fontSize)
                element.appendChild(buttonContent)
                buttonContent.style.borderRadius = (buttonContent.clientHeight / 2 * borderRadius).toFixed(2) + 'px'
            }
        }
        window.CloudflareApps.installs['9RpseGghkkgk'].scope = {
            setOptions: function setOptions(nextOptions) {
                options = nextOptions
                updateElement()
            }
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateElement)
        } else {
            updateElement()
        }
    }())
};
(function() {
    try {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdIHsKCWRpc3BsYXk6IGZsZXg7CglmbGV4LWRpcmVjdGlvbjogcm93OwoJZmxleC1mbG93OiByb3cgd3JhcDsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdW2RhdGEtc3RhY2tlZD0idHJ1ZSJdIHsKCWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXVtkYXRhLWhvcml6b250YWwtYWxpZ25tZW50PSJsZWZ0Il0gewoJanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OwoJYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXVtkYXRhLWhvcml6b250YWwtYWxpZ25tZW50PSJjZW50ZXIiXSB7CglqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKCWFsaWduLWl0ZW1zOiBjZW50ZXI7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXVtkYXRhLWhvcml6b250YWwtYWxpZ25tZW50PSJyaWdodCJdIHsKCWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7CglhbGlnbi1pdGVtczogZmxleC1lbmQ7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXSBhLmJ1dHRvbi1jb250ZW50IHsKCWN1cnNvcjogcG9pbnRlcjsKCXBhZGRpbmc6IDEwcHggMjBweDsKCXBvc2l0aW9uOiByZWxhdGl2ZTsKCXRleHQtZGVjb3JhdGlvbjogbm9uZTsKCWxpbmUtaGVpZ2h0OiBub3JtYWw7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXSBhLmJ1dHRvbi1jb250ZW50IHsKCW1hcmdpbjogMTBweCAwIDEwcHggMTBweDsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdIGEuYnV0dG9uLWNvbnRlbnQ6Zmlyc3QtY2hpbGQgewoJbWFyZ2luLWxlZnQ6IDA7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXVtkYXRhLXN0YWNrZWQ9InRydWUiXSBhLmJ1dHRvbi1jb250ZW50IHsKCW1hcmdpbi1sZWZ0OiAwOwoJbWFyZ2luLXRvcDogNXB4OwoJbWFyZ2luLWJvdHRvbTogNXB4Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJ1dHRvbi1idWlsZGVyIl1bZGF0YS1zdGFja2VkPSJ0cnVlIl0gYS5idXR0b24tY29udGVudDpmaXJzdC1jaGlsZCB7CgltYXJnaW4tdG9wOiAxMHB4Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJ1dHRvbi1idWlsZGVyIl0gLmJ1dHRvbi1jb250ZW50W2hyZWZdIHsKCWN1cnNvcjogcG9pbnRlcjsKCXBvaW50ZXItZXZlbnRzOiBhbGw7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXSAgYS5idXR0b24tY29udGVudCwKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdICBhLmJ1dHRvbi1jb250ZW50OmxpbmssCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXSAgYS5idXR0b24tY29udGVudDpob3ZlciwKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdICBhLmJ1dHRvbi1jb250ZW50OmFjdGl2ZSB7Cgljb2xvcjogaW5oZXJpdDsKCW91dGxpbmU6IG5vbmU7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXSAgYS5idXR0b24tY29udGVudDpob3ZlciB7CglvcGFjaXR5OiAuODsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdIGEuYnV0dG9uLWNvbnRlbnRbZGF0YS1zaXplPSJzbWFsbCJdICB7Cglmb250LXNpemU6IDAuODVlbTsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciIgYS5idXR0b24tY29udGVudF1bZGF0YS1zaXplPSJub3JtYWwiXSB7Cglmb250LXNpemU6IDEuMDBlbTsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdIGEuYnV0dG9uLWNvbnRlbnRbZGF0YS1zaXplPSJsYXJnZSJdIHsKCWZvbnQtc2l6ZTogMS4yNWVtOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJ1dHRvbi1idWlsZGVyIl0gYS5idXR0b24tY29udGVudFtkYXRhLXNpemU9Imh1Z2UiXSB7Cglmb250LXNpemU6IDEuNTBlbTsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdIGFbZGF0YS1jb3JuZXJzPSJyYWRpdXMiXSB7Cglib3JkZXItcmFkaXVzOiAzcHg7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXSBhW2RhdGEtY29ybmVycz0icm91bmQiXSB7Cglib3JkZXItcmFkaXVzOiAxMDAwcHg7Cn0=';
        document.getElementsByTagName('head')[0].appendChild(link);
    } catch (e) {}
})();