$(function () {

  var scrollDirection = {
    UP: 'up',
    DOWN: 'down'
  };

  var lastScrollTop = 0;
  var currentDirection = null;

  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();

    if (currentScroll > lastScrollTop) {
      // Down
      currentDirection = scrollDirection.DOWN;
    } else {
      // Up
      currentDirection = scrollDirection.UP;
    }

    lastScrollTop = currentScroll;
  });


  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var tabPosY = $('.prodDetailTabBox .tabTitBox').offset().top;
    var headerHeight = 0;

    if (currentDirection == scrollDirection.UP) {
      headerHeight = $('.stco_header').outerHeight() + $('.gnb_nav2').outerHeight()
    } else if (currentDirection == scrollDirection.DOWN) {
      headerHeight = $('.gnb_nav2').outerHeight()
    }

    if (scrollTop >= tabPosY - headerHeight) {
      $('body').addClass('fixedTab');
    } else {
      $('body').removeClass('fixedTab');
    }
  });

//   $(window).scroll(function () {

//     var headerHeight = 0;

//     if (currentDirection == scrollDirection.UP) {
//       headerHeight = $('.tabTitBox').height() + $('.stco_header').outerHeight() + $('.gnb_nav2').outerHeight()
//     } else if (currentDirection == scrollDirection.DOWN) {
//       headerHeight = $('.tabTitBox').height() + $('.gnb_nav2').outerHeight()
//     }
//     var topOfScreen = $(window).scrollTop() + headerHeight;
//     var bottomOfScreen = topOfScreen + $(window).height();

//     $('.tabCont').each(function () {
//       var $tabCont = $(this);
//       var topOfElement = $tabCont.offset().top;
//       var bottomOfElement = topOfElement + $tabCont.outerHeight();

//       var inViewport = (bottomOfScreen > topOfElement) && (topOfScreen < bottomOfElement);

//       if (inViewport) {
//         var tabId = $tabCont.attr('id');
//         $('.btnTab').removeClass('on');
//         $('.btnTab[data-tab="' + tabId + '"]').addClass('on');
//         return false;
//       }
//     });
//   });



//   $('.btnTab').on('click', function (e) {
//     e.preventDefault();

//     var targetTabId = $(this).data('tab');

//     if (targetTabId) {

//       var targetOffset = $('#' + targetTabId).offset().top;
//       var buttonOffset = $(this).offset().top;

//       var headerHeight = 0;
//       if (targetOffset < buttonOffset) {
//         headerHeight = $('.tabTitBox').height() + $('.stco_header').outerHeight() + $('.gnb_nav2').outerHeight()
//       } else {
//         headerHeight = $('.tabTitBox').height() + $('.gnb_nav2').outerHeight()
//       }

//       targetOffset -= headerHeight - 2;

//       $('html, body').animate({
//         scrollTop: targetOffset
//       });
//     }
//   });


});

function targetClick(obj,target) {
  
  $('.tabTitBox .tabTit .btnTab:eq(0)').trigger('click');

  var targetOffset = $('#' + target).offset().top;
  var buttonOffset = $(obj).offset().top;

  var headerHeight = 0;
  if (targetOffset < buttonOffset) {
    headerHeight = $('.tabTitBox').height() + $('.stco_header').outerHeight() + $('.gnb_nav2').outerHeight()
  } else {
    headerHeight = $('.tabTitBox').height() + $('.gnb_nav2').outerHeight()
  }

  targetOffset -= headerHeight - 2;

  $('html, body').animate({
    scrollTop: targetOffset
  });
}

// 팝업을 엽니다.
function openPop(id) {
  $('#' + id).addClass('on');
}

// 팝업을 닫습니다.
function closePop(id) {
  $('#' + id).removeClass('on');
}
