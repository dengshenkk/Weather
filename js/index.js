/**
 * Created by gogeek on 2017/5/22.
 */


$(function () {

    $('#input').focus().select();
    var input = $('#input').val();
    var url = 'http://api.k780.com/?app=weather.future&weaid=' + input + '&appkey=25524&sign=7d04b1dbed8787c2efbb740ec936e0ce&format=json&jsoncallback=data';
    myAjax(url)


    $('#btn').on('click', function (event) {
        event.preventDefault()
        var input = $('#input').val()
        var url = 'http://api.k780.com/?app=weather.future&weaid=' + input + '&appkey=25524&sign=7d04b1dbed8787c2efbb740ec936e0ce&format=json&jsoncallback=data'
        $('#citynm')

        myAjax(url)
    });
    function myAjax(url) {
        $.ajax({
            type: 'get',
            url: url,
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback: 'data',
            success: function (data) {
                for (var k in data.result) {
                    $('#citynm').text(data.result[0].citynm);
                    $('#days').text(data.result[0].days);
                    $('#week').text(data.result[0].week);
                    $('#weather').text(data.result[0].weather);
                    $('#weather').text(data.result[0].weather);
                    $('#temp_low').text(data.result[0].temp_low);
                    $('#temp_high').text(data.result[0].temp_high);
                    $('#wind').text(data.result[0].wind);
                    $('#winp').text(data.result[0].winp);
                    $('#weather_icon img').attr('src', data.result[0].weather_icon)


                    $('#citynm2').text(data.result[1].citynm);
                    $('#days2').text(data.result[1].days);
                    $('#week2').text(data.result[1].week);
                    $('#weather2').text(data.result[1].weather);
                    $('#weather2').text(data.result[1].weather);
                    $('#temp_low2').text(data.result[1].temp_low);
                    $('#temp_high2').text(data.result[1].temp_high);
                    $('#wind2').text(data.result[1].wind);
                    $('#winp2').text(data.result[1].winp);
                    $('#weather_icon2 img').attr('src', data.result[1].weather_icon)

                    $('#citynm3').text(data.result[2].citynm);
                    $('#days3').text(data.result[2].days);
                    $('#week3').text(data.result[2].week);
                    $('#weather3').text(data.result[2].weather);
                    $('#weather').text(data.result[2].weather);
                    $('#temp_low3').text(data.result[2].temp_low);
                    $('#temp_high3').text(data.result[2].temp_high);
                    $('#wind3').text(data.result[2].wind);
                    $('#winp').text(data.result[2].winp);
                    $('#weather_icon3 img').attr('src', data.result[2].weather_icon)


                    $('#citynm4').text(data.result[3].citynm);
                    $('#days4').text(data.result[3].days);
                    $('#week4').text(data.result[3].week);
                    $('#weather4').text(data.result[3].weather);
                    $('#weather4').text(data.result[3].weather);
                    $('#temp_low4').text(data.result[3].temp_low);
                    $('#temp_high4').text(data.result[3].temp_high);
                    $('#wind4').text(data.result[3].wind);
                    $('#winp4').text(data.result[3].winp);
                    $('#weather_icon4 img').attr('src', data.result[3].weather_icon)
                    5

                    $('#citynm5').text(data.result[4].citynm);
                    $('#days5').text(data.result[4].days);
                    $('#week5').text(data.result[4].week);
                    $('#weather5').text(data.result[4].weather);
                    $('#weather5').text(data.result[4].weather);
                    $('#temp_low5').text(data.result[4].temp_low);
                    $('#temp_high5').text(data.result[4].temp_high);
                    $('#wind5').text(data.result[4].wind);
                    $('#winp5').text(data.result[4].winp);
                    $('#weather_icon5 img').attr('src', data.result[4].weather_icon)


                    $('#citynm6').text(data.result[5].citynm);
                    $('#days6').text(data.result[5].days);
                    $('#week6').text(data.result[5].week);
                    $('#weather6').text(data.result[5].weather);
                    $('#weather6').text(data.result[5].weather);
                    $('#temp_low6').text(data.result[5].temp_low);
                    $('#temp_high6').text(data.result[5].temp_high);
                    $('#wind6').text(data.result[5].wind);
                    $('#winp6').text(data.result[5].winp);
                    $('#weather_icon6 img').attr('src', data.result[5].weather_icon)

                    // console.log(data.result[6].week);
                    $('#citynm7').text(data.result[6].citynm);
                    $('#days7').text(data.result[6].days);
                    $('#week7').text(data.result[6].week);
                    $('#weather7').text(data.result[6].weather);
                    $('#weather7').text(data.result[6].weather);
                    $('#temp_low7').text(data.result[6].temp_low);
                    $('#temp_high7').text(data.result[6].temp_high);
                    $('#wind7').text(data.result[6].wind);
                    $('#winp7').text(data.result[6].winp);
                    $('#weather_icon7 img').attr('src', data.result[6].weather_icon)


                }
            },
            error: function (msg) {
                console.log(msg.readyState + '/' + msg.status);
            }
        });
    }
})