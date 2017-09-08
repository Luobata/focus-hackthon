import { domainMp, domainLogin } from 'PROXY/config';
import request from 'LIB/request';

module.exports = (params, fn) => {
    const url = domainMp + '/admin/info';

    request.ajax({
        url: url,
        method: 'GET',
        withCredentials: true,
        complete (data) {
            if (data.code === '1') {
                window.location.href = domainLogin + '/tologin?ru=' + encodeURI(window.location.href);
            } else {
                fn(data);
            }
        }
    });
};
