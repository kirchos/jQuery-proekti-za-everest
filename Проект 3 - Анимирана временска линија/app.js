$().ready(function(){
    $(function(){
        $('.timeline').Timeline()
    })
    
    $('.timeline-2').Timeline({
        itemClass: 'box-item',
        dotsPosition: 'bottom',
        startItem: 'first'
      })
})
