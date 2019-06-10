import config from "../config"
import wepy from 'wepy'

export default async function api_common ({method="POST",url="",data={}}) {
  wx.showLoading({
    title: '加载中',
  })
  try {
    var res = await wepy.request({
      url:config.base_url+url,
      data:{
        ...data
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded" //post请求设置
      },
      method:method
    })
  }catch(err){
    console.log(err)
    return {}
  }
  wx.hideLoading()
  return res
}


