const getAbsolute = (target, reference = document) => {
  //因为我们会将目标元素的边框纳入递归公式中，这里先减去对应的值
  let result = {
    left: -target.clientLeft,
    top: -target.clientTop
  };
  let node = target;
  while (node != reference && node != document) {
    result.left = result.left + node.offsetLeft + node.clientLeft;
    result.top = result.top + node.offsetTop + node.clientTop;
    node = node.parentNode;
  }
  if (isNaN(reference.scrollLeft)) {
    result.right = document.documentElement.scrollWidth - result.left;
    result.bottom = document.documentElement.scrollHeight - result.top;
  } else {
    result.right = reference.scrollWidth - result.left;
    result.bottom = reference.scrollHeight - result.top;
  }
  return result;
};

const getStyle = el => {
  if (window.getComputedStyle) {
    return window.getComputedStyle(el, null);
  } else {
    return el.currentStyle;
  }
};
const getWH = (el, name) => {
  var val = name === "width" ? el.offsetWidth : el.offsetHeight,
    which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  // display is none
  if (val === 0) {
    return 0;
  }
  var style = getStyle(el);
  // 左右或上下两边的都减去
  for (var i = 0, a; (a = which[i++]); ) {
    val -= parseFloat(style["border" + a + "Width"]) || 0;
    val -= parseFloat(style["padding" + a]) || 0;
  }
  return val;
};

const getElementSize = (ele)=>{
  return {
    width: getWH(ele, 'width'),
    height: getWH(ele, 'height')
  }
}

export default {
  getAbsolute,
  getElementSize,
};
