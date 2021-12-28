(function (){
  // 匀速方法
  let timerId = null;
  function linearAnimation(ele, target){
    clearInterval(timerId);
    timerId = setInterval(function (){
      // 2.1 拿到元素当前的位置
      let begin = parseInt(ele.style.marginLeft) || 0;
      // 2.2 定义变量记录步长
      let step = (begin - target) > 0 ? -13 : 13;
      // 2.3 计算新的位置
      begin += step;
      // 条件判断
      if(Math.abs(target - begin) <= Math.abs(step)){
        // 清空
        clearInterval(timerId);
        begin = target;
      }
      // 2.4 重新设置元素位置
      ele.style.marginLeft = begin + "px";
    }, 100);
  }

// 缓动方法
  function easeAnimation(ele, target){
    clearInterval(timerId);
    timerId = setInterval(function (){
      // 2.1 拿到元素当前的位置
      let begin = parseInt(ele.style.marginLeft) || 0;
      // 2.2 定义变量记录步长
      // 公式: (结束位置 - 开始位置) * 缓动系数(0 ~1)
      let step = (target - begin) * 0.3;
      console.log(step);
      // 2.3 计算新的位置
      begin += step;
      // 条件判断
      if(Math.abs(Math.floor(step)) <= 1){
        // 清空
        clearInterval(timerId);
        begin = target;
      }
      // 2.4 重新设置元素位置
      ele.style.marginLeft = begin + "px";
    }, 100);
  }
  // 将函数绑定到window对象上.
  window.linearAnimation = linearAnimation;
  window.easeAnimation = easeAnimation;
})();