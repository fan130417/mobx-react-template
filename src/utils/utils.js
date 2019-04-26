//公共方法类
export default {
    setCookie: (c_name, value, expiredays) => {
        if (!value) {
            return;
        }
        // var exdate = new Date();
        var exdate = new Date().getTime();
        let ms = expiredays * 24 * 3600 * 1000;
        // exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = c_name + '=' + escape(value) +
            ((!expiredays) ? '' : ';expires=' + new Date(exdate + ms).toGMTString()) + ';path=/';
    },
    getCookie: (c_name) => {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(c_name + '=')
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1
                var c_end = document.cookie.indexOf(';', c_start)
                if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ''
    },
    delCookie: (c_name, cval) => {
        var exdate = new Date();
        exdate.setTime(exdate.getTime() - 10000);
        if (cval != null) {
            document.cookie = c_name + '=' + escape(cval) + ';expires=' + exdate.toGMTString() + ';path=/';
            return true;
        } else {
            return false;
        }

    },
}