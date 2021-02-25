import util from "./util";

const eventHandle = {
  getEvent: function(event) {
    return event || window.event;
  },
  addEvent: function(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  getWheelDelta: function(event) {
    return event.wheelDelta ? event.wheelDelta : -event.detail * 40;
  }
};

const addScrollListener = (
  handler = delta => {
    console.log(delta);
  },
  delay = 200
) => {
  let mouseHandle = util.throttle(
    event => {
      event = eventHandle.getEvent(event);
      let delta = eventHandle.getWheelDelta(event);
      handler(delta);
    },
    this,
    delay
  );
  eventHandle.addEvent(document, "mousewheel", mouseHandle);
  eventHandle.addEvent(document, "DOMMouseScroll", mouseHandle);
};

window.memo = {
  startY: 0
  // isSlideOver: true
};

const addSlideListener = (slideUp = () => {}, slideDown = () => {}) => {
  addScrollListener(delta => {
    if (delta != 0) {
      window.memo.startY = delta;
    } else {
      if (window.memo.startY > 0) {
        slideDown();
      } else if (window.memo.startY < 0) {
        slideUp();
      }
    }
  });
};

const addMobileSlideListener = (slideUp = () => {}, slideDown = () => {}) => {
  // 手指接触屏幕
  document.addEventListener("touchstart", event => {
    window.memo.startY = event.touches[0].pageY;
  });
  //手指离开屏幕
  document.addEventListener("touchend", event => {
    let endY = event.changedTouches[0].pageY;
    let delta = endY - window.memo.startY;
    if (delta > 0) {
      slideDown();
    } else if (delta < 0) {
      slideUp();
    }
  });
  // 阻止 touchmove 下拉刷新
  document.addEventListener("touchmove", event => {
    event.preventDefault();
  });
};

export default {
  addScrollListener,
  addSlideListener,
  addMobileSlideListener
};
