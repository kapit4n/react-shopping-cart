import { combineReducers } from "redux";
let productsOriginal = [
  {
    id: 1,
    name: "Lamborghini Aventador",
    price: 450000,
    img:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/share%20img/aventador-coupe-facebook-og.jpg",
    description:
      "What are the fastest automobiles on the planet? CBS Miami took a spin and crunched the numbers for us, producing this list of the slickest speedsters on the road. You may be surprised by some of the names on this list, but one thing that is no surprise is the inclusion of Lamborghini. The venerable Italian carmaker has a reputation for speed, and their Aventador is the best of the bunch. The Lamborghini Aventador can reach a speed of 220 mph, and go from 0 to 60 in 2.9 secs."
  },
  {
    id: 2,
    name: "Aston Martin one-77",
    price: 1870000,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/2012_Aston_Martin_One-77_coupe_%282012-10-26%29_01.jpg/280px-2012_Aston_Martin_One-77_coupe_%282012-10-26%29_01.jpg",
    description:
      "British automaker Aston Martin is known for its style. But they're no slouch in the speed department either. The Aston Martin One-77 can reach a speed of 220 mph, and go from 0 to 60 in 3.4 seconds."
  },
  {
    id: 3,
    name: "Noble M600",
    price: 260926,
    img:
      "https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/cars-car/image/2016/08/li1109657noble-007.jpg?itok=UeSCJ1my",
    description:
      "The Noble M600 can reach a speed of 225 mph, and go from 0 to 60 in 3.7 seconds, according to CBS Miami. Expensive and exclusive, only fifty M600s see production every year."
  },
  {
    id: 4,
    name: "Gumpert Apollo",
    price: 750000,
    img:
      "https://pictures.topspeed.com/IMG/jpg/201403/gumpert-apollo-s-iro.jpg",
    description:
      "It was only a matter of time before a German company made the list. Gumpert might not be the first name that comes to mind when thinking about German automakers, but these specialty supercar stylists are the only to make the list. The Gumpert Apollo, seen here, can reach a speed of 225 mph, and go from 0 to 60 in 3.0 seconds."
  },
  {
    id: 5,
    name: "Zenvo ST1",
    price: 1800000,
    img: "https://www.thebillionaireshop.com/media/Zenvo-ST1-1024x465.jpg",
    description:
      "One doesn't usually think of Scandinavia when talking about high-performance driving machines. But getting through this list may change your mind. Hailing from Denmark is the Zenvo ST1. The Zenvo ST1 can reach a speed of 233 mph, and go from 0 to 60 in 2.9 seconds"
  },
  {
    id: 6,
    name: "Koenigsegg CCX",
    price: 695000,
    img:
      "https://www.koenigsegg.com/wp-content/uploads/2015/01/koenigsegg-ccx-005.jpg",
    description:
      "Just a short hop north from Zenvo is the Swedish manufacturer Koenigsegg. These carmakers deal only in hyper-fast, hyper-expensive speed machines.The Koenigsegg CCX can reach a speed of 245 mph, and go from 0 to 60 in 3.2 seconds."
  },
  {
    id: 7,
    name: "9ff GT9-R",
    price: 946925,
    img: "https://i.ytimg.com/vi/I9OyZfUXhII/maxresdefault.jpg",
    description:
      "One way to make a super-fast car is to take one that's already zippy and improve on it. The Porsche 911 is a classic example of speed and style. German car tuning company 9ff took a 911 and made it even faster. The 9ff GT9-R can reach a speed of 257 mph, and go from 0 to 60 in 2.9 seconds."
  },
  {
    id: 8,
    name: "Koenigsegg Agera R",
    price: 2100000,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/2015_Koenigsegg_Agera_N_%2819886243212%29.jpg/1200px-2015_Koenigsegg_Agera_N_%2819886243212%29.jpg",
    description:
      "Koenigsegg against makes the list with another super-charged supercar. The Koenigsegg Agera R can reach a speed of 260 mph, and go from 0 to 60 in 2.9 seconds."
  },
  {
    id: 9,
    name: "Hennessey Venom GT",
    price: 1200000,
    img:
      "https://images.hgmsites.net/med/2011-hennessey-venom-gt--image-dupont-registry_100416916_m.jpg",
    description:
      "The Hennessey Venom GT can reach a speed of 260 mph, and go from 0 to 60 in 2.5 seconds, according to CBS Miami. These cars can fly, but are they worth the wait? Only ten Venom GTs see production every year, so you'll have to sign up soon to lock down your next supercar."
  },
  {
    id: 10,
    name: "Bugatti Veyron Super Sport",
    price: 2000000,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/BugattiVeyronSuperSport.jpg",
    description:
      "The fastest car in the world, Bugatti Veyron Super Sport, can reach a speed of 267 mph, and go from 0 to 60 in 2.4 seconds. The Bugatti Veyron tops lists wherever it goes. It comes in a variety of styles, but it's only the Super Sport (which, as its name suggests, is built for pure speed) which makes in on CBS Miami's list of the ten fastest cars in the world."
  }
];
const initialState = {
  products: productsOriginal,
  product: "This is the product",
  productShow: "THis is product displayed",
  cartInfo: {
    products: [{
      id: 1,
      name: "Lamborghini Aventador",
      price: 450000,
      quantity: 1,
      img:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/share%20img/aventador-coupe-facebook-og.jpg",
      description:
        "What are the fastest automobiles on the planet? CBS Miami took a spin and crunched the numbers for us, producing this list of the slickest speedsters on the road. You may be surprised by some of the names on this list, but one thing that is no surprise is the inclusion of Lamborghini. The venerable Italian carmaker has a reputation for speed, and their Aventador is the best of the bunch. The Lamborghini Aventador can reach a speed of 220 mph, and go from 0 to 60 in 2.9 secs."
    }],
    total: 1 * 20,
    display: true
  }
};

function addToCart(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return Object.assign({}, state, action.product);
    case "PRODUCT_TO_CART":
      if (state.some(p => p == action.product)) {
        let car = state.find(p => p == action.product);
      } else {
        return Object.assign({}, ...state, action.product);
      }
    default:
      return state;
  }
}

export function todoApp(state = initialState, action) {
  const reducer = (accumulator, currentValue) => {
    if (typeof accumulator == "number") {
      return (
        accumulator + Number(currentValue.quantity) * Number(currentValue.price)
      );
    } else {
      return (
        Number(accumulator.quantity) * Number(accumulator.price) +
        Number(currentValue.quantity) * Number(currentValue.price)
      );
    }
  };
  let cartTotal = 0;

  switch (action.type) {
    case "SHOW_PRODUCT":
      return {
        products: [...state.products, action.product],
        product: action.product,
        productShow: action.product,
        cartInfo: state.cartInfo
      };
    case "ADD_PRODUCT":
      return {
        products: [...state.products, action.product],
        product: state.product,
        productShow: state.productShow,
        cartInfo: state.cartInfo
      };
    case "REMOVE_PRODUCT":
      return {
        products: state.products.filter(pro => pro != action.product),
        product: state.product,
        productShow: state.productShow,
        cartInfo: state.cartInfo
      };
    case "DISPLAY_CART_INFO":
      return {
        ...state,
        cartInfo: { ...state.cartInfo, display: true }
      };
    case "HIDE_CART_INFO":
      return {
        ...state,
        cartInfo: { ...state.cartInfo, display: false }
      };
    case "REMOVE_FROM_CART":
      let cartProducts = [
        ...state.cartInfo.products.filter(p => p.name != action.product.name)
      ];
      if (cartProducts.length > 1) {
        cartTotal = cartProducts.reduce(reducer);
      } else if (cartProducts.length == 1) {
        cartTotal =
          Number(cartProducts[0].quantity) * Number(cartProducts[0].price);
      }
      return {
        products: state.products,
        product: state.product,
        productShow: state.productShow,
        cartInfo: {
          products: cartProducts,
          total: cartTotal
        }
      };
    case "CHECKOUT_CART":
      return {
        products: state.products,
        product: state.product,
        productShow: state.productShow,
        cartInfo: {
          products: [],
          total: 0
        }
      };
    case "PRODUCT_TO_CART":
      if (state.cartInfo.products.some(p => p.name == action.product.name)) {
        let selected = state.cartInfo.products.find(
          p => p.name == action.product.name
        );
        selected.quantity += 1;
        let noSelected = state.cartInfo.products.filter(
          p => p.name != action.product.name
        );

        let cartProducts = [...noSelected, selected];
        if (cartProducts.length > 1) {
          cartTotal = cartProducts.reduce(reducer);
        } else if (cartProducts.length == 1) {
          cartTotal =
            Number(cartProducts[0].quantity) * Number(cartProducts[0].price);
        }
        return {
          products: state.products,
          product: state.product,
          productShow: state.productShow,
          cartInfo: {
            products: cartProducts,
            total: cartTotal
          }
        };
      } else {
        let p = action.product;
        p.quantity = 1;
        let cartProducts = [...state.cartInfo.products, p];
        if (cartProducts.length > 1) {
          cartTotal = cartProducts.reduce(reducer);
        } else if (cartProducts.length == 1) {
          cartTotal =
            Number(cartProducts[0].quantity) * Number(cartProducts[0].price);
        }
        return {
          products: state.products,
          product: state.product,
          productShow: state.productShow,
          cartInfo: { products: cartProducts, total: cartTotal }
        };
      }
    case "SEARCH_PRODUCT":
      return {
        products: productsOriginal.filter(p =>
          p.name.toLowerCase().includes(action.searchValue.toLowerCase())
        ),
        product: state.product,
        productShow: state.productShow,
        cartInfo: {
          products: [...state.cartInfo.products],
          total: state.cartInfo.total
        }
      };
    default:
      return state;
  }
}

export default combineReducers({
  todoApp
});
