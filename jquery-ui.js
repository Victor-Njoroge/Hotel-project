// @ts-nocheck
(function ($, undefined)
{
     
    var uuid = 0
    reniqueId = /^ui-id-\d+$/;
    $.ui = $.ui || {};
    if ($.ui.version)
    {
        return;
    }
    $.extend($.ui, {
        version: "1.9.2",
        
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    $.fn.extend({
        _focus: $.fn.focus,
        focus: function (delay, fn){
            return typeof delay === "number" ?
                this.each(function ()
                {
                    var elem = this;
                    setTimeout(function ()
                    {
                        $(elem).focus();
                        if (fn)
                        {
                            fn.call(elem);
                        }
                    }, delay);
                }) :
                this._focus.apply(this, arguments);
        },
        scrollParent: function () {
            var scrollParent;
            if (($.ui.ie && (/(static|relative)/).test(this.css('position'))) || (/absolute/).test(this.css('position'))){
                scrollParent = this.parents().filter(function ()
                {
                    return (/(relative|absolute|fixed)/).test($.css(this, 'position')) && (/(auto|scroll)/).test($.css(this, 'overflow') + $.css(this, 'overflow-y') + $.css(this, 'overflow-x'));
                }).eq(0);
            } else{
                scrollParent = this.parents().filter(function ()
                {
                    return (/(relative|absolute|fixed)/).test($.css(this, 'position')) && (/(auto|scroll)/).test($.css(this, 'overflow') + $.css(this, 'overflow-y') + $.css(this, 'overflow-x'));
                }).eq(0);
            }
            return (/fixed/).test(this.css('position')) || !scrollParent.length ? $(document) : scrollParent;
        },
        zIndex: function (zIndex)
        {
            if (zIndex !== undefined)
            {
                return this.css("zIndex", zIndex);
            }
            if (this.length)
            {
                var elem = $
            }
        }
    })
})
