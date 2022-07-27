

//  <article class="card-16x9">
//     <section class="card-16x9-img-container">
//         <img class="card-16x9-img" src="./assets/img/tortu-de-entera-con-fritas-200.jpg" alt="">
//     </section>
//     <section class="card-16x9-description-container">
//         <span class="card-16x9-title" >Tortugon de entera con fritas</span>
//         <p class="card-16x9-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugit veritatis </p>
//         <span class="card-16x9-price">$729</span>
//     </section>

// </article> 

const articlesCardConteiner= document.querySelector('.articles-cards-container');


const articulos = [];
articulos.push(productos.a500100);
articulos.push(productos.a500110);


function renderProducts(array){

    for(product of array){

        const card16x9 = document.createElement('article');
        card16x9.classList.add('card-16x9');

        const sectionImg= document.createElement('section');
        sectionImg.classList.add('card-16x9-img-container');
        const sectionImg_Img = document.createElement('img');
        sectionImg_Img.classList.add('card-16x9-img');
        sectionImg_Img.setAttribute('src', product.img);

        const sectionDescriptionConteiner = document.createElement('section');
        sectionDescriptionConteiner.classList.add('card-16x9-description-container');
        const cardTitle = document.createElement('span');
        cardTitle.classList.add('card-16x9-title');
        cardTitle.innerText= product.nombre;
        const cardDescription = document.createElement('p');
        cardDescription.classList.add('card-16x9-description');
        cardDescription.innerText = product.ingredientesFijos+ " " + product.ingredientesOpcionales;
        const cardPrice = document.createElement('span');
        cardPrice.classList.add('card-16x9-price');
        cardPrice.innerText = '$' + product.precio;

        sectionImg.appendChild(sectionImg_Img);

        sectionDescriptionConteiner.appendChild(cardTitle);
        sectionDescriptionConteiner.appendChild(cardDescription);
        sectionDescriptionConteiner.appendChild(cardPrice);

        card16x9.appendChild(sectionImg);
        card16x9.appendChild(sectionDescriptionConteiner);


        articlesCardConteiner.appendChild(card16x9);
        



    }
}

renderProducts(articulos);






