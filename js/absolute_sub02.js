$(function(){
    var h4 = $('div.hdrWrap>div.header>div.hdrRight>h4');
    var hdrRight = $('div.hdrWrap>div.header>div.hdrRight2');
    var close1 = $('div.hdrWrap>div.header>div.hdrRight2>h4');
    var menu = $('div.hdrWrap>div.header>div.hdrLeft>h4');
    var hdrLeft = $('div.hdrWrap>div.header>div.hdrLeft1');
    var close2 = $('div.hdrWrap>div.header>div.hdrLeft1>h4');
        
    var i = 0;
    
    // 모바일용 클릭
    var moleft = $('div.hdrWrap>div.header>div.hdrLeft>i');
    var wd = $(window).width();

    // 햄버거 타블렛바
    var HRHeight = 0;
    var HRHeCLose = 0;
    var HRHeLeft = 0;


    if(wd >= 1025){
        // PC 햄버거 바
        HRHeight = -280;
        HRHeCLose = -560;
        HRHeLeft = 'calc(100% / 12 * 3.5)';

      } else if(wd >= 420 && wd <= 1025){
        // Tablet 햄버거 바
        HRHeight = -200;
        HRHeCLose = -480;
        HRHeLeft = 'calc(100% / 8 * 2.8)';
  
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
              width: '0'
          });
      });
              // 제이쿼리 모바일 스와이프
              var cnt03ArtG = $('div.cntWrap>div.content.cnt03>div.section>div.artView>div.artGroup');
              $(cnt03ArtG).swipeleft(function(){
                  i++;
                  if(i>2){
                      i = 2
                  }
                  $(this).css({
                      marginLeft: i * -32 + '%'
                  });
      
                  if(i == 1){
                      cnt03bar.css({
                        width: 66.666 + '%',
                      })
                    } else if (i == 2) {
                      cnt03bar.css({
                        width: 100 + '%',
                      });
                    }
              });
      
              $(cnt03ArtG).swiperight(function(){
                  i--;
                  if(i<0){
                      i = 0
                  }
                  $(this).css({
                      marginLeft: i * -32 + '%'
                  });
      
                  if(i == 1){
                      cnt03bar.css({
                        width: i * 66.666 + '%',
                      });
                    } else if (i == 0) {
                      cnt03bar.css({
                        width: 33.333 + '%',
                      });
                    }
              });
      }


    // 햄버거바 액션
    // PC 햄버거 바
    h4.click(function(){
        hdrRight.css({
            marginTop: HRHeight+'px'
        });

    });

    // 닫기 버튼
    close1.click(function(){
        hdrRight.css({
            marginTop: HRHeCLose+'px'
        });
    });


    menu.click(function(){
        hdrLeft.css({
            width: HRHeLeft
        });
    });

    // 닫기 버튼
    close2.click(function(){
        hdrLeft.css({
            width: '0'
        });
    });



    // cnt02 액션
    var cnt02ImageG = $('div.cntWrap>div.content.cnt02 .artBtm .artRight .ovrGrid>div.imageGroup');
    var cnt02dim = $('div.cntWrap>div.content.cnt02 .artBtm .artRight .ovrGrid>div.imageGroup>div.dim');
    var textsH4 =$('div.cntWrap>div.content.cnt02 .BtmartBtm h4');
    var textsH3 =$('div.cntWrap>div.content.cnt02 .BtmartBtm h3');
    var textsP =$('div.cntWrap>div.content.cnt02 .BtmartBtm p');

    cnt02ImageG.eq(0).click(function(){

        textsH4.text('앱솔루트 보드카와 함께하는 칵테일');
        textsH3.text('CONTEMPORARY COCKTAIL');
        textsP.text('#앱솔루트칵테일#인기칵테일#칵테일재료#칵테일레시피');

        $(this).toggleClass('show');

        if($(this).hasClass('show')){
            cnt02ImageG.eq(1).addClass('none');
            cnt02ImageG.eq(2).addClass('none');
            $(this).find('.dim').css({
                display: 'none'
            });
        } else {
            cnt02dim.css({
                display: 'block'
            });
            cnt02ImageG.eq(1).removeClass('none');
            cnt02ImageG.eq(2).removeClass('none');
            cnt02dim.css({
                display: 'block'
            });
        }
    });


    cnt02ImageG.eq(1).click(function(){

        textsH4.text('앱솔루트 보드카와 함께하는 칵테일');
        textsH3.text('POPULAR CHERRY COCKTAIL');
        textsP.text('#앱솔루트칵테일#인기칵테일#칵테일재료#칵테일레시피#달콤함');

        $(this).toggleClass('show');
        if($(this).hasClass('show')){
            cnt02ImageG.eq(0).addClass('none');
            cnt02ImageG.eq(2).addClass('none');
            $(this).find('.dim').css({
                display: 'none'
            });
        } else {
            cnt02ImageG.eq(0).removeClass('none');
            cnt02ImageG.eq(2).removeClass('none');
            cnt02dim.css({
                display: 'block'
            });
        }
    });
    cnt02ImageG.eq(2).click(function(){

        textsH4.text('앱솔루트 보드카와 함께하는 칵테일');
        textsH3.text('POPULAR APPLE COCKTAIL');
        textsP.text('#앱솔루트칵테일#인기칵테일#칵테일재료#칵테일레시피#상큼함');

        $(this).toggleClass('show');

        if($(this).hasClass('show')){
            cnt02ImageG.eq(0).addClass('none');
            cnt02ImageG.eq(1).addClass('none');
            $(this).find('.dim').css({
                display: 'none'
            });
        } else {
            cnt02ImageG.eq(0).removeClass('none');
            cnt02ImageG.eq(1).removeClass('none');
            cnt02dim.css({
                display: 'block'
            });
        }
    });


    // cnt03 슬라이드
    var cnt03Right = $('div.cntWrap>div.content.cnt03>div.section>div.btns>i').eq(1);
    var cnt03Left = $('div.cntWrap>div.content.cnt03>div.section>div.btns>i').eq(0);
    var cnt03ArtG = $('div.cntWrap>div.content.cnt03>div.section>div.artView>div.artGroup');
    var cnt03bar = $('div.cntWrap>div.content.cnt03>div.section>div.bars>div.bar>div.blue');

        function cnt03R() {
            i++;
    
            if(i>2){
                i=2;
            }
            cnt03ArtG.css({
                marginLeft: i * '-22' + '%'
            });
    
    
            if(i == 1){
                cnt03bar.css({
                  width: 66.666 + '%',
                })
              } else if (i == 2) {
                cnt03bar.css({
                  width: 100 + '%',
                });
              }
    
        };
    
        function cnt03L() {
            i--;
    
            if(i<0){
                i=0;
            }
            cnt03ArtG.css({
                marginLeft: i * '-22' + '%'
            });
    
            if(i == 1){
                cnt03bar.css({
                  width: i * 66.666 + '%',
                });
              } else if (i == 0) {
                cnt03bar.css({
                  width: 33.333 + '%',
                });
              }
        }
    
    
        // 액션 적용
        cnt03Right.click(cnt03R);
        cnt03Left.click(cnt03L);

});

