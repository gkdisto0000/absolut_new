$(function () {
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

  // 햄버거 타블렛바
  var HRHeight = 0;
  var HRHeCLose = 0;
  var HRHeLeft = 0;

  // cnt02 병 슬라이드 반응형
  var cnt02Left = 0;

  // bnr 슬라이드
  var bnrLeft = 0;
  var bnrB01 = 0;
  var bnrB02 = 0;
  var bnrB03 = 0;

  if (wd >= 1025) {
    // PC 햄버거 바
    HRHeight = -280;
    HRHeCLose = -560;
    HRHeLeft = 'calc(100% / 12 * 3.5)';
    cnt02Left = -25;
    // bnr slide
    bnrLeft = -24;
    bnrB01 = 66.666;
    bnrB02 = 33.333;
    bnrB03 = 2;
  } else if (wd >= 420 && wd <= 1025) {
    // Tablet 햄버거 바
    HRHeight = -200;
    HRHeCLose = -480;
    HRHeLeft = 'calc(100% / 8 * 2.8)';
    cnt02Left = -25;
    // bnr slide
    bnrLeft = -24;
    bnrB01 = 66.666;
    bnrB02 = 33.333;
    bnrB03 = 2;
  } else {
    // 헤더  
    moleft.click(function () {
      hdrLeft.css({
        width: '50%'
      });
    });
    // 닫기 버튼
    close2.click(function () {
      hdrLeft.css({
        width: '0px'
      });
    });
    cnt02Left = -32;
    // 배너 버튼 레프트
   bnrLeft = -92;
   bnrB01 = 25;
   bnrB02 = 0;
   bnrB03 = 4;
  }


  // 햄버거바 액션
  h4.click(function () {
    hdrRight.css({
      marginTop: HRHeight + 'px'
    });
  });
  // 닫기 버튼
  close1.click(function () {
    hdrRight.css({
      marginTop: HRHeCLose + 'px'
    });
  });
  menu.click(function () {
    hdrLeft.css({
      width: HRHeLeft
    });
  });
  // 닫기 버튼
  close2.click(function () {
    hdrLeft.css({
      width: '0'
    });
  });
  // 배너 버튼 레프트
  blue.css({
    width: 33.333 + '%',
  });
  bnr2Right.click(function () {
    i++;
    if (i > bnrB03) {
      i = bnrB03;
    }
    bnrG.css({
      marginLeft: i * bnrLeft + '%'
    });

    if (i == 1) {
      blue.css({
        width: bnrB01 + '%',
      })
    } else if (i == 2) {
      blue.css({
        width: 100 + '%',
      })
    }
  });
  bnr2Left.click(function () {
    i--;
    if (i < 0) {
      i = 0;
    }
    bnrG.css({
      marginLeft: i * bnrLeft + '%'
    });
    if (i == 1) {
      blue.css({
        width: i * bnrB01  + '%',
      })
    } else if (i == 0) {
      blue.css({
        width: bnrB02 + '%',
      })
    }
  });
  // cnt02 병 슬라이드
  cnt2B.eq(1).click(function () {
    i++;
    cnt2B.eq(0).css('opacity', '1');
    if (i > 2) {
      i = 2;
      $(this).css('opacity', '0');
    }
    cnt2G.css({
      marginLeft: i * cnt02Left + '%'
    })
  });
  cnt2B.eq(0).click(function () {
    i--;
    cnt2B.eq(1).css('opacity', '1');
    if (i < 0) {
      i = 0;
      $(this).css('opacity', '0');
    }
    cnt2G.css({
      marginLeft: i * cnt02Left + '%'
    })
  });
});