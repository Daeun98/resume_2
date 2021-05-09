// 가로스크롤
$('html, body').mousewheel( function(e, delta){
    this.scrollLeft -= ( delta * 80 );
    e.preventDefault();
});

//audio
var bgm = document.getElementById('bgm');
$('.article1 .audio .play').on('click', function(){
    bgm.play();
    $(this).next().addClass('on')
    $(this).removeClass('on')
});
$('.article1 .audio .pause').on('click', function(){
    bgm.pause();
    $(this).prev().addClass('on')
    $(this).removeClass('on')
});



//ME
$('.article2').on('mousewheel', function(){
        var osLeft = $(this).offset().left
        if (osLeft==1920) {
            $('.article2 .title').addClass('on')
            $('.article2 .chart-container').addClass('on')
        }
})

//chart
var mychart = $('.line-chart');
var myLineChart = new Chart(mychart, {
    type:'line',
    data:{
        labels:[
            '', 'HTML5', '', 'CSS3', '', 'JavaScript', '', 'JQuery', '', 'React', '', 'Illustrator', '', 'Photoshop & InDesign', '', ''
        ],
        datasets:[
            {
                label:'skill',
                data:[40,90,50,80,50,60,50,70,50,60,50,90,50,80,50,75],
                backgroundColor:'#ffce09',
                lineTension:0.5,
                fill:true,
                pointRadius:0,
                // pointBorderColor:'black',
                // pointBackgroundColor:'rgba(200,200,0,0.5)',
            }
        ]
    },
    options:{
        maintainAspectRatio:false
    }
}); 


// portfolio
$('.article3 .web').hover(
    function() {
        $('.article3 .web .floor_1').css({transform:'translate3d(0px, 0px, 50px)'})
        $('.article3 .web .floor_2').css({transform:'translate3d(0px, 0px, 100px)'})
        $('.article3 .web .floor_3').css({transform:'translate3d(0px, 0px, 150px)'})
        $('.article3 .web .floor_4').css({transform:'translate3d(0px, 0px, 200px)'})
    },
    function() {
        $('.article3 .web .floor_1').css({transform:'translate3d(0px, 0px, 0px)'})
        $('.article3 .web .floor_2').css({transform:'translate3d(0px, 0px, 0px)'})
        $('.article3 .web .floor_3').css({transform:'translate3d(0px, 0px, 0px)'})
        $('.article3 .web .floor_4').css({transform:'translate3d(0px, 0px, 0px)'})
    }
)


// 미로
$('.article4 .miro > label').on('click', function(){
    $(this).next().addClass('on')
    $(this).next().next().addClass('on')
    $(this).removeClass('on')
    $(this).prev().removeClass('on')
})
$('.article4 .miro > label:nth-of-type(1)').on('click', function(){
    $('.article4 .miro > img:nth-of-type(2)').css({
        left:'50px', top:'800px', transition:'all 1.5s linear'
    })
})
$('.article4 .miro > label:nth-of-type(2)').on('click', function(){
    $('.article4 .miro > img:nth-of-type(2)').css({
        left:'630px', top:'800px', transition:'all 1.5s linear'
    })
})
$('.article4 .miro > label:nth-of-type(3)').on('click', function(){
    $('.article4 .miro > img:nth-of-type(2)').css({
        left:'630px', top:'50px', transition:'all 1.5s linear'
    })
})
$('.article4 .miro > label:nth-of-type(4)').on('click', function(){
    $('.article4 .miro > img:nth-of-type(2)').css({
        left:'1000px', top:'50px', transition:'all 1.5s linear'
    })
})
$('.article4 .contact form button').on('click', function(){
    
    $('.article4 .miro > img:nth-of-type(2)').css({
        left:'1000px', top:'800px', transition:'all 1.5s linear'
    });
    
})