$(function () {
    $('#input').focus().select();
    auto(165)
    function auto(txt) {
        var url = 'http://api.k780.com/?app=weather.future&weaid=' + txt + '&appkey=25524&sign=7d04b1dbed8787c2efbb740ec936e0ce&format=json&jsoncallback=show';
        var jsonp = document.getElementById('jsonp');
        if (jsonp) {
            document.removeChild(jsonp)
        }
        var oScript = document.createElement('script');
        oScript.setAttribute('src', url)
        var head = document.getElementsByTagName('head');
        document.head.appendChild(oScript);
    }
    $('#btn').on('click', function () {
        event.preventDefault()
        var txt = $('#input').val();
        auto(txt)
    })
})