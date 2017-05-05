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
    var key_code;
    var Formular = function(element, options) {
        this.element = element,
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
                vars_flag:'$',
            },
            this.options = $.extend({}, this.defaults, options)
    };
    Formular.prototype = {
        init: function() {
            this.element.css({
                'color': this.options.style.color,
                'fontSize': this.options.style.fontSize,
                'textDecoration': this.options.style.textDecoration
            });
            this.element.keyup=this.onKeyUp(e);
            return Formular;
        },
        onKeyUp:function(e){
            if (e.target.value==='$'){
                console.log('catch it');
            }
            return Formular;
        }
    }
    $.fn.formular = function (options) {
        var formular = new Formular(this,options);
        return formular.init();
    };

}));