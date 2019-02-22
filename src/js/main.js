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