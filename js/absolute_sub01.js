$(function(){


    var h4 = $('div.hdrWrap>div.header>div.hdrRight>h4');
    var hdrRight = $('div.hdrWrap>div.header>div.hdrRight2');
    var close1 = $('div.hdrWrap>div.header>div.hdrRight2>h4');
    var menu = $('div.hdrWrap>div.header>div.hdrLeft>h4');
    var hdrLeft = $('div.hdrWrap>div.header>div.hdrLeft1');
    var close2 = $('div.hdrWrap>div.header>div.hdrLeft1>h4');

    // 모바일용 클릭
    var moleft = $('div.hdrWrap>div.header>div.hdrLeft>i');
    
    // 컨텐츠 1
    var cntbtn1 = $('div.cntWrap>div.content.cnt01>div.section>div.article>div.btns>i').first();
    var cntbtn2 = $('div.cntWrap>div.content.cnt01>div.section>div.article>div.btns>i').last();
    var cnt1Group = $('div.cntWrap>div.content.cnt01>div.section>div.article>div.images');
    var cnt1Image = $('div.cntWrap>div.content.cnt01>div.section>div.article>div.images>div.image');
    var txtLeft = $('div.cntWrap>div.content.cnt01>div.section>div.article>div.texts>div.txtLeft');
    var txtRight = $('div.cntWrap>div.content.cnt01>div.section>div.article>div.texts>div.txtRight');
    var texts = $('div.cntWrap>div.content.cnt01>div.section>div.article>div.texts');
    var cnt1Image2 = $('div.cntWrap>div.content.cnt01>div.section>div.article>div.view>div.textsGroup');

    var wd = $(window).width();
    var i = 0;

        if(wd >= 1025){
        // 기본 세팅

        // 초기세팅
        cnt1Group.css({
          marginLeft: -19.7 +'%'
        });

        cnt1Image2.css({
          marginLeft: -100 + '%'
        });

        cnt1Group.find('.image').eq(3).css({
          filter: 'grayscale(0)',
          height: '320px'
        });

        cntbtn2.click(function(){
          cnt1Group.stop().animate({
            marginLeft: -39.4 +'%'
          }, 500, function(){
            cnt1Group.find('.image:first').appendTo(cnt1Group);
            cnt1Group.css({
              marginLeft: -19.7 +'%'
            });
            cnt1Group.find('.image').css({
              filter: 'grayscale(1)',
              height: '300px'
            });
            cnt1Group.find('.image').eq(3).css({
              filter: 'grayscale(0)',
              height: '320px'
            });
          });

          cnt1Image2.stop().animate({
            marginLeft: -200 +'%'
          }, 500, function(){
            cnt1Image2.find('.texts:first').appendTo(cnt1Image2);
            cnt1Image2.css({
              marginLeft: -100 + '%'
            });
          });

        });

        cntbtn1.click(function(){
          cnt1Group.stop().animate({
            marginLeft: 0
          }, 500, function(){
            cnt1Group.find('.image:last').prependTo(cnt1Group);
            cnt1Group.css({
              marginLeft: -19.7 +'%'
            });
            cnt1Group.find('.image').css({
              filter: 'grayscale(1)',
              height: '300px'
            });
            cnt1Group.find('.image').eq(3).css({
              filter: 'grayscale(0)',
              height: '320px'
            });
          });


          cnt1Image2.stop().animate({
            marginLeft: 0 +'%'
          }, 500, function(){
            cnt1Image2.find('.texts:last').prependTo(cnt1Image2);
            cnt1Image2.css({
              marginLeft: -100 + '%'
            });
          });

        });

        h4.click(function(){
          hdrRight.css({
              marginTop: '-280'+'px'
          });
  
      });
  
      // 닫기 버튼
      close1.click(function(){
          hdrRight.css({
              marginTop: '-560'+'px'
          });
      });
  
  
      menu.click(function(){
          hdrLeft.css({
              width: 'calc(100% / 12 * 3.5)'
          });
      });
  
      // 닫기 버튼
      close2.click(function(){
          hdrLeft.css({
              width: '0'
          });
      });
  

          
      } else if(wd >= 420 && wd <= 1025){


    // 기본 세팅

        // 초기세팅
        cnt1Group.css({
          marginLeft: -20 +'%'
        });

        cnt1Image2.css({
          marginLeft: -100 + '%'
        });

        cnt1Group.find('.image').eq(3).css({
          filter: 'grayscale(0)',
          height: '300px'
        });


        cntbtn2.click(function(){
          cnt1Group.stop().animate({
            marginLeft: -40 +'%'
          }, 500, function(){
            cnt1Group.find('.image:first').appendTo(cnt1Group);
            cnt1Group.css({
              marginLeft: -20 +'%'
            });
            cnt1Group.find('.image').css({
              filter: 'grayscale(1)',
              height: '280px'
            });
            cnt1Group.find('.image').eq(3).css({
              filter: 'grayscale(0)',
              height: '300px'
            });
          });

          cnt1Image2.stop().animate({
            marginLeft: -200 +'%'
          }, 500, function(){
            cnt1Image2.find('.texts:first').appendTo(cnt1Image2);
            cnt1Image2.css({
              marginLeft: -100 + '%'
            });
          });

        });

        cntbtn1.click(function(){
          cnt1Group.stop().animate({
            marginLeft: 0
          }, 500, function(){
            cnt1Group.find('.image:last').prependTo(cnt1Group);
            cnt1Group.css({
              marginLeft: -20 +'%'
            });
            cnt1Group.find('.image').css({
              filter: 'grayscale(1)',
              height: '280px'
            });
            cnt1Group.find('.image').eq(3).css({
              filter: 'grayscale(0)',
              height: '300px'
            });
          });


          cnt1Image2.stop().animate({
            marginLeft: 0 +'%'
          }, 500, function(){
            cnt1Image2.find('.texts:last').prependTo(cnt1Image2);
            cnt1Image2.css({
              marginLeft: -100 + '%'
            });
          });

        });



        // 타블렛 햄버거 바

        h4.click(function(){
          hdrRight.css({
              marginTop: '-200'+'px'
          });
  
      });
  
      // 닫기 버튼
      close1.click(function(){
          hdrRight.css({
              marginTop: '-480'+'px'
          });
      });
  
  
      menu.click(function(){
          hdrLeft.css({
              width: 'calc(100% / 8 * 2.8)'
          });
      });
  
      // 닫기 버튼
      close2.click(function(){
          hdrLeft.css({
              width: '0'
          });
      });
  
          
      } else {
    // 기본 세팅

        // 초기세팅
        cnt1Group.css({
          marginLeft: -34.5 +'%'
        });

        cnt1Image2.css({
          marginLeft: -100 + '%'
        });

        cnt1Group.find('.image').eq(2).css({
          filter: 'grayscale(0)',
          height: '280px'
        });

        cntbtn2.click(function(){
          cnt1Group.stop().animate({
            marginLeft: -69 +'%'
          }, 500, function(){
            cnt1Group.find('.image:first').appendTo(cnt1Group);
            cnt1Group.css({
              marginLeft: -34.5 +'%'
            });
            cnt1Group.find('.image').css({
              filter: 'grayscale(1)',
              height: '260px'
            });
            cnt1Group.find('.image').eq(2).css({
              filter: 'grayscale(0)',
              height: '280px'
            });
          });

          cnt1Image2.stop().animate({
            marginLeft: -200 +'%'
          }, 500, function(){
            cnt1Image2.find('.texts:first').appendTo(cnt1Image2);
            cnt1Image2.css({
              marginLeft: -100 + '%'
            });
          });

        });

        cntbtn1.click(function(){
          cnt1Group.stop().animate({
            marginLeft: 0
          }, 500, function(){
            cnt1Group.find('.image:last').prependTo(cnt1Group);
            cnt1Group.css({
              marginLeft: -34.5 +'%'
            });
            cnt1Group.find('.image').css({
              filter: 'grayscale(1)',
              height: '260px'
            });
            cnt1Group.find('.image').eq(2).css({
              filter: 'grayscale(0)',
              height: '280px'
            });
          });

          cnt1Image2.stop().animate({
            marginLeft: 0 +'%'
          }, 500, function(){
            cnt1Image2.find('.texts:last').prependTo(cnt1Image2);
            cnt1Image2.css({
              marginLeft: -100 + '%'
            });
          });

        });

        // 헤더  
        moleft.click(function(){
          hdrLeft.css({
              width: '50%'
          });
      });
  
      // 닫기 버튼
      close2.click(function(){
          hdrLeft.css({
              width: '0'
          });
      });
      }

    // 원형 클릭

    var circle = $('div.cntWrap > div.content.cnt02 > div.section > div.article > div.images > div.image');
    var h3 = $('div.cntWrap>div.content.cnt02>div.section>div.article>div.texts>h3');

    circle.eq(0).click(function(){
      h3.text('"ABSOLUT CITRON1의 맛은 어떤가요?"');
    });

    circle.eq(1).click(function(){
      h3.text('"ABSOLUT CITRON2의 맛은 어떤가요?"');
    });

    circle.eq(2).click(function(){
      h3.text('"ABSOLUT CITRON3의 맛은 어떤가요?"');
    });

    circle.eq(3).click(function(){
      h3.text('"ABSOLUT CITRON4의 맛은 어떤가요?"');
    });

    circle.eq(4).click(function(){
      h3.text('"ABSOLUT CITRON5의 맛은 어떤가요?"');
    });

    circle.eq(5).click(function(){
      h3.text('"ABSOLUT CITRON6의 맛은 어떤가요?"');
    });

});