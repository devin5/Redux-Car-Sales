const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const reducer = (state = initialState, action) => {
  console.log("action from reducer", action);
  switch (action.type) {
    case "ADD_FEATURE":
      if (state.car.features.find(i => i.id === action.payload.id)) {
        return state;
      } else {
        return {
          ...state,
          additionalPrice: state.additionalPrice + action.payload.price,
          car: {
            ...state.car,
            features: [...state.car.features, action.payload]
          }
        };
      }
      case "REMOVE_FEATURE":
       return {
           ...state,
           additionalPrice: state.additionalPrice - action.payload.price,
           car: {
               ...state.car,
               features: state.car.features.filter(i => i.id !== action.payload.id)
           }

       }

    default:
      return state;
  }
};
