$(function () {

    // 헤더 변수문
    var h4 = $('div.hdrWrap>div.header>div.hdrRight>h4');
    var hdrRight = $('div.hdrWrap>div.header>div.hdrRight2');
    var close1 = $('div.hdrWrap>div.header>div.hdrRight2>h4');
    var menu = $('div.hdrWrap>div.header>div.hdrLeft>h4');
    var hdrLeft = $('div.hdrWrap>div.header>div.hdrLeft1');
    var close2 = $('div.hdrWrap>div.header>div.hdrLeft1>h4');
    var i = 0;

    //   cnt01 pc 제이쿼리 변수
    var cnt01Btn1 = $('div.cntWrap>.content.cnt01 header .btns i').eq(1);
    var cnt01Btn2 = $('div.cntWrap>.content.cnt01 header .btns i').eq(0);
    var cnt01IG = $('div.cntWrap>div.content.cnt01>section>div.artView>div.artGroup');
    var blue = $('div.cntWrap>.content.cnt01 header .bar .blue');

    //   cnt02 pc 제이쿼리 변수
    var cnt02Img = $('div.cntWrap>.content.cnt02 section .artRight .images .group');
    var cnt02blue = $('div.cntWrap>.content.cnt02 section .artRight .bars .bar .blue');
    var cnt02Text = $('div.cntWrap>.content.cnt02 section .artRight .images .ovrGrid .group .text');
    var cnt02Image = $('div.cntWrap>.content.cnt02 section .artRight .images .ovrGrid .group .image');
    var cntLeftImage = $('div.cntWrap>.content.cnt02 section .artLeft .images .ovrGrid .image.i1');

    //   cnt03 pc 제이쿼리 변수
    var cnt03Img = $('div.cntWrap>.content.cnt03 section .artMiddle .images .ovrGrid .group');
    var cnt03Text = $('div.cntWrap>.content.cnt03 section .artMiddle .images .ovrGrid .text');
    var cnt03Image = $('div.cntWrap>.content.cnt03 section .artMiddle .images .ovrGrid .image');
    var cnt03LeftImage = $('div.cntWrap>.content.cnt03 section .artRight .images .ovrGrid .image.i1');

    //   cnt04 pc 제이쿼리 변수
    var cnt04Right = $('div.cntWrap>.content.cnt04 div.texts .btns i').eq(1);
    var cnt04Left = $('div.cntWrap>.content.cnt04 div.texts .btns i').eq(0);
    var cntArtG = $('div.cntWrap>.content.cnt04 div.artRight div.ovrGrid div.images');
    var cntLeft = $('div.cntWrap>.content.cnt04 div.artLeft div.ovrGrid div.images');


    // 모바일용 클릭
    var moleft = $('div.hdrWrap>div.header>div.hdrLeft>i');
    var wd = $(window).width();


    // 햄버거 타블렛바
    var HRHeight = 0;
    var HRHeCLose = 0;
    var HRHeLeft = 0;



    if (wd >= 1025) {

        // PC 햄버거 바
        HRHeight = -280;
        HRHeCLose = -560;
        HRHeLeft = 'calc(100% / 12 * 3.5)';
        //   cnt01 pc 제이쿼리
        blue.css({
            width: '0%',
            backgroundColor: '#0056a4',
            height: '5px'
        })

        cnt01Btn1.click(function () {
            i++;
            if (i > 2) {
                i = 2
            }
            if (i == 1) {
                blue.css({
                    width: '50%',
                    backgroundColor: '#0056a4',
                    height: '5px'
                });
            }
            if (i == 2) {
                blue.css({
                    width: '100%',
                    backgroundColor: '#0056a4',
                    height: '5px'
                });
            }
            cnt01IG.css({
                marginLeft: i * -23.5 + '%'
            });
        });
        cnt01Btn2.click(function () {
            i--;
            if (i < 0) {
                i = 0
            }
            if (i == 1) {
                blue.css({
                    width: '50%',
                    backgroundColor: '#0056a4',
                    height: '5px'
                });
            }
            if (i == 0) {
                blue.css({
                    width: '0%',
                    backgroundColor: '#0056a4',
                    height: '5px'
                });
            }
            cnt01IG.css({
                marginLeft: i * -23.5 + '%'
            })
        });

        //   cnt02 pc 제이쿼리
        cnt02Img.eq(0).click(function () {

            cnt02blue.css({
                width: 'calc(100% / 3)'
            });
            cnt02Text.eq(0).toggleClass('show');
            cnt02Image.eq(0).toggleClass('show');

            var col = $(this).attr('data-img');

            cntLeftImage.css({
                backgroundImage: col
            });
        });
        cnt02Img.eq(1).click(function () {

            cnt02blue.css({
                width: 'calc(100% / 3 * 2)'
            });

            cnt02Text.eq(1).toggleClass('show');
            cnt02Image.eq(1).toggleClass('show');

            var col = $(this).attr('data-img');

            cntLeftImage.css({
                backgroundImage: col
            });
        });
        cnt02Img.eq(2).click(function () {
            cnt02blue.css({
                width: 'calc(100% / 3 * 3)'
            });
            cnt02Text.eq(2).toggleClass('show');
            cnt02Image.eq(2).toggleClass('show');
            var col = $(this).attr('data-img');
            cntLeftImage.css({
                backgroundImage: col
            });
        });

        //   cnt04 pc 제이쿼리 
        // 초기세팅
        cntArtG.find('.image:last').prependTo(cntArtG);
        cntArtG.css({
            marginLeft: '-83%'
        });

        cntLeft.find('.image:last').prependTo(cntLeft);
        cntLeft.css({
            marginLeft: '-100%'
        });
        // 오른쪽 무한루프
        // 오른쪽 버튼
        cnt04Right.click(function () {

            cntArtG.stop().animate({
                marginLeft: '-166%'
            }, 500, function () {
                cntArtG.find('.image:first').appendTo(cntArtG);
                cntArtG.css({
                    marginLeft: '-83%'
                });
            });
            cntLeft.stop().animate({
                marginLeft: '-200%'
            }, 500, function () {
                cntLeft.find('.image:first').appendTo(cntLeft);
                cntLeft.css({
                    marginLeft: '-100%'
                });
            });
        });
        // 왼쪽 버튼
        cnt04Left.click(function () {
            cntArtG.stop().animate({
                marginLeft: '0%'
            }, 500, function () {
                cntArtG.find('.image:last').prependTo(cntArtG);
                cntArtG.css({
                    marginLeft: '-83%'
                });
            });
            cntLeft.stop().animate({
                marginLeft: '0%'
            }, 500, function () {
                cntLeft.find('.image:last').prependTo(cntLeft);
                cntLeft.css({
                    marginLeft: '-100%'
                });
            });
        });

    } else if (wd >= 420 && wd <= 1025) {
        // Tablet 햄버거 바
        HRHeight = -200;
        HRHeCLose = -480;
        HRHeLeft = 'calc(100% / 8 * 2.8)';
        //   cnt01 pc 제이쿼리
        blue.css({
            width: '0%',
            backgroundColor: '#0056a4',
            height: '5px'
        })
        cnt01Btn1.click(function () {
            i++;
            if (i > 3) {
                i = 3
            }
            if (i == 1) {
                blue.css({
                    width: '33.333%',
                    backgroundColor: '#0056a4',
                    height: '5px'
                });
            }
            if (i == 2) {
                blue.css({
                    width: '66.6666%',
                    backgroundColor: '#0056a4',
                    height: '5px'
                });
            }
            if (i == 3) {
                blue.css({
                    width: '100%',
                    backgroundColor: '#0056a4',
                    height: '5px'
                });
            }
            cnt01IG.css({
                marginLeft: i * -34 + '%'
            });
        });
        blue.css({
            width: '0%',
            backgroundColor: '#0056a4',
            height: '5px'
        });
        cnt01Btn2.click(function () {
            i--;
            if (i < 0) {
                i = 0
            }
            if (i == 0) {
                blue.css({
                    width: '0%',
                    backgroundColor: '#0056a4',
                    height: '5px'
                });
            }
            if (i == 1) {
                blue.css({
                    width: '33.333%',
                    backgroundColor: '#0056a4',
                    height: '5px'
                });
            }
            if (i == 2) {
                blue.css({
                    width: '66.6666%',
                    backgroundColor: '#0056a4',
                    height: '5px'
                });
            }
            if (i == 3) {
                blue.css({
                    width: '100%',
                    backgroundColor: '#0056a4',
                    height: '5px'
                });
            }
            cnt01IG.css({
                marginLeft: i * -34 + '%'
            })
        });
        //   cnt02 pc 제이쿼리
        cnt02Img.eq(0).click(function () {
            cnt02blue.css({
                width: 'calc(100% / 3)'
            });
            cnt02Text.eq(0).toggleClass('show');
            cnt02Image.eq(0).toggleClass('show');
            var col = $(this).attr('data-img');
            cntLeftImage.css({
                backgroundImage: col
            });
        });
        cnt02Img.eq(1).click(function () {
            cnt02blue.css({
                width: 'calc(100% / 3 * 2)'
            });
            cnt02Text.eq(1).toggleClass('show');
            cnt02Image.eq(1).toggleClass('show');
            var col = $(this).attr('data-img');
            cntLeftImage.css({
                backgroundImage: col
            });
        });
        cnt02Img.eq(2).click(function () {
            cnt02blue.css({
                width: 'calc(100% / 3 * 3)'
            });
            cnt02Text.eq(2).toggleClass('show');
            cnt02Image.eq(2).toggleClass('show');

            var col = $(this).attr('data-img');

            cntLeftImage.css({
                backgroundImage: col
            });
        });
        //   cnt04 pc 제이쿼리 
        // 초기세팅
        cntArtG.find('.image:last').prependTo(cntArtG);
        cntArtG.css({
            marginLeft: '-83%'
        });
        cntLeft.find('.image:last').prependTo(cntLeft);
        cntLeft.css({
            marginLeft: '-100%'
        });
        // 오른쪽 무한루프
        // 오른쪽 버튼
        cnt04Right.click(function () {
            cntArtG.stop().animate({
                marginLeft: '-166%'
            }, 500, function () {
                cntArtG.find('.image:first').appendTo(cntArtG);
                cntArtG.css({
                    marginLeft: '-83%'
                });
            });
            cntLeft.stop().animate({
                marginLeft: '-200%'
            }, 500, function () {
                cntLeft.find('.image:first').appendTo(cntLeft);
                cntLeft.css({
                    marginLeft: '-100%'
                });
            });
        });
        // 왼쪽 버튼
        cnt04Left.click(function () {
            cntArtG.stop().animate({
                marginLeft: '0%'
            }, 500, function () {
                cntArtG.find('.image:last').prependTo(cntArtG);
                cntArtG.css({
                    marginLeft: '-83%'
                });
            });

            cntLeft.stop().animate({
                marginLeft: '0%'
            }, 500, function () {
                cntLeft.find('.image:last').prependTo(cntLeft);
                cntLeft.css({
                    marginLeft: '-100%'
                });
            });
        });
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
                width: '0'
            });
        });
        //   cnt02 pc 제이쿼리
        cnt02Img.eq(0).click(function () {

            cnt02blue.css({
                width: 'calc(100% / 3)'
            });
            cnt02Text.eq(0).toggleClass('show');
            cnt02Image.eq(0).toggleClass('show');
            var col = $(this).attr('data-img');
            $('div.cntWrap>.content.cnt02 section .artRight .big').css({
                backgroundImage: col
            });
        });
        cnt02Img.eq(1).click(function () {
            cnt02blue.css({
                width: 'calc(100% / 3 * 2)'
            });
            cnt02Text.eq(1).toggleClass('show');
            cnt02Image.eq(1).toggleClass('show');
            var col = $(this).attr('data-img');
            $('div.cntWrap>.content.cnt02 section .artRight .big').css({
                backgroundImage: col
            });
        });
        cnt02Img.eq(2).click(function () {
            cnt02blue.css({
                width: 'calc(100% / 3 * 3)'
            });
            cnt02Text.eq(2).toggleClass('show');
            cnt02Image.eq(2).toggleClass('show');
            var col = $(this).attr('data-img');
            $('div.cntWrap>.content.cnt02 section .artRight .big').css({
                backgroundImage: col
            });
        });
        //   cnt04 pc 제이쿼리 
        // 초기세팅
        cntArtG.find('.image:last').prependTo(cntArtG);
        cntArtG.css({
            marginLeft: '-98%'
        });

        cntLeft.find('.image:last').prependTo(cntLeft);
        cntLeft.css({
            marginLeft: '-100%'
        });

        // 오른쪽 무한루프
        cnt04Right.click(function () {
            cntArtG.stop().animate({
                marginLeft: '-166%'
            }, 500, function () {
                cntArtG.find('.image:first').appendTo(cntArtG);
                cntArtG.css({
                    marginLeft: '-83%'
                });
            });

            cntLeft.stop().animate({
                marginLeft: '-200%'
            }, 500, function () {
                cntLeft.find('.image:first').appendTo(cntLeft);
                cntLeft.css({
                    marginLeft: '-100%'
                });
            });
        });
        // 왼쪽 버튼
        cnt04Left.click(function () {
            cntArtG.stop().animate({
                marginLeft: '0%'
            }, 500, function () {
                cntArtG.find('.image:last').prependTo(cntArtG);
                cntArtG.css({
                    marginLeft: '-83%'
                });
            });
            cntLeft.stop().animate({
                marginLeft: '0%'
            }, 500, function () {
                cntLeft.find('.image:last').prependTo(cntLeft);
                cntLeft.css({
                    marginLeft: '-100%'
                });
            });
        });
        // 모바일 제이쿼리
        var cnt04ArtG = $('div.cntWrap>.content.cnt04 div.artRight div.ovrGrid div.images');
        $(cnt04ArtG).swipeleft(function () {
            i++;
            if (i > 3) {
                i = 3
            }
            $(this).css({
                marginLeft: i * -98 + '%'
            });
        });
        $(cnt04ArtG).swiperight(function () {
            i--;
            if (i < 1) {
                i = 1
            }
            $(this).css({
                marginLeft: i * -98 + '%'
            });
        });
    }
    //   모바일 끝
    //   cnt03 pc
    cnt03Img.eq(0).click(function () {
        cnt03Text.eq(0).toggleClass('show');
        cnt03Image.eq(0).toggleClass('show');
        var col = $(this).attr('data-img');

        cnt03LeftImage.css({
            backgroundImage: col
        });
    });
    cnt03Img.eq(1).click(function () {
        cnt03Text.eq(1).toggleClass('show');
        cnt03Image.eq(1).toggleClass('show');

        var col = $(this).attr('data-img');

        cnt03LeftImage.css({
            backgroundImage: col
        });
    });
    cnt03Img.eq(2).click(function () {

        cnt03Text.eq(2).toggleClass('show');
        cnt03Image.eq(2).toggleClass('show');

        var col = $(this).attr('data-img');

        cnt03LeftImage.css({
            backgroundImage: col
        });
    });
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
});