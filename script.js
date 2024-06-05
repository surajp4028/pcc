const body = document.querySelector('body'),
      navMenu = body.querySelector('.panel'),
      closeicon = body.querySelector('.clsicon'),
      openicon = body.querySelector('.menu'),
      submi = document.getElementById("submit");
      // menu
    
      openicon.addEventListener("click", ()=>{
        navMenu.classList.add('open');
        console.log("h")
      });
      closeicon.addEventListener("click",()=>{
        navMenu.classList.remove('open');
      });


      submi.addEventListener("click", ()=>{
        fname = document.querySelector('.fname').value,
        lname = document.getElementById("exampleFormControlInput2").value,
        email = document.getElementById("exampleFormControlInput3").value,
        msg = document.getElementById("exampleFormControlTextarea1").value;

        alert('First Name :  '+fname+', Last Name :  '+lname+ ', Message :  '+msg);
        console.log(fname, lname, email, msg);
     
      });

