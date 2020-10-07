$().ready(function () {
    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType('application/json');
        rawFile.open('GET', 'js/lokacija.json', true);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4 && rawFile.status == '200') {
                callback(rawFile.responseText);
            }
        };
        rawFile.send(null);
    }

    $('.location').hide();

    readTextFile('js/lokacija.json', function (text) {
        const data = JSON.parse(text);
        const list = data.gradovi;


        // $('#gallery-container').on('click', 'img', function () {

        $("#tech").on('change', function () {
            const currentOpt = $('#tech').children().children("option:selected").val();
            if (currentOpt === 'bela-tehnika-magacin') {
                $('.location').hide();
                $('.location[grad="skopje').slideDown(800);
                $('.location[grad="bitola').slideDown(800);


            } else if (currentOpt === 'avto-delovi-magacin') {
                $('.location').hide();
                $('.gradovi-info').children().hide();
                $('.location[grad="gevgelija').slideDown(800);
                $('.location[grad="kocani').slideDown(800);
            } else if (currentOpt === "prikazi-se") {
                $('.location').hide();
                $('.gradovi-info').children().hide();
                $('.location[grad="gevgelija').slideDown(800);
                $('.location[grad="kocani').slideDown(800);
                $('.location[grad="skopje').slideDown(800);
                $('.location[grad="bitola').slideDown(800);
            } else {
                $('.location').hide();
            }

            if (currentOpt === 'prikazi-saloni') {
                $('.gradovi-info').children().hide();
                $('.location').show(800);

            } else if (currentOpt === 'g-shop') {
                $('.location').hide();
                $('.gradovi-info').children().hide();
                $('.location[grad="gevgelija').slideDown(800);
                $('.location[grad="skopje').slideDown(800);
                $('.location[grad="struga').slideDown(800);
                $('.location[grad="prilep').slideDown(800);
            } else if (currentOpt === 'b-texnika') {
                $('.location').hide();
                $('.location[grad="gevgelija').slideDown(800);
                $('.location[grad="gostivar').slideDown(800);
                $('.location[grad="struga').slideDown(800);
                $('.location[grad="ohrid').slideDown(800);
            } else if (currentOpt === 'a-delovi') {
                $('.location').hide();
                $('.location[grad="kocani').slideDown(800);
                $('.location[grad="skopje').slideDown(800);
                $('.location[grad="struga').slideDown(800);
                $('.location[grad="prilep').slideDown(800);
                $('.location[grad="bitola').slideDown(800);
            }
        })


        $('.location').click(function () {
            list.forEach((item, index, arr) => {
                const lokacija = $(this).attr('grad')
                const grad = item.grad;

                if (lokacija === grad) {
                    $('.gradovi-info div').hide();
                    const infoGrad = $(`<div><h3>${lokacija.toUpperCase()}</h3><p>${item.tip}</p><p>Адреса: ${item.adresa}</p><p>Telefon: ${item.telefon}</p></div>`);
                    $('.gradovi-info').append(infoGrad)

                }

                $(this).toggleClass('aktivno');


            });

        })

    });

});
