{
  let data_uni={
    uoa:{
     uni:'奥克兰大学',
     major:'信息管理和市场营销(双专业)',
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