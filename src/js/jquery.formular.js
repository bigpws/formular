/**
 * 变量 紫色，数学函数蓝色
 * @todo vars
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        define(["jquery"], function (a0) {
            return (factory(a0));
        });
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
}(this, function ($) {
    var Formular = function(element, options) {
        this.element = $(element),
        this.defaults = {
            style:{
                'color': 'red',
                'fontSize': '12px',
                'textDecoration':'none',
            },
            mathematical_functions:[
                'sin','cos','tan','log'
            ],
            operators:[
                '+','-','*','/','%'
            ],
            varsFlag:'$',
        },
        this.listStatus = false;
        this.options = $.extend({}, this.defaults, options);
    };
    Formular.prototype = {
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
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        },
        _create: function() {
            this.element.css({
                'color': this.options.style.color,
                'fontSize': this.options.style.fontSize,
                'textDecoration': this.options.style.textDecoration
            });
            var _resultSelector = '<ul class=\'formular_result\'>';
            $.each(this.options.accessVars,function(index,value){
                _resultSelector = _resultSelector+'<li>'+value+'('+index+')'+'</li>';
            });
            _resultSelector = _resultSelector+'</ul>';
            this.element.after(_resultSelector);
            $('.formular_result li').hover(function(){
                $(this).addClass('blue');
            },function () {
                $(this).removeClass('blue');
            });
            this.element.bind('keyup',this.options,function(event){
                var options = event.data;
                $(options.explain_panel).html(event.target.value);
                if (event.keyCode ===52 &&event.key===options.varsFlag){
                    $('.formular_explain').html(event.currentTarget.html);
                    $('.formular_result').css('display','block');
                }
                //console.log(this.options,event)
            });
            // this.element.keydown(function(event){
            //     if (event.key==this.options.varsFlag){
            //         console.log('ok');
            //     }
            //     // console.log(event.target);
            // });
            return Formular;
        },
        // _registerKeyDownHandles:function(event){
        //     // var target = event.target;
        //     console.log(event);
        // },
    }
    $.fn.formular = function (options) {
        var formular = new Formular(this,options);
        return formular._create();
    };

}));