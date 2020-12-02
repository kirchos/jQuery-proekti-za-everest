

$().ready(function () {
   

    $('.video-Gallery-Wrap').on('click', 'img', function () {

        const videoName = `video/${$(this).attr('alt')}.mp4`;
        const videoElement = $(`<div class='video-container'><video src='${videoName}' controls width="800" height="450" ></video><img src='times-circle-regular.svg' class='close'></div>`);

        $('body').prepend(videoElement)

        console.log(videoName)
        $('.close').on('click', function () {
            $('.video-container').remove()


        })
    })


})