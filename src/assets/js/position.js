const getAbsolute = (target, reference=document) => {
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

export default {
  getAbsolute
};
