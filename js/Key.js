// F12提示禁用
document.onkeydown = function (e) {
  if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) {
    debounce(function () {
      Snackbar.show({
        text: "已打开开发者模式，扒源请遵循GPL协议！",
        pos: 'top-left',
        showAction: false
      })
    }, 300);
  }
};
// 防按键抖动
// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
if (TT !== null) clearTimeout(TT);
TT = setTimeout(fn, time);
}

// 复制提醒
document.oncopy = function () {
  Snackbar.show({
      text: '复制成功,快分享给你的小伙伴吧~',
      pos: 'top-right',
      showAction: false
  });
};