import {createSlice} from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  data: {
    property: {
      code: "",
      commisionRentalType: null,
      commisionRentalTypeSeller: null,
      commisionRoyalty: null,
      commisionRoyaltySeller: null,
      company: "Vision Inmobiliaria",
      description: "",
      externalCompany: null,
      externalFistName: null,
      externalIdentification: null,
      externalLastName: null,
      externalObservations: null,
      externalPhoneNumber: null,
      finalPrice: null,
      footageBuilding: "",
      footageGround: "",
      operationType: "",
      price: "",
      propertyCondition: "",
      propertyType: "",
      property_status: "",
      sellerId: null,
      user: JSON.parse(localStorage.getItem('vi-currentUser')).username,
      userId: JSON.parse(localStorage.getItem('vi-currentUser')).id
    },
    location: {
      country: "", //Venezuela
      state: "", // Anzoategui
      city: "", // municipio
      municipality: "", // urbanizacion
      urbanization: "",
      avenue: "", // avenida
      street: "", // calle
      buildingShoppingcenter: "", // edificio
      buildingNumber: "", // numero
      floor: "", // piso
      referencePoint: "", // punto de referencia
      hotToGet: "", // como llegar
      trunkNumber: "", // numero de maletero
      parkingNumber: "", // numero de estacionamiento
      trunkLevel: "", // nivel de maletero
      parkingLevel: "", // nivel de estacionamiento
      isClosedStreet: "", // Si,
      location: "" // A pie de calle
    },
    images: []
  },
};

const slice = createSlice({
  name: "propertyRegisterForm",
  initialState,
  reducers: {

    handleChangeProperty(state, {payload}) {
      console.log(payload)
      state.data.property = {
        ...state.data.property,
        [payload.index]: payload.value
      }
      if (payload.index === 'propertyType' && payload.value !== 'Apartamento') {
        state.data.property = {
          ...state.data.property,
          footageBuilding: null
        }
      } else {
        state.data.location = {
          ...state.data.location,
          buildingShoppingcenter: ''
        }
      }
    },

    handleChangeLocation(state, {payload}) {

      state.data.location = {
        ...state.data.location,
        [payload.index]: payload.value
      }
    },

    addImage(state, {payload}) {
      console.log(payload)
      const images = [...state.data.images];
      images.push(payload);
      state.data.images = images;
    },

    removeImage(state, {payload}) {
      const images = [...state.data.images];
      const index = images[payload];
      images.splice(index, 1);
      state.data.images = images;
    },

    orderImages(state, {payload}) {
      state.data.images = payload;
    }


  },
});

export const {handleChangeLocation, handleChangeProperty, addImage, removeImage, orderImages} = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


