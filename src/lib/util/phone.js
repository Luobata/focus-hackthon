export const IsPC = () => {
    var a = navigator.userAgent;
    var d = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var b = true;
    for (var c = 0; c < d.length; c++) {
        if (a.indexOf(d[c]) > 0) {
            b = false;
            break
        }
    }
    return b;
};

export const webglAvailable = () => {
    try {
        var a = document.createElement("canvas");
        return !! (window.WebGLRenderingContext && (a.getContext("webgl") || a.getContext("experimental-webgl")))
    } catch(b) {
        return false;
    }
};

export const isIos = () => {
    var a = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(a)) {
        return true
    } else {
        if (/android/.test(a)) {
            return false
        }
    }
    return false;
};

export const gt_ios = () => {
    if ((navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i))) {
        return Boolean(navigator.userAgent.match(/OS [4-9]_\d[_\d]* like Mac OS X/i))
    } else {
        return false
    }
};

export const browser = () => {
    var b = window.navigator.userAgent.toLowerCase();
    if (b.indexOf("msie") >= 0) {
        var a = b.match(/msie ([\d.]+)/)[1];
        return {
            type: "IE",
            version: a
        }
    } else {
        if (b.indexOf("firefox") >= 0) {
            var a = b.match(/firefox\/([\d.]+)/)[1];
            return {
                type: "Firefox",
                version: a
            }
        } else {
            if (b.indexOf("chrome") >= 0) {
                var a = b.match(/chrome\/([\d.]+)/)[1];
                return {
                    type: "Chrome",
                    version: a
                }
            } else {
                if (b.indexOf("opera") >= 0) {
                    var a = b.match(/opera.([\d.]+)/)[1];
                    return {
                        type: "Opera",
                        version: a
                    }
                } else {
                    if (b.indexOf("Safari") >= 0) {
                        var a = b.match(/version\/([\d.]+)/)[1];
                        return {
                            type: "Safari",
                            version: a
                        }
                    }
                }
            }
        }
    }
    return {
        type: "",
        version: ""
    }
};
