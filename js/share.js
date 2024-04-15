// 分享本页
function share_() {
  let url = window.location.origin + window.location.pathname
  try {
    // 截取标题
    var title = document.title;
    var subTitle = title.endsWith("自然公園の精神时光屋") ? title.substring(0, title.length - 14) : title;
    navigator.clipboard.writeText('Hakuhiro的站内分享\n标题：' + subTitle + '\n链接：' + url + '\n欢迎来访！🍭🍭🍭');
    new Vue({
      data: function () {
        Snackbar.show({
          text: '复制链接成功,您现在可以通过粘贴直接跟小伙伴分享本站啦~',
          pos: 'top-left',
          showAction: false
        })
      }
    })
  } catch (err) {
    console.error('复制失败！', err);
  }
  // new ClipboardJS(".share", { text: function () { return '标题：' + document.title + '\n链接：' + url } });
  // btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
}

// 防抖
function share() {
  debounce(share_, 300);
}
