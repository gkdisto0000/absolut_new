$(function(){

  // 변수 선언부
    var h4 = $('div.hdrWrap>div.header>div.hdrRight>h4');
    var hdrRight = $('div.hdrWrap>div.header>div.hdrRight2');
    var close1 = $('div.hdrWrap>div.header>div.hdrRight2>h4');
    var menu = $('div.hdrWrap>div.header>div.hdrLeft>h4');
    var hdrLeft = $('div.hdrWrap>div.header>div.hdrLeft1');
    var close2 = $('div.hdrWrap>div.header>div.hdrLeft1>h4');
    var bnr2Left = $('div.cntWrap>div.content.cnt03>div.header>div.btns>i').eq(0);
    var bnr2Right = $('div.cntWrap>div.content.cnt03>div.header>div.btns>i').eq(1);
    var bnrG = $('div.cntWrap>div.content.cnt03>div.section>div.artView>div.artGroup');
    var blue = $('div.cntWrap>div.content.cnt03>div.header>div.bars>div.bar>div.blue');
    var cnt2B = $('div.cntWrap>div.content.cnt02>div.section>div.btns>i');
    var cnt2G = $('div.cntWrap>div.content.cnt02>div.section>div.group>div.artTop');
    var i = 0;

    // 모바일용 클릭
    var moleft = $('div.hdrWrap>div.header>div.hdrLeft>i');
    var wd = $(window).width();

    if(wd >= 1025){

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

    cnt2B.eq(1).click(function(){
      i++;
      cnt2B.eq(0).css('opacity','1');
      if(i>2){
        i=2;
        $(this).css('opacity','0');
      }
      cnt2G.css({
        marginLeft: i * -25 + '%' 
      })
      console.log(i);
    });

    cnt2B.eq(0).click(function(){
      i--;
      cnt2B.eq(1).css('opacity','1');
      if(i<0){
        i=0;
        $(this).css('opacity','0');
      }
      cnt2G.css({
        marginLeft: i * -25 + '%' 
      })
    });

    
    // 배너 버튼 레프트
    bnr2Right.click(function(){
      i++;
      
      if(i > 2) {
        i = 2;
      }
      bnrG.css({
        marginLeft: i * -24 + '%'
      });


      if(i == 1){
        blue.css({
          width: 66.666 + '%',
        })
      } else if (i == 2) {
        blue.css({
          width: 100 + '%',
        })
      }

    });


    bnr2Left.click(function(){
      i--;
      
      if(i < 0) {
        i = 0;
      }

      bnrG.css({
        marginLeft: i * -24 + '%'
      });

      if(i == 1){
        blue.css({
          width: i * 66.666 + '%',
        })
      } else if (i == 0) {
        blue.css({
          width: 33.333 + '%',
        })
      }
    });

    } else if(wd >= 420 && wd <= 1025){

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

    cnt2B.eq(1).click(function(){
      i++;
      cnt2B.eq(0).css('opacity','1');
      if(i>2){
        i=2;
        $(this).css('opacity','0');
      }
      cnt2G.css({
        marginLeft: i * -25 + '%' 
        // marginLeft: i * -22 + '%' 
      })
      console.log(i);
    });

    cnt2B.eq(0).click(function(){
      i--;
      cnt2B.eq(1).css('opacity','1');
      if(i<0){
        i=0;
        $(this).css('opacity','0');
      }
      cnt2G.css({
        marginLeft: i * -25 + '%' 
        // marginLeft: i * -22 + '%' 
      })
    });

    
    // 배너 버튼 레프트
    bnr2Right.click(function(){
      i++;
      
      if(i > 2) {
        i = 2;
      }
      bnrG.css({
        marginLeft: i * -24 + '%'
      });


      if(i == 1){
        blue.css({
          width: 66.666 + '%',
        })
      } else if (i == 2) {
        blue.css({
          width: 100 + '%',
        })
      }

    });

    bnr2Left.click(function(){
      i--;
      
      if(i < 0) {
        i = 0;
      }

      bnrG.css({
        marginLeft: i * -24 + '%'
      });

      if(i == 1){
        blue.css({
          width: i * 66.666 + '%',
        })
      } else if (i == 0) {
        blue.css({
          width: 33.333 + '%',
        })
      }
    });

    } else {
      // 헤더  
      moleft.click(function(){
        hdrLeft.css({
            width: '50%'
        });
    });

    // 닫기 버튼
    close2.click(function(){
        hdrLeft.css({
            width: '0px'
        });
    });

    cnt2B.eq(1).click(function(){
      i++;
      cnt2B.eq(0).css('opacity','1');
      if(i>2){
        i=2;
        $(this).css('opacity','0');
      }
      cnt2G.css({
        marginLeft: i * -32 + '%' 
      })
      console.log(i);
    });

    cnt2B.eq(0).click(function(){
      i--;
      cnt2B.eq(1).css('opacity','1');
      if(i<0){
        i=0;
        $(this).css('opacity','0');
      }
      cnt2G.css({
        marginLeft: i * -32 + '%' 
      })
    });

    
    // 배너 버튼 레프트
    bnr2Right.click(function(){
      i++;
      
      if(i > 4) {
        i = 4;
      }
      bnrG.css({
        marginLeft: i * -92 + '%'
      });


      if(i == 1){
        blue.css({
          width: 25 + '%',
        })
      } else if (i == 2) {
        blue.css({
          width: 50 + '%',
        })
      } else if (i == 3) {
        blue.css({
          width: 75 + '%',
        })
      } else if (i == 4) {
        blue.css({
          width: 100 + '%',
        })
      } 

    });


    bnr2Left.click(function(){
      i--;

      blue.css({
        width: 0 + '%',
      });
      
      if(i < 0) {
        i = 0;
      }

      bnrG.css({
        marginLeft: i * -92 + '%'
      });

      if(i == 1){
        blue.css({
          width: 25 + '%',
        })
      } else if (i == 2) {
        blue.css({
          width: 50 + '%',
        })
      } else if (i == 3) {
        blue.css({
          width: 75 + '%',
        })
      } else if (i == 4) {
        blue.css({
          width: 100 + '%',
        })
      } 
    });
    }
    // 제이쿼리 마침
});