$(function () {


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

  // 햄버거 타블렛바
  var HRHeight = 0;
  var HRHeCLose = 0;
  var HRHeLeft = 0;

  var wd = $(window).width();
  var i = 0;

  // cnt01 무한루프 슬라이드
  var cnt01MaginLeft01 = 0;
  var cnt01EQ3 = 0;
  var cnt01EQ = 0;
  var cnt01MaginLeft02 = 0;
  var cnt01MoEq = 0;

  if (wd >= 1025) {
    // PC 햄버거 바
    HRHeight = -280;
    HRHeCLose = -560;
    HRHeLeft = 'calc(100% / 12 * 3.5)';

    // cnt01
    cnt01MaginLeft01 = -19.7;
    cnt01EQ3 = '320px';
    cnt01EQ = '300px';
    cnt01MaginLeft02 = -39.4
    cnt01MoEq = 3;


  } else if (wd >= 420 && wd <= 1025) {

    // Tablet 햄버거 바
    HRHeight = -200;
    HRHeCLose = -480;
    HRHeLeft = 'calc(100% / 8 * 2.8)';

    // cnt01
    cnt01MaginLeft01 = -20;
    cnt01EQ3 = '300px';
    cnt01EQ = '280px';
    cnt01MaginLeft02 = -40
    cnt01MoEq = 3;


  } else {
    // cnt01
    cnt01MaginLeft01 = -34.5;
    cnt01EQ3 = '280px';
    cnt01EQ = '260px';
    cnt01MaginLeft02 = -69
    cnt01MoEq = 2;

    // 헤더  
    moleft.click(function () {
      hdrLeft.css({
        width: '50%'
      });
    });

    // 닫기 버튼
    close2.click(function () {
      hdrLeft.css({
        width: '0'
      });
    });
  }

  // 햄버거바 액션
  // PC 햄버거 바
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

  //cnt01 무한루프 슬라이드 
  // 초기세팅
  cnt1Group.css({
    marginLeft: cnt01MaginLeft01 + '%'
  });
  cnt1Image2.css({
    marginLeft: -100 + '%'
  });
  cnt1Group.find('.image').eq(cnt01MoEq).css({
    filter: 'grayscale(0)',
    height: cnt01EQ3
  });
  cntbtn2.click(function () {
    cnt1Group.stop().animate({
      marginLeft: cnt01MaginLeft02 + '%'
    }, 500, function () {
      cnt1Group.find('.image:first').appendTo(cnt1Group);
      cnt1Group.css({
        marginLeft: cnt01MaginLeft01 + '%'
      });
      cnt1Group.find('.image').css({
        filter: 'grayscale(1)',
        height: cnt01EQ
      });
      cnt1Group.find('.image').eq(cnt01MoEq).css({
        filter: 'grayscale(0)',
        height: cnt01EQ3
      });
    });

    cnt1Image2.stop().animate({
      marginLeft: -200 + '%'
    }, 500, function () {
      cnt1Image2.find('.texts:first').appendTo(cnt1Image2);
      cnt1Image2.css({
        marginLeft: -100 + '%'
      });
    });
  });

  cntbtn1.click(function () {
    cnt1Group.stop().animate({
      marginLeft: 0
    }, 500, function () {
      cnt1Group.find('.image:last').prependTo(cnt1Group);
      cnt1Group.css({
        marginLeft: cnt01MaginLeft01 + '%'
      });
      cnt1Group.find('.image').css({
        filter: 'grayscale(1)',
        height: cnt01EQ
      });
      cnt1Group.find('.image').eq(cnt01MoEq).css({
        filter: 'grayscale(0)',
        height: cnt01EQ3
      });
    });
    cnt1Image2.stop().animate({
      marginLeft: 0 + '%'
    }, 500, function () {
      cnt1Image2.find('.texts:last').prependTo(cnt1Image2);
      cnt1Image2.css({
        marginLeft: -100 + '%'
      });
    });
  });

  // cnt02 원형 클릭
  var circle = $('div.cntWrap > div.content.cnt02 > div.section > div.article > div.images > div.image');
  var h3 = $('div.cntWrap>div.content.cnt02>div.section>div.article>div.texts>h3');

  circle.eq(0).click(function () {
    h3.text('"ABSOLUT CITRON1의 맛은 어떤가요?"');
  });

  circle.eq(1).click(function () {
    h3.text('"ABSOLUT CITRON2의 맛은 어떤가요?"');
  });

  circle.eq(2).click(function () {
    h3.text('"ABSOLUT CITRON3의 맛은 어떤가요?"');
  });

  circle.eq(3).click(function () {
    h3.text('"ABSOLUT CITRON4의 맛은 어떤가요?"');
  });

  circle.eq(4).click(function () {
    h3.text('"ABSOLUT CITRON5의 맛은 어떤가요?"');
  });

  circle.eq(5).click(function () {
    h3.text('"ABSOLUT CITRON6의 맛은 어떤가요?"');
  });




});