import '../scss/styles.scss'
import 'bootstrap/js/dist/dropdown'
import Tab from 'bootstrap/js/dist/tab'
import Modal from 'bootstrap/js/dist/modal'
import Collapse from 'bootstrap/js/dist/collapse'
import Offcanvas from 'bootstrap/js/dist/offcanvas'
import Tooltip from 'bootstrap/js/dist/tooltip'
import Popover from 'bootstrap/js/dist/popover'

import 'swiper/css';
import Swiper, { Pagination } from 'swiper';
import 'swiper/css/pagination';

/** 
 * 탭(초기화 필요x)
 * 1. 이벤트 유형
 * hide.bs.tab | 현재 활성 탭에서
 * show.bs.tab | 표시할 탭에서
 * hidden.bs.tab | 이전 활성 탭에서 hide.bs.tab 이벤트와 동일한 탭
 * show.bs.tab | 새로 활성화된 방금 표시된 탭에서 show.bs.tab 이벤트와 동일한 탭
 * 2. 함수 event
 * event.target | 새로 활성화된 탭
 * event.relatedTarget | 이전 활성화된 탭
*/
// const triggerTabList = document.querySelectorAll('#pills-tab button')
// triggerTabList.forEach(triggerEl => {
//   triggerEl.addEventListener('show.bs.tab', event => {
//     console.log(event.target)
//   })
//   // data-bs-toggle="tab" 사용하지 않고 스크립트로 작성
//   // const tabTrigger = new Tab(triggerEl)
//   // triggerEl.addEventListener('click', event => {
//   //   event.preventDefault()
//   //   tabTrigger.show()
//   // })
// })

/**
 * 모달(초기화 필요x)
 * 1. 이벤트 유형
 * hide.bs.modal | 이 이벤트는 hide 인스턴스 메서드가 호출되면 즉시 시작됩니다.
 * hidden.bs.modal | 이 이벤트는 모달이 사용자에게 숨겨졌을 때 시작됩니다(CSS 전환이 완료될 때까지 기다림).
 * hidePrevented.bs.modal | 이 이벤트는 모달이 표시되고 배경이 정적이며 모달 외부를 클릭하면 시작됩니다. 이스케이프 키를 누르고 키보드 옵션이 false로 설정된 경우에도 이벤트가 시작됩니다.
 * show.bs.modal | 이 이벤트는 show 인스턴스 메소드가 호출될 때 즉시 발생합니다. 클릭으로 인해 발생한 경우 클릭된 요소는 이벤트의 relatedTarget 속성으로 사용할 수 있습니다.
 * shown.bs.modal | 이 이벤트는 모달이 사용자에게 표시될 때 시작됩니다(CSS 전환이 완료될 때까지 기다림). 클릭으로 인해 발생한 경우 클릭된 요소는 이벤트의 relatedTarget 속성으로 사용할 수 있습니다.
 */
const myModalEl = document.querySelector('#exampleModalToggle2')
new Modal(myModalEl, {
  backdrop: 'static'
})
// myModalEl.addEventListener('hidden.bs.modal', event => {
//   console.log(event.target)
// })

/**
 * 콜랩스(초기화 필요x, 아코디언 같이 사용)
 * 1. 이벤트 유형
 * hide.bs.collapse	| hide이 이벤트는 메서드가 호출 되면 즉시 시작됩니다.
 * hidden.bs.collapse	| 이 이벤트는 축소 요소가 사용자에게 숨겨졌을 때 시작됩니다(CSS 전환이 완료될 때까지 기다림).
 * show.bs.collapse	| show이 이벤트는 인스턴스 메서드가 호출 되는 즉시 발생합니다.
 * shown.bs.collapse | 이 이벤트는 축소 요소가 사용자에게 표시되면 시작됩니다(CSS 전환이 완료될 때까지 대기).
 */
// const myCollapsible = document.querySelector('#collapseExample')
// myCollapsible.addEventListener('hidden.bs.collapse', event => {
//   console.log(event.target)
// })
// const collapseElementList = document.querySelectorAll('.collapse');
// [...collapseElementList].map(collapseEl => new Collapse(collapseEl))

/**
 * 오프캔버스(초기화 필요x)
 * 1. 이벤트 유형
 * hide.bs.offcanvas | hide이 이벤트는 메서드가 호출 되면 즉시 시작됩니다.
 * hidden.bs.offcanvas |	이 이벤트는 offcanvas 요소가 사용자에게 숨겨졌을 때 시작됩니다(CSS 전환이 완료될 때까지 기다림).
 * hidePrevented.bs.offcanvas | 이 이벤트는 오프캔버스가 표시되고 배경이 static이고 오프캔버스 외부를 클릭하면 시작됩니다.이벤트는 이스케이프 키를 누르고 keyboard옵션이 로 설정된 경우에도 발생합니다 false.
 * show.bs.offcanvas	| show이 이벤트는 인스턴스 메서드가 호출 되는 즉시 발생합니다.
 * shown.bs.offcanvas | 이 이벤트는 offcanvas 요소가 사용자에게 표시될 때 시작됩니다(CSS 전환이 완료될 때까지 기다림).
 */
// const myOffcanvas = document.querySelector('#offcanvasRight')
// myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
//   console.log(event.target)
// })

/** 
 * 툴팁(초기화 필요o)
 * 1. 이벤트 유형
 * hide.bs.tooltip |	hide이 이벤트는 인스턴스 메서드가 호출 되면 즉시 시작됩니다. 
 * hidden.bs.tooltip | 이 이벤트는 팝오버가 사용자에게 숨겨지면 시작됩니다(CSS 전환이 완료될 때까지 기다림).
 * inserted.bs.tooltip | 이 이벤트는 show.bs.tooltip툴팁 템플릿이 DOM에 추가되었을 때 이벤트 후에 시작됩니다. 
 * show.bs.tooltip | show이 이벤트는 인스턴스 메서드가 호출 되는 즉시 발생합니다.
 * shown.bs.tooltip | 이 이벤트는 팝오버가 사용자에게 표시되면 시작됩니다(CSS 전환이 완료될 때까지 기다림).
*/
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
/** 
 * 팝오버(초기화 필요o)
 * 1. 이벤트 유형 
 * hide.bs.popover | hide이 이벤트는 인스턴스 메서드가 호출 되면 즉시 시작됩니다.
 * hidden.bs.popover | 이 이벤트는 팝오버가 사용자에게 숨겨지면 시작됩니다(CSS 전환이 완료될 때까지 기다림).
 * inserted.bs.popover | 이 이벤트는 show.bs.popover팝오버 템플릿이 DOM에 추가되었을 때 이벤트 후에 시작됩니다.
 * show.bs.popover | show이 이벤트는 인스턴스 메서드가 호출 되는 즉시 발생합니다.
 * shown.bs.popover | 이 이벤트는 팝오버가 사용자에게 표시되면 시작됩니다(CSS 전환이 완료될 때까지 기다림).
*/
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
[...popoverTriggerList].map(popoverTriggerEl => new Popover(popoverTriggerEl))

/** 
 * 스와이프(https://swiperjs.com/get-started)
*/
new Swiper('.mySwiper', {
  modules: [Pagination],
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

/**
 * 타입 체크
 */
// function checkType(data) {
//   return Object.prototype.toString.call(data).slice(8, -1)
// }
