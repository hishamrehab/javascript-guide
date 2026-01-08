class Product {
    // title = "DEFAULT";
    // imageUrl;
    // description;
    // price;

    constructor(title , image , desc , price){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
 } 

 class ElementAttribute {
   constructor(attrName , attrValue) {
    this.name = attrName;
    this.value = attrValue;
   }
 }

 

 class Component {
    constructor(renderHookId, shouldRender = true) {
        this.hookId = renderHookId;
        if(shouldRender) {
            this.render();
        }
        this.renderHookId = renderHookId;
        this.render();
    }

    render() {}
    
    createRootElement(tag , cssClasses , attributes) {
        const rootElement = document.createElement(tag);
        if (cssClasses) {
            rootElement.className = cssClasses;
        }
        if(attributes && attributes.lenght > 0 ) {
              for(const attr of attributes) {
                rootElement.setAttribute(attr.name , attr.value);
              }   
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
 }



  class ShoppingCart extends Component {
     items = [];

      set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total Amount \$${this.totalAmount.toFixed(2)} </h2>`;
      }

     get totalAmount() {
        const sum = this.items.reduce(
        (prevValue , curItem) =>   prevValue + curItem.price, 0);
        return sum;
     }
  
    constructor(renderHookId) {
        super(renderHookId , false); 
        this.orderProducts =() => {
            console.log("Ordering...");
            console.log(this.items);
        }
        this.render();
    }

    addProduct(product) {
      const updateItems = [...this.items];
        updateItems.push(product);
        this.cartItems = updateItems;
      }
   


    render() {
    const cartEl = this.createRootElement("section" , "cart");
        cartEl.innerHTML = `
        <h2>Total Amount \$${0} </h2>
        <button>Order Now!</button>
        `
        const orderButton = cartEl.querySelector("button");
        // orderButton.addEventListener("click" , () => this.orderProducts());
         orderButton.addEventListener("click" , () => this.orderProducts);
        this.totalOutput = cartEl.querySelector('h2');
        }
    }

    class ProductItem extends Component {
        constructor(product , renderHookId) {
        super(renderHookId, false);
        this.product = product;
        this.render();
        }

        addToCart() {
        App.addProductToCart(this.product);
        }

     render() {
       const prodEl =this.createRootElement("li" , "product-item");
         prodEl.innerHTML = `
          <div>
           <img src="${this.product.imageUrl}" alt="${this.product.title}" />
           <div className="product-item__content">
           <h2>${this.product.title}</h2>
           <h3>\${this.product.price}</h3>
           <p>${this.product.description}</p>
           <button>Add to Cart</button>
          </div>
         </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener("click" , this.addToCart.bind(this));
    }
}


class ProductList extends Component {
       #products = [];
  
        constructor(renderHookId) {
        super(renderHookId);
        this.render();
        this.fetchProducts();
        }

    fetchProducts() {
    this.#products= [
        new Product(
                "A Pillow"  ,
                "data:image/jpeg;base64,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" ,  
                "A soft pillow!",
                19.99 
            ),
            new Product(
                "A Carpet"  ,
            "data:image/jpeg;base64,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" , 
                "A carpet which you might like - or not",
                89.99
            )
    ];
    this.renderProducts();
    }

  renderProducts(){
  for (const prod of this.#products) {
     new ProductItem(prod , "prod-list");
    }
  }

    render() {
    this.createRootElement('ul' , "product-list" , [
        new ElementAttribute("id" , "prod-list")
    ]);
    if(this.#products && this.#products.length > 0){
        this.renderProducts();
    }
}
}

    class Shop  {
        constructor() {
           this.render();
        }

        render() {
        this.cart = new ShoppingCart("app");
        const list = new ProductList("app");

        }
    }


    class App {
        static cart;

        static init() {
        const shop  = new Shop();
        this.cart = shop.cart;
        }

        static addProductToCart(product) {
            this.cart.addProduct(product);
        }
    }

App.init();





