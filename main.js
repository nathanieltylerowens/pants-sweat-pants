const categoryArr = [
  {
    section: 'Mens',
    imgURL: 'https://i.postimg.cc/nVdD4h39/mensfinal.jpg',
    description: 'Comfort is very important to me. I think people live better in big houses and in big clothes. For me, the summer will be pure gray - mother-of-pearl gray, very pale gray. To me, this is the big statement for summer.'
  },
  {
    section: 'Womens',
    imgURL: 'https://i.postimg.cc/Zny4vHfc/womensfinal.jpg',
    description: 'Awkwardness gives me great comfort. Ive never been cool, but Ive felt cool. Ive been in the cool place, but I wasnt really cool - I was trying to pass for hip or cool. Its the awkwardness thats nice.'
  },
  {
    section: 'Kids',
    imgURL: 'https://i.postimg.cc/KYvK3XtD/kidsfinal.jpg',
    description: 'Fashion is about dressing according to whats fashionable. Style is more about being yourself. I am not interested in shock tactics. I just want to make beautiful clothes. I am not interested in shock tactics.'
  }
]

const sweatpants = [
  {
    id: 0,
    name: 'Nicholas Cage Face',
    gender: "Male",
    price: 100, 
    img: "https://contestimg.wish.com/api/webimage/5ba44688236cce377bb52685-large.jpg?cache_buster=978868a7abef943d5963ca125b8b4c78",
    description: "These are the face of the one true actor Sir Nicholas Cage. He himself wears these daily. He's one of our biggest Customers!"
  },
  {
    id: 1,
    name: 'Boerum Jogger',
    gender: "Female",
    price: 30, 
    img: "https://cdn.shopify.com/s/files/1/0951/7126/products/W_Boerum_Jogger_Heather_Grey_1200x.jpg?v=1563225764",
    description: "Sleek athletic fit jogger sweatpants with patented Sweaty's sweat absorbtion technology built right in! You'll never have to shower again!"
  },
  {
    id: 2,
    name: 'Cotton Jogger',
    gender: "Kids",
    price: 10, 
    img: "https://images-na.ssl-images-amazon.com/images/I/81Qoecp1H-L._AC_UX466_.jpg",
    description: "A simple pair of child size sweatpants. Good enough for any kid's rough and tumble lifestyle. Available for a limited time only!"
  },
  {
    id: 3,
    name: 'Non-Elastic',
    gender: "Male",
    price: 20, 
    img: "https://cdn2.bigcommerce.com/server3100/1a4f5/products/46/images/585/0700M__new_gray_heather__78305.1478918250.1280.1280.jpg?c=2",
    description: "The looser the better, that's what we always say! With these non-elastic swishy sweats, you'll have a full range of motion no matter the commotion!"
  },
  {
    id: 4,
    name: 'Drawstring Harem Jogger',
    gender: "Female",
    price: 25, 
    img: "https://images-na.ssl-images-amazon.com/images/I/61%2BQKzcZiEL._AC_UX342_.jpg",
    description: "Tie 'em up! These sweats offer an enhanced Sweaty's drawstring technology previously unknown to human kind. Simply tie, and forget!"
  },
  {
    id: 5,
    name: 'Cozy Fleece',
    gender: "Kids",
    price: 15, 
    img: "https://cdn.shoplightspeed.com/shops/613188/files/9352569/600x600x1/chaser-kids-chaser-kids-girls-love-cozy-sweatpants.jpg",
    description: "These Sweaty's sweats are perfect for inside or outside play time, these sweats will keep your child moving to his or her heart's content!"
  }
]

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildCategoryCards = (arr) => {
  let domString = '';
  for(let i = 0; i < categoryArr.length; i++) {
    
              domString += `<div class="card categoryCard" style="width: 26rem;">
                            <img class="card-img-top" src="${arr[i].imgURL}" alt="Card image cap">
                            <h3 class="card-title">${arr[i].section}</h3>
                            <div class="card-body categoryBody">
                            <p class="card-text categoryP">${arr[i].description}</p>
                            <div class="text-center">
                            <a href="#" class="btn btn-secondary categoryButton">Shop ${arr[i].section}</a>
                            </div>
                            </div>
                            </div>
                            `
    }
  printToDom('#categories', domString)
}

const buildProductCards = (sweatsArr) => {
  let domString = '';
  for (let i = 0; i < sweatsArr.length; i++) {
    domString += `
        <div class="Card mx-4 mt-4 rounded" id="sweatsCard">
          <img src="${sweatsArr[i].img}" class="card-img-top p-3" alt="Sweats">
          <div class="btn-group">
            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Size</button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          <div class="sweatCardBody card-body pb-0">
            <h5 class="card-title">${sweatsArr[i].name}</h5>
            <p class="card-text">${sweatsArr[i].description}</p>
            <div class="card-footer row">
              <p class="card-text text-center mb-0 p-0 col-6"><small class="text">$${sweatsArr[i].price}</small></p>
              <button type="button" class="btn btn-primary col-6">BUY</button>
            </div>
          </div>
        </div>
    `
  }
  printToDom('#productCardContainer', domString)
}

const filterSweats = (event) => {
  let buttonId = event.target.id;
  const tempSweatsArr = [];

  if (buttonId === 'All'){
    buildProductCards(sweatpants);
    return;
  };

  for (let i = 0; i < sweatpants.length; i++){
    if (sweatpants[i].gender === buttonId){
      tempSweatsArr.push(sweatpants[i])
    } 
  };
  
  buildProductCards(tempSweatsArr);
}

const clickEvents = () => {
  if (document.body.id === 'shop') {
    document.querySelector('#Male').addEventListener('click', filterSweats);
    document.querySelector('#Female').addEventListener('click', filterSweats);
    document.querySelector('#Kids').addEventListener('click', filterSweats);
    document.querySelector('#All').addEventListener('click', filterSweats);
  }
}


const init = () => {
  if (document.body.id === "shop"){
    buildProductCards(sweatpants);
  } else if (document.body.id === "about") {

  } else if (document.body.id === "homepage") {
    buildCategoryCards(categoryArr);
  } else if (document.body.id === "reviews"){

  };
  clickEvents();
}


init();
