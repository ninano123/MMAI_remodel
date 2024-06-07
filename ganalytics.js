// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-2QS95SX0QP"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-2QS95SX0QP');
// </script>

// Google Analytics 추적 ID
const GA_TRACKING_ID = 'G-2QS95SX0QP';

// Google Analytics 초기화 코드
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', GA_TRACKING_ID);

// 페이지뷰 추적
export const trackPageView = (location) => {
  gtag('event', 'page_view', {
    page_location: location.href,
    page_path: location.pathname,
    page_title: document.title
  });
};

// 이벤트 추적
export const trackEvent = (action, category, label) => {
  gtag('event', action, {
    event_category: category,
    event_label: label
  });
};