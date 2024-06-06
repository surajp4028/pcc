const body = document.querySelector('body'),
      navMenu = body.querySelector('.panel'),
      closeicon = body.querySelector('.clsicon'),
      openicon = body.querySelector('.menu'),
      submi = document.getElementById("submit"),
      photography = document.getElementById("photography"),
      development = document.getElementById("development"),
      uiux = document.getElementById("ui-ux"),
      all = document.getElementById("all"),
      branding = document.getElementById("branding"),
      tabdev = body.querySelector(".development"),
      tabui = body.querySelector(".ui-ux"),
      tabbrand = body.querySelector(".branding"),
      moon = document.getElementById("moon"),
      sun = document.getElementById('sun'),
      education = document.getElementById('education'),
      experience = document.getElementById('experince'),
      tabedu = document.getElementById('edu'),
      tabexp = document.getElementById('exp');
      // menu
    
      openicon.addEventListener("click", ()=>{
        navMenu.classList.add('open');
        console.log("h")
      });
      closeicon.addEventListener("click",()=>{
        navMenu.classList.remove('open');
      });

      moon.addEventListener("click",(event)=>{
        body.classList.toggle('dark-theme')
      });
     


      submi.addEventListener("click", ()=>{
        fname = document.querySelector('.fname').value,
        lname = document.getElementById("exampleFormControlInput2").value,
        email = document.getElementById("exampleFormControlInput3").value,
        msg = document.getElementById("exampleFormControlTextarea1").value;

        alert('First Name :  '+fname+', Last Name :  '+lname+ ', Message :  '+msg);
        console.log(fname, lname, email, msg);
     
      });

    //   photography
   
    photography.addEventListener("click",()=>{
        photography.classList.add("active");
        all.classList.remove('active');
        development.classList.remove('active');
        uiux.classList.remove('active');
        branding.classList.remove('active');

        tabui.classList.add("hidden");
        tabbrand.classList.add("hidden");
      });
      development.addEventListener("click",()=>{
        development.classList.add("active");
        all.classList.remove('active');
        photography.classList.remove('active');
        uiux.classList.remove('active');
        branding.classList.remove('active');

        tabui.classList.add("hidden");
        tabbrand.classList.add("hidden");

      });

      uiux.addEventListener("click",()=>{
        uiux.classList.add("active");
        all.classList.remove('active');
        photography.classList.remove('active');
        development.classList.remove('active');
        branding.classList.remove('active');

        tabui.classList.remove("hidden");
        tabdev.classList.add("hidden");
        tabbrand.classList.add("hidden");
         
      });
      branding.addEventListener("click",()=>{
        branding.classList.add("active");
        all.classList.remove('active');
        photography.classList.remove('active');
        development.classList.remove('active');
        uiux.classList.remove('active');

        tabui.classList.add("hidden");
        tabdev.classList.add("hidden");
        tabbrand.classList.remove("hidden")
      });
      all.addEventListener("click",()=>{
        all.classList.add("active");
        development.classList.remove('active');
        photography.classList.remove('active');
        development.classList.remove('active');
        uiux.classList.remove('active');
        branding.classList.remove('active');

        tabui.classList.remove("hidden");
        tabdev.classList.remove("hidden");
        tabbrand.classList.remove("hidden")
    
      });

      tabbrand.addEventListener("click",()=>{
        console.log("clicked")
      });
      

// resume
education.addEventListener("click",()=>{
    education.classList.add("active");
    experience.classList.remove('active');

    tabedu.classList.remove('hidden');
    tabexp.classList.add('hidden');

  });
  experience.addEventListener("click",()=>{
    experience.classList.add("active");
    education.classList.remove('active');
    tabedu.classList.add('hidden');
    tabexp.classList.remove('hidden');

  });



      
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        centerSlide: true,
        fade: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950 : {
                slidesPerView: 3,
            }
        },
      });
