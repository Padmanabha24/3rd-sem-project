class Password{
    constructor()
    {
      this.pass=""
    }
    generateStrongPassword(len){
      let char="abcdefghijklmnopqrstuvwxyz"
     let  num="1234567890"
      let special="!@#$%^&*()"
      if(len<3){
        console.log("password length must be greater the 3")
      }
      else{
        let i=0;
        while(i<len)
        {
        this.pass +=char[math.floor(math.random()*char.length)]
        this.pass +=num[math.floor(math.random()*num.length)]
        this.pass +=special[math.floor(math.random()*special.length)]
          i +=3;
        }
      }
    }
    }
    let p = new Password()
    console.log(p.generateStrongPassword(5))