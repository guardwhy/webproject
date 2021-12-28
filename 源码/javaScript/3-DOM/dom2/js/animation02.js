(function (){
  // 匀速方法
  function linearAnimation(ele, obj, func){
    clearInterval(timerId);
    timerId = setInterval(function (){
      // 2.1 flag变量用于标记是否所有的属性都执行完了动画
      let flag = true;
      for(let key in obj){
        let target = obj[key];
        // 2.2 拿到元素当前的位置
        let style = getComputedStyle(ele);
        let begin = parseInt(style[key]) || 0;
        // 2.3 定义变量记录步长
        let step = (begin - target) > 0 ? -13 : 13;
        // 2.3 计算新的位置
        begin += step;
        // 条件判断
        if(Math.abs(target - begin) > Math.abs(step)){
          flag = false;
        }else {
          begin = target;
        }
        // 2.4 重新设置元素位置
        ele.style[key] = begin + "px";
      }
      // 条件判断
      if(flag){
        clearInterval(timerId);
        func && func();
      }
    }, 100);
  }

  // 缓动方法
  function easeAnimation(ele, obj, func){
    clearInterval(ele.timerId);
    ele.timerId = setInterval(function (){
      // 2.1 flag变量用于标记是否所有的属性都执行完了动画
      let flag = true;
      for(let key in obj){
        let target = obj[key];
        // 2.2 拿到元素当前的位置
        let style = getComputedStyle(ele);
        let begin = parseInt(style[key]) || 0;
        // 2.3 定义变量记录步长
        // 公式: (结束位置 - 开始位置) * 缓动系数(0 ~1)
        let step = (target - begin) * 0.3 ;
        // 2.3 计算新的位置
        begin += step;
        // 条件判断
        if(Math.abs(Math.floor(step)) > 1){
          flag = false;
        }else {
          begin = target;
        }
        // 2.4 重新设置元素位置
        ele.style[key] = begin + "px";
      }
      // 条件判断
      if(flag){
        clearInterval(ele.timerId);
        func && func();
      }
    }, 100);
  }
  // 将函数绑定到window对象上.
  window.linearAnimation = linearAnimation;
  window.easeAnimation = easeAnimation;
})();