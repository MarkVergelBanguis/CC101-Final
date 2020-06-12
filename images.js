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
                                   <img src="/Images/Products/${i}.jpg" itemprop="thumbnail" alt="Categories" class="col m12 s12 shadow p-2 mb-5 bg-secondary rounded my-images"/>
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
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function currentPage(page,length, min, max) {
    let current = document.querySelector('#dropdownMenuLink');
    current.textContent = page;
    gallery.style.display = 'flex'
    about.style.display = 'none';
     
    let output = ``;
                    for(let i = 0; i < length; i++) {
                        output += `
                        <figure itemprop="associatedMedia" class="col m5ths s6 box-images">
                            <a href="/Images/${page}/${i}.jpg" itemprop="contentUrl" data-size="800x700"  >
                                <img src="/Images/${page}/${i}.jpg" itemprop="thumbnail" alt="${page}" class="col m12 s12 shadow p-2 mb-5 bg-secondary rounded my-images"/>
                            </a>
                            <figcaption itemprop="caption description">
                            <h2 class="lightbox-name"> ${page} Item # ${i+1}</h2> 
                            <h3 class="lightbox-price"> Price: ${randomInteger(min, max)} pesos </h3>
                            
                            </figcaption>
                    </figure>`
                    }
        return gallery.innerHTML = output;
}





            links.forEach(link => {
                            link.addEventListener('click', (e)=> {
                                const page = e.target.textContent;
                                if(page ==='Perfume') {                   
                                    currentPage(page, 25, 99, 130)
                                } else if (page ==='Jeans') {
                                    currentPage(page, 7, 299, 399)
                                } else if (page ==='T-Shirt') {
                                    currentPage(page ,11, 489, 499)
                                } else if (page ==='Underwear') {
                                    currentPage(page, 6, 99, 120)
                                } else if (page ==='Wax') {
                                    currentPage(page,6, 99, 130)
                                } else if (page ==='Categories') {
                                    currentPage(page,5)
                                } 
                        
                            })
                    });






