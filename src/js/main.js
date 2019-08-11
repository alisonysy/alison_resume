{
  let data_uni={
    uoa:{
     uni:'奥克兰大学',
     major:'信息管理',
     gpa:'7.8/9.0',
     time:'2016.02 - 2019.05' 
    },
    xmu:{
      uni:'厦门大学',
      major:'法语语言文学',
      gpa:'3.6/4.0',
      time:'2013.09 - 2015.12' 
    }
  }
  let vm_uni = new Vue({
    el:'.educationDetails',
    data:data_uni
  })
}

{
  let data_basics={
    basics:{
      bday:'1995.01',
      gender:'女',
      mobile:'13632319380',
      email:'452592978@qq.com',
      id:'中共党员'
    }
  };
  let vm_basics = new Vue({
    el:'#basics',
    data:data_basics
  })
}

{
  let data_projects={
    pro_style_descr:{
      padding: '0rem 2rem 0 2rem',
      position: 'relative'
    },
    pro_style_descr_p:{
      lineHeight: '1.7rem',
      marginTop: '0.8rem'
    },
    pro_style_a:{
      color:'#b38578',
      paddingLeft: '1rem'
    },
    pro_style_p:{
      margin:'0.6rem 0'
    },
    pro_style_h3:{
      fontSize: '1rem',
      margin: '2rem auto 1rem auto'
    }
  };
  let vm_projects = new Vue({
    el:'section.projects',
    data:data_projects
  })
}

{
  let data_intern = {
    company:{
      jd:'京东华南',
      ag:'TheAgency88',
      yt:'YouTutor',
      pt:'深圳零壹创新科技公司'
    },
    position:{
      jd:'整合营销实习生',
      ag:'数字营销实习生',
      yt:'微信运营负责人',
      pt:'前端开发工程师'
    },
    time:{
      jd:'2018.09-2018.12',
      ag:'2017.12-2018.06',
      yt:'2018.01-2018.07',
      pt:'2019.04-现在'
    },
    descr_jd:{
      comp:'京东JD.COM华南分公司',
      d1:'参与京东华南专享小程序卖场的活动页面策划搭建，根据监测数据优化页面布局；',
      d2:'负责京东华南微博运营，策划和执行微博线上活动，7天内粉丝数量上涨100%；',
      d3:'跟进京东2018全球好物节的广州地标打call拍摄和快闪店social传播，负责冠名游船“京东号”互动拍摄'
    },
    descr_ag:{
      comp:'为有意进入新西兰华人市场的国外品牌进行微信平台策划，客户包括保乐力加马爹利、雀巢普瑞纳、汉堡王等',
      d1:'参与新西兰Burger King、牛油果种植者协会、Hell Pizza微信公众号菜单栏构建和H5内容策划；',
      d2:'负责公众号竞品资料搜集和对比分析，根据反馈与设计团队沟通，团队协作和沟通能力强'
    },
    descr_yt:{
      comp:'新西兰奥克兰大学创业团队，旨在为新西兰中国留学生提供学业辅导、求职考证辅导等业务',
      d1:'根据运营目标搭建微信平台模块，管理4个模块，统一视觉风格;',
      d2:'策划、设计、撰写推文，6个月内关注人数增长300%，基本覆盖奥克兰大学中国留学生'
    },
    descr_pt:{
      comp:'以日本和欧美为主要市场，自主研发、设计和销售智能硬件和电子产品',
      d1:'负责Shopify官网新版(https://ipitaka.com/)的页面效果实现和日常维护更新，熟悉Shopify API和后台系统',
      d2:'负责PITAKA智能家居管理app的iOS版的维护和更新，目前正在开发与Shopify后台数据打通的商城功能，主要使用React Native和XCode',
      d3:'通过AJAX和表单，完成内部创意搜集后台页面的逻辑交互和页面实现'
    }
  };
  let vm_intern = new Vue({
    el:'section.internship',
    data:data_intern
  })
}