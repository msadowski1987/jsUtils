'use strict'

var vsUtils = {

	// --- string helpers
	// --- nowe
        
    stringIsEmpty: function (str) {

        return (!str || 0 === str.length);
    },

    stringIsBlank: function (str) {

        return (!str || /^\s*$/.test(str));
    },

    stringIsBlankOrEmpty: function (str) {

        return utils.stringIsBlank(str) || utils.stringIsEmpty(str);
    },

    stringReplaceAll: function(str, src, dst) {

        while (str.indexOf(src) !== -1) {
            str = str.replace(src, dst);
        }
        return str;
    },

    // w pierwszym parametrze podac string, kolejne parametry to wartosci ktore wstawiac pod {0}, {1} itp
    // np utils.stringFormat('cos {0} i to {1}', 'tam', 'tu');
    stringFormat: function () {

        var returnStr = '';
        var args = [];

        try {

            // w pierwszym parametrze jest string do podmiany
            var str = arguments[0];

            // kolejne parametry to stringi ktore zamieniaja kolejno {0}, {1} itp
            for (var i = 1; i < arguments.length; i++) {

                args[i - 1] = arguments[i].toString();
            }

            // sama podmiana
            returnStr = str.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined'
                  ? args[number]
                  : match
                ;
            });
        }
        catch (err) {

            console.log('string format error');
            console.log(err);
        }

        return returnStr;
    },
}