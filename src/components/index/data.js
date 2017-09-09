export default (location, time, fn) => {
    const url = '//forum.focus-dev.cn/api/house/ajaxGetNearbyProjects';

    $.ajax({
        url: url,
        type: 'GET',
        data: {
            lat: location.lat,
            lon: location.lng,
            maxMinutes: time
        },
        dataType: 'json',
        success (data) {
            fn(data.data);
        }
    });
};
