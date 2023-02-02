import {createSlice} from '@reduxjs/toolkit';
import initialPropertyData from '../../utils/initialPropertyData';

// ----------------------------------------------------------------------

const initialState = {
  data: {...initialPropertyData},
};

const slice = createSlice({
  name: "propertyRegisterForm",
  initialState,
  reducers: {

    setInitialData(state) {
      state.data = {...initialPropertyData};
    },

    manageIsPropertyApartment(state) {
      state.data.property.footageBuilding = null;
    },
    manageIsNotPropertyApartment(state) {
      state.data.location.buildingShoppingcenter = ''
    },

    handleChangeProperty(state, {payload}) {

      state.data.property = payload;
      if (payload.index === 'propertyType' && payload.value !== 'Apartamento') {
        state.data.property.footageBuilding = null;
      } else {
        state.data.location.buildingShoppingcenter = ''
      }
    },

    handleChangeLocation(state, {payload}) {
      state.data.location = payload;
    },

    setAttributes(state, {payload}) {
      state.data.attributes = payload;
    },

    handleUpdateFiles(state, {payload}) {
      const currentFile = state.data.files.filter(x => x.name === payload.index)[0];
      currentFile.value = payload.value;
    },

    handleChangeAttribute(state, {payload}) {
      // const currentAttr = state.data.attributes.filter(x => x.id === payload.index)[0];
      // currentAttr.value = payload.value;
      // state.data.attributes = attributes;
    },

    handleClient(state, {payload}) {
      state.data.clientData = payload;
    },

    addImage(state, {payload}) {
      state.data.images.push(payload);
    },

    addFile(state, {payload}) {
      const currentFile = state.data.files.filter(x => x.name === payload.element.name)[0];
      currentFile.id = payload.objFile.id;
      currentFile.imageType = payload.objFile.imageType;
      currentFile.imageData = payload.objFile.imageData;
    },

    removeImage(state, {payload}) {
      const index = state.data.images.findIndex(x => x.id === payload);
      state.data.images.splice(index, 1);
    },

    orderImages(state, {payload}) {
      state.data.images = payload;
    },

    setCurrentProperty(state, {payload}) {
      state.data = payload
    }


  },
});

export const {
  handleChangeLocation,
  handleChangeProperty,
  addImage,
  removeImage,
  orderImages,
  setAttributes,
  handleChangeAttribute,
  handleClient,
  manageIsNotPropertyApartment,
  manageIsPropertyApartment,
  addFile,
  handleUpdateFiles,
  setCurrentProperty,
  setInitialData
} = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


