const gallery = document.querySelector('#galleryPictures'),
      aboutPage = document.querySelector('#about'),    
      aboutButton = document.querySelector('.aboutButton');
let links = document.querySelectorAll('.cuteness'); 



window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
      let output = ``;
                      for(let i = 0; i < 5; i++) {
                                      output += `
                                   <div class="col m5ths s6 box-images"> 
                                   <img src="/Images/Products/${i}.jpg" itemprop="thumbnail" alt="Image description" class="col m12 s12 shadow p-3 mb-5 bg-secondary rounded my-images"/>
                                   </div>
                                      `                       
      }
     gallery.innerHTML = output;
  });

aboutButton.addEventListener('click', showAbout);

function showAbout() {
aboutPage.style.display = 'block';
gallery.style.display = 'none';
}


function currentPage(page,length) {
    let current = document.querySelector('#dropdownMenuLink');
    current.textContent = page;
    gallery.style.display = 'flex'
    about.style.display = 'none';
    let output = ``;
                    for(let i = 0; i < length; i++) {
                        output += `
                        <figure itemprop="associatedMedia" class="col m5ths s6 box-images">
                            <a href="/Images/${page}/${i}.jpg" itemprop="contentUrl" data-size="800x700"  >
                                <img src="/Images/${page}/${i}.jpg" itemprop="thumbnail" alt="Image description" class="col m12 s12 shadow p-3 mb-5 bg-secondary rounded my-images"/>
                            </a>
                            <figcaption itemprop="caption description">
                            <h2 class="lightbox-name"> ${page} Item # ${i+1}</h2> 
                            <h3 class="lightbox-price"> Price: ${Math.floor(Math.random()*100)} pesos </h3>
                            
                            </figcaption>
                    </figure>`
                    }
        return gallery.innerHTML = output;
}





            links.forEach(link => {
                            link.addEventListener('click', (e)=> {
                                const page = e.target.textContent;
                                if(page ==='Perfume') {                   
                                    currentPage(page, 25)
                                } else if (page ==='Jeans') {
                                    currentPage(page, 6)
                                } else if (page ==='T-Shirt') {
                                    currentPage(page ,10)
                                } else if (page ==='Underwear') {
                                    currentPage(page, 6)
                                } else if (page ==='Wax') {
                                    currentPage(page,6)
                                } else if (page ==='Categories') {
                                    currentPage(page,5)
                                } 
                        
                            })
                    });







     /*    <figure itemprop="associatedMedia" class="col m5ths s6 box-images">
                <a href="/Images/Perfume/${i}.jpg" itemprop="contentUrl" data-size="800x700"  >
                    <img src="/Images/Perfume/${i}.jpg" itemprop="thumbnail" alt="Image description" class="col m12 s12 shadow p-3 mb-5 bg-secondary rounded my-images"/>
                </a>
                <figcaption itemprop="caption description">${i}</figcaption>
            </figure> */ 