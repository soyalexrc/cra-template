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
    images: [],
    attributes: [],
    files: [
      {
        id: null,
        imageData: null,
        imageType: null,
        label: 'Titulo de propiedad',
        type: 'select',
        values: 'Si#No',
        value: null,
        name: 'title'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'text',
        label: 'Cedula catastral',
        name: 'catastralIdentification'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'text',
        label: 'Impuesto municipal',
        name: 'municipalityTax'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'select',
        values: 'Si#No',
        label: 'Documento de propiedad registrado ',
        name: 'propertyDocumentRegister'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'select',
        values: 'Si#No',
        label: 'Cedula de propietario',
        name: 'ownerIdentification'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'select',
        values: 'Si#No',
        label: 'Cedula de apoderado',
        name: 'attorneyIdentification'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'select',
        values: 'Si#No',
        label: 'Declaracion sucesorial',
        name: 'successionDeclaration'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'select',
        values: 'Si#No',
        label: 'Hipoteca',
        name: 'mortgage'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'select',
        values: 'Si#No',
        label: 'Liberacion de hipoteca',
        name: 'mortgageRelease'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'select',
        values: 'Si#No',
        label: 'Medida de prohibición para enajenar y gravar',
        name: 'prohibitionMeasureToAlienateAndEncumber'
      },

      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'select',
        values: 'Si#No',
        label: 'Poder',
        name: 'power'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'select',
        values: 'Si#No',
        label: 'Firma de conyuge',
        name: 'spouseSignature'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'select',
        values: 'Si#No',
        label: 'Firma de conyuge',
        name: 'spouseSignature'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'select',
        values: 'Si#No',
        label: 'Solvencia de condominio',
        name: 'condoSolvency'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'select',
        values: 'Si#No',
        label: 'Solvencia de servicios',
        name: 'solvencyOfServices'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'select',
        values: 'Si#No',
        label: 'Ficha tecnica',
        name: 'tecnicalData'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'select',
        values: 'Si#No',
        label: 'Propietario presente para la firma?',
        name: 'isOwnerPresentToSign'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        value: null,
        type: 'select',
        values: 'Si#No',
        label: 'Es vivienda principal?',
        name: 'isMainProperty'
      },
      {
        id: null,
        imageData: null,
        imageType: null,
        type: 'text',
        value: null,
        label: 'Otro',
        name: 'other'
      },
    ],
    clientData: {
      attorneyCellPhone: "",
      attorneyEmail: "",
      attorneyFirstName: "",
      attorneyLastName: "",
      birthday: "",
      cadastralFile: "",
      cellPhone: "",
      commision_persentage: "",
      commission: "", // porcentaje de comision
      commissionSeller: "",
      contactCellPhone: "",
      contactEmail: "",
      contactFirstName: "",
      contactLastName: "",
      documentCondition: "",
      email: "",
      phone: '',
      firstName: "",
      lastName: "",
      mainLivingPlace: "",
      mortgage: "",
      minimumNegotiation: '', // negociacion minima
      price: '', // precio
      observations: "", // motivo de venta- alquiler
      partOfPayment: "", // recibe como parte de pago
      power: "",
      powerCondition: "",
      propertyOrigin: "",
    }
  },
};

const slice = createSlice({
  name: "propertyRegisterForm",
  initialState,
  reducers: {

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
      const currentAttr = state.data.attributes.filter(x => x.id === payload.index)[0];
      currentAttr.value = payload.value;
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
      const index = state.data.images[payload];
      state.data.images.splice(index, 1);
      // state.data.images = images;
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
  setCurrentProperty
} = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


