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
        // console.log(osLeft)
        if (osLeft = 1920) {
            $('.article2 .title').addClass('on')
            $('.article2 .chart-container').addClass('on')
        }
});
$('.article1 .next').on('click', function(){
    $('.article2 .title').addClass('on')
    $('.article2 .chart-container').addClass('on')
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
        maintainAspectRatio:false,
        legend:{display:false, position:'bottom'}
    }
}); 


// portfolio
$('.article3 .web').hover(
    function() {
        $('.article3 .web .floor_1').css({transform:'translate3d(0px, 0px, 50px)'})
        $('.article3 .web .floor_2').css({transform:'translate3d(0px, 0px, 100px)'})
        $('.article3 .web .floor_3').css({transform:'translate3d(0px, 0px, 150px)'})
        $('.article3 .web .floor_4').css({transform:'translate3d(0px, 0px, 200px)'})
        $('.article3 .web .floor_5').css({transform:'translate3d(0px, 0px, 250px)'})
    },
    function() {
        $('.article3 .web .floor_1').css({transform:'translate3d(0px, 0px, 0px)'})
        $('.article3 .web .floor_2').css({transform:'translate3d(0px, 0px, 0px)'})
        $('.article3 .web .floor_3').css({transform:'translate3d(0px, 0px, 0px)'})
        $('.article3 .web .floor_4').css({transform:'translate3d(0px, 0px, 0px)'})
        $('.article3 .web .floor_5').css({transform:'translate3d(0px, 0px, 0px)'})
    }
);
$('.article3 .web .floor_5').hover(
    function() {
        $(this).prev().css({transform:'translate3d(0px, 0px, 200px)'})
        $(this).css({transform:'translate3d(0px, 0px, 250px)'})
    },
    function() {}
);
$('.article3 .web .floor_4').hover(
    function() {
        $(this).next().css({transform:'translate3d(0px, 0px, 450px)'})
        $(this).css({transform:'translate3d(0px, 0px, 200px)'})
    },
    function() {}
);
$('.article3 .web .floor_3').hover(
    function() {
        $(this).next().css({transform:'translate3d(0px, 0px, 400px)'})
        $(this).css({transform:'translate3d(0px, 0px, 150px)'})
    },
    function() {}
);
$('.article3 .web .floor_2').hover(
    function() {
        $(this).next().css({transform:'translate3d(0px, 0px, 350px)'})
        $(this).css({transform:'translate3d(0px, 0px, 100px)'})
    },
    function() {}
);
$('.article3 .web .floor_1').hover(
    function() {
        $(this).next().next().next().next().css({transform:'translate3d(0px, 0px, 450px)'})
        $(this).next().next().next().css({transform:'translate3d(0px, 0px, 400px)'})
        $(this).next().next().css({transform:'translate3d(0px, 0px, 350px)'})
        $(this).next().css({transform:'translate3d(0px, 0px, 300px)'})
    },
    function() {}
);


$('.article3 .design .floor_4').on('click', function(){
    $('.article3 .right #modal').addClass('on')
})

$('#modal > p').on('click', function(){
    $('.article3 .right #modal').removeClass('on')
})

var href;
$('.inner .title > li > a').on('click', function(e){
    e.preventDefault()
    $(this).parent().addClass('on').siblings().removeClass('on')
    href = $(this).attr('href')
    $('.cont img').each(function(){
        if($(this).hasClass(href)) {
            $(this).css({ display:'block' })
            $(this).addClass('active')
        } else {
            $(this).removeClass('active').css({ display:'none'})
        }
    })
})

// var elLia = document.querySelectorAll('.inner .title > li > a')
// var elImg = document.querySelectorAll('.cont > img')

// for (var i=0; i<elLia.length; i++) { 
//     elLia[i].addEventListener('click', function(e){
//         e.preventDefault() // 기본 href 기능 막으려고
//         var href = this.getAttribute('href')
//         filter(href)
//     })
// }
// function filter(type){
//     for(var j=0; j<elImg.length; j++) {   //for문은 이미지 갯수만큼 반복해서 돌리려고 하나하나 조사
//         if (elImg[j].classList.contains(type)) {
//             elImg[j].style.display = 'block'
//             elImg[j].classList.add('active')
//         } else {
//             elImg[j].classList.remove('active')
//             elImg[j].style.display = 'none'
//         }
//     }
// }

var imgnum;
$('.cont img').on('click', function(e){
    e.preventDefault()
    imgnum = $(this).index()
    var src = $(this).attr('src')
    var alt = $(this).attr('alt')
    $('body').append('<div class="outbox"><div class="inbox"></div></div>')
    $('.outbox').css({
        position:'fixed', top:0, left:0, right:0, bottom:0,
        zIndex:'999999', background:'rgba(0,0,0,0.8)'
    })
    $('.inbox').css({
        position:'absolute', top:'50%', left:'50%',
        transform:'translate(-50%,-50%)',
    })
    .append(`<img src="${src}" alt="${alt}"></a>`)
    .append('<button class="close"><i class="fas fa-times-circle"></i></button>')
    .append('<button class="arrow prev"><i class="fas fa-angle-left"></i></button><button class="arrow next"><i class="fas fa-angle-right"></i></button>')
    $('.inbox .close').css({
        position:'absolute', top:'-20px', right:'-20px',
        background:'none', border:'none', fontSize:'40px', color:'#fff'
    })
    $('.inbox .prev').css({
        position:'absolute', top:'50%', left:'50%', marginLeft:'-330px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'40px', color:'#fff'
    })
    $('.inbox .next').css({
        position:'absolute', top:'50%', right:'50%', marginRight:'-330px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'40px', color:'#fff'
    })
})

$('body').on('click', '.inbox .close, .outbox', function(){
    $('.outbox').remove()
})
$('body').on('click', '.inbox', function(e){
    e.stopPropagation()
})

function cont (indexnum){
    var src = $('.cont img').eq(indexnum).attr('src')
    var alt = $('.cont img').eq(indexnum).attr('alt')
    $('.inbox').find('a').attr({href:href})
    $('.inbox').find('img').attr({
        src:src,
        alt:alt
    })
}

$('body').on('click', '.inbox .next', function(){
    imgnum++
    if (imgnum === $('.cont img').length) {
        imgnum = 0
    }
    cont(imgnum)
})

$('body').on('click', '.inbox .prev', function(){
    imgnum--
    if (imgnum<0) {
        imgnum = 7
    }
    cont(imgnum)
})


// 미로
$('.article4 .miro > label').on('click', function(){
    $(this).next().addClass('on')
    $(this).next().next().addClass('on')
    $(this).removeClass('on')
    $(this).prev().removeClass('on')
})
$('.article4 .miro > label:nth-of-type(1)').on('click', function(){
    $('.article4 .miro > .girl').css({
        left:'50px', top:'800px', 
        transition:'all 1s linear'
    })
})
$('.article4 .miro > label:nth-of-type(2)').on('click', function(){
    $('.article4 .miro > .girl').css({
        left:'630px', top:'800px', 
        transition:'all 1s linear'
    })
})
$('.article4 .miro > label:nth-of-type(3)').on('click', function(){
    $('.article4 .miro > .girl').css({
        left:'630px', top:'50px', 
        transition:'all 1s linear'
    })
})
$('.article4 .miro > label:nth-of-type(4)').on('click', function(){
    $('.article4 .miro > .girl').css({
        left:'1000px', top:'50px', 
        transition:'all 0.7s linear'
    })
})

$('.article4 .miro > i').on('click', function(){
    alert("다른 길을 찾아봐 주세요!")
})


$('.article4 .contact form button').on('click', function(e){
    e.preventDefault();
    $('.article4 .miro > .girl').animate({
        left:'1000px', top:'800px'
    }, 1000, function(){
        
        setTimeout(abc, 2000)
        
    })
})
function abc(){
    $('.article4 .miro > .girl').animate({
        left:'30px', top:'50px', 
    }, 1, function(){
        $('body, html').animate({
            scrollLeft:0
        }, 1000, function(){
            location.reload();
        })
    })
}

$('article .next').on('click', function(){
    var left = $(this).parents('article').next().offset().left
    $('body, html').animate({
        scrollLeft:left
    }, 1000)
})