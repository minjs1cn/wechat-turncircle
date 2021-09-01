var app = getApp()
const { set } = require('./localStorage')
var localStorage = require('./localStorageWithTime')

function getTimes() {
  let times = 0

  try {
    times = localStorage.get('times') || 0
  } catch (error) {
  }
  
  return times
}

// getAwardsConfig
app.awardsConfig = {
  chance: true,
  awards:[
    {'index': 0, 'name': '50元红包', image: '/image/1.fe435c7a.png'},
    {'index': 1, 'name': '谢谢参与', image: '/image/2.aeddf42c.png'},
    {'index': 2, 'name': '智能扫地机', image: '/image/3.4f7b9dfa.png'},
    {'index': 3, 'name': '谢谢参与', image: '/image/4.aeddf42c.png'},
    {'index': 4, 'name': 'iPhone12', image: '/image/5.aa7d840f.png'},
    {'index': 5, 'name': '100元话费卡', image: '/image/6.a7e75d49.png'},
    {'index': 6, 'name': '空气净化器', image: '/image/7.54bd7f52.png'},
    {'index': 7, 'name': '谢谢参与', image: '/image/8.aeddf42c.png'}
  ]
}

Page({
  data: {
    awardsList: {},
    animationData: {},
    btnDisabled: '',
    huxi: {},
    banner: '/image/banner.3dcc1472.png',
    bg: '/image/bg.9ab4f71a.jpg',
    canvas_bg: '/image/bg.png',
    light: '/image/light.png',
    btn2: '/image/97a10a5cbd0c9cf3f606.22039f9e.png',
    btn1: '/image/5ee82ba891e04abd3eb7.d4b7902b.png',
    ziduo: '/image/dizuo.ec8266b3.png',
    lightAnimationData: {},
    times: '今日剩余：1次',
    guize_title: '/image/titles.84aa5c34.png',
    close: '/image/close.png',
    result: null,
    modal_bg: '/image/e7d8442c-37614c5a-1622096086696.png',
    card1: '/image/card1.png',
    cards: [
      '/image/card2-no.png',
      '/image/card2-no.png',
      '/image/card2-no.png'
    ],
    card2: '/image/card2-yes.png',
    modal: -1,
    back1: false,
    back2: false,
    back3: false,
    clicked: false,
    fade: -1,
    t: 0
  },
  showGuize: function() {
    this.setData({
      modal: 0
    })
  },
  showModal: function() {
    this.setData({
      modal: 2
    })
    
    this.setData({
      fade: 0
    })

    this.t = setInterval(() => {
      console.log(this.data.fade)
      if (this.data.fade === 3) {
        this.data.fade = 0
      }

      this.setData({
        fade: ++this.data.fade
      })
    }, 1000)
  },
  download: function() {
   setTimeout(() => {
    wx.navigateToMiniProgram({
      appId: '',
      path: 'packages/user/coupon/detail/index?type=promocard&id=11836493&alias=2726csmt&sign=f8a4c62aeb32db75655013c818e8fa92&shopAutoEnter=1'
    })
   }, 1000)
  },
  cleara() {
    clearInterval(this.t)
  },
  click1: function() {
    if (this.data.clicked) return
    this.cleara()
    this.data.clicked = true
    this.data.cards[0] = this.data.card2
    this.setData({
      cards:  this.data.cards,
      back2: true,
      back3: true
    })
    setTimeout(() => {
      this.setData({
        back1: true,
      })
      this.download()
    }, 500)
  },
  click2: function() {
    if (this.data.clicked) return
    this.cleara()
    this.data.clicked = true
    this.data.cards[1] = this.data.card2
    this.setData({
      cards:  this.data.cards,
      back1: true,
      back3: true
    })
    setTimeout(() => {
      this.setData({
        back2: true,
      })
      this.download()
    }, 500)
  },
  click3: function() {
    if (this.data.clicked) return
    this.cleara()
    this.data.clicked = true
    this.data.cards[2] = this.data.card2
    this.setData({
      cards:  this.data.cards,
      back2: true,
      back1: true
    })
    setTimeout(() => {
      this.setData({
        back3: true,
      })
      this.download()
    }, 500)
  },
  showPrize: function() {
    this.setData({
      modal: 1
    })
  },
  close: function() {
    this.setData({
      modal: -1
    })
  },
  idel: function() {
    var that = this;
    var animationRun = wx.createAnimation({
      duration: 4000 * 10000000,
      timingFunction: 'ease'
    })
    that.animationRun = animationRun
    animationRun.rotate(360 * 10000000).step()
    that.setData({
      animationData: animationRun.export(),
    })
  },
  showThanks: function() {
    var runNum = 8;
    var that = this;
    var awardIndex = [1, 3, 7][Math.random() * 3 >> 0]

    // 旋转抽奖
    app.runDegs = app.runDegs || 0
    console.log('deg', app.runDegs)
    app.runDegs = app.runDegs + (360 - app.runDegs % 360) + (360 * runNum - awardIndex * (360 / runNum))
    console.log('deg', app.runDegs)

    var animationRun = wx.createAnimation({
      duration: 4000,
      timingFunction: 'ease'
    })
    that.animationRun = animationRun
    animationRun.rotate(app.runDegs).step()
    that.setData({
      animationData: animationRun.export(),
      btnDisabled: 'disabled'
    })
  },
  showResult: function() {
    var runNum = 8;
    var that = this;;
    var awardIndex = 2

    // 旋转抽奖
    app.runDegs = app.runDegs || 0
    console.log('deg', app.runDegs)
    app.runDegs = app.runDegs + (360 - app.runDegs % 360) + (360 * runNum - awardIndex * (360 / runNum))
    console.log('deg', app.runDegs)

    var animationRun = wx.createAnimation({
      duration: 4000,
      timingFunction: 'ease'
    })
    that.animationRun = animationRun
    animationRun.rotate(app.runDegs).step()
    that.setData({
      animationData: animationRun.export(),
      btnDisabled: 'disabled'
    })

    setTimeout(() => {
      this.showModal()
    }, 4500)
  },
  getLottery: function () {
    let times =  getTimes()
    if (app.globalData.total - times <= 0) return

    this.showResult()
    localStorage.set('times', times - 0 + 1)
    this.reloadTimes()
  },
  light: function() {
    var lightAnimationData = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease'
    })

    let next = true;
    setInterval(function () {
      if (next) {
        lightAnimationData.opacity(0).step()
        next = !next;
      } else {
        lightAnimationData.opacity(1).step()
        next = !next;
      }
      this.setData({  //输出动画  
        lightAnimationData: lightAnimationData.export()
      })
    }.bind(this), 500)
  },
  btn: function() {
    var lightAnimationData = wx.createAnimation({
      duration: 500,
    })

    let next = true;
    setInterval(function () {
      if (next) {
        lightAnimationData.scale(1.1, 1.1).step()
        next = !next;
      } else {
        lightAnimationData.scale(1, 1).step()
        next = !next;
      }
      this.setData({  //输出动画  
        huxi: lightAnimationData.export()
      })
    }.bind(this), 600)
  },
  table: function() {
    var lightAnimationData = wx.createAnimation({
      duration: 500,
    })

    let next = true;
    setInterval(function () {
      if (next) {
        lightAnimationData.scale(1.1, 1.1).step()
        next = !next;
      } else {
        lightAnimationData.scale(1, 1).step()
        next = !next;
      }
      this.setData({  //输出动画  
        huxi: lightAnimationData.export()
      })
    }.bind(this), 600)
  },
  reloadTimes: function() {
    let times = getTimes()
    if (times === app.globalData.total) {
      this.setData({
        times: '今日次数已用完'
      })
    } else {
      this.setData({
        times: '今日剩余' + (app.globalData.total - times) + '次'
      })
    }
  },
  onReady: function (e) {
    this.light()
    this.btn()
    this.idel()
    this.reloadTimes()

    var that = this;

    // 绘制转盘
    var awardsConfig = app.awardsConfig.awards,
        len = awardsConfig.length,
        html = [],
        turnNum = 1 / len  // 文字旋转 turn 值
    that.setData({
      btnDisabled: app.awardsConfig.chance ? '' : 'disabled'  
    })

      for (var i = 0; i < len; i++) {
        // 奖项列表
        html.push({turn: i * turnNum + 'turn', lineTurn: i * turnNum + turnNum / 2 + 'turn', award: awardsConfig[i].name, image: awardsConfig[i].image});    
      }
      that.setData({
        awardsList: html
      });
  }
})
