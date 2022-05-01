// 버튼 0에 orange 클래스명 부착
// 박스 0에 show 클래스명 부착
// 기존 버튼/ 박스에 있는 orange, show 제거
// 버튼 0 누르면 :
// 1. 버튼0에 orange 추가, 모든버튼에 붙은 orange 클래스명 제거
// 2. div에 붙은 show 클래스명 제거, divdp show 클래스 추가

// for (let i = 0; i < $('.tab-button').length; i++) {
//   $('.tab-button')
//     .eq(i)
//     .on('click', function () {
//       openTab(i)
//     });
// }

// $('.tab-button')
//   .eq(1)
//   .on('click', function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
//   });

// $('.tab-button')
//   .eq(2)
//   .on('click', function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
//   });

function openTab(v) {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(v).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(v).addClass('show');
}
// 탭 기능 다르게 만들기-> 이벤트리스너 줄이기(램 용량 이점)
document.querySelector('.list').addEventListener('click', function (e) {
  openTab(e.target.dataset.id);
});
