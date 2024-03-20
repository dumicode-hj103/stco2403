$(function () {
  // 창 스크롤 이벤트를 감지하여 탭을 고정합니다.
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var headerHeight = $('.header').outerHeight();
    var tabPosY = $('.prodDetailTabBox .tabTitBox').offset().top;
    if (scrollTop >= tabPosY - headerHeight) {
      $('body').addClass('fixedTab');
    } else {
      $('body').removeClass('fixedTab');
    }
  });

  // 창 스크롤 이벤트를 감지하여 보이는 tabCont 영역을 활성화합니다.
  $(window).scroll(function () {
    // 헤더의 고정된 영역의 높이를 계산합니다.
    var headerHeight = $('.header').outerHeight();
    var topOfScreen = $(window).scrollTop() + headerHeight;
    var bottomOfScreen = topOfScreen + $(window).height();

    // 각 .tabCont 요소를 반복합니다.
    $('.tabCont').each(function () {
      var $tabCont = $(this);
      var topOfElement = $tabCont.offset().top;
      var bottomOfElement = topOfElement + $tabCont.outerHeight();

      // 뷰포트 내에 있는지 확인합니다.
      var inViewport = (bottomOfScreen > topOfElement) && (topOfScreen < bottomOfElement);

      if (inViewport) {
        // 현재 .tabCont의 ID를 가져옵니다.
        var tabId = $tabCont.attr('id');

        // 모든 버튼의 'on' 클래스를 제거하고 해당 버튼에 추가합니다.
        $('.btnTab').removeClass('on');
        $('.btnTab[data-tab="' + tabId + '"]').addClass('on');

        // 반복문을 종료하고 뷰포트 내에서 첫 번째 tabCont만 활성화합니다.
        return false;
      }
    });
  });

  // 버튼을 클릭하면 해당 tabCont로 애니메이션 스크롤됩니다.
  $('.btnTab').on('click', function (e) {
    e.preventDefault(); // 기본 링크 동작을 막습니다.

    // 스크롤 할 대상 tabCont의 ID를 가져옵니다.
    var targetTabId = $(this).data('tab');

    // 대상 tabCont의 위치를 계산합니다.
    var targetOffset = $('#' + targetTabId).offset().top;

    // 대상 tabCont로 애니메이션 스크롤합니다.
    $('html, body').animate({
      scrollTop: targetOffset
    }, 300); // 애니메이션 스크롤 속도를 조절할 수 있습니다. 단위는 밀리초입니다.
  });
});

// 팝업을 엽니다.
function openPop(id) {
  $('#' + id).addClass('on');
}

// 팝업을 닫습니다.
function closePop(id) {
  $('#' + id).removeClass('on');
}
