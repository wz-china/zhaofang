import wepy from 'wepy'

export default class CommonMethods extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }

  //公共方法
  previewImage(cur,list){
    wepy.previewImage({
      current: cur, // 当前显示图片的http链接
      urls: list// 需要预览的图片http链接列表
    })
  }

  //公共事件
  methods = {

    //跳往普通页面
    gotoCommonPage (page,params=0) {

      if(page == "out"){

        try{
          let res = wepy.showModal({
            title: '跳转',
            content: `即将进入${params}`,
          })
          console.log("跳转了")
        }catch (err){

        }
        return
      }

      let param = ""
      if(params != 0){
        param = '?'+ params
      }
      wepy.navigateTo({
        url:`/pages/${page}${param}`
      })
    },

    //跳往首页
    gotoTabPage(page){
      wepy.switchTab({
        url:`/pages/${page}`
      })
    },


  }

  onShow() {
  }

  onLoad() {
  }
}
