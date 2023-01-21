
const initialPropertyData = {
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
    user: localStorage.getItem('vi-currentUser') ? JSON.parse(localStorage.getItem('vi-currentUser')).username : null,
    userId: localStorage.getItem('vi-currentUser') ? JSON.parse(localStorage.getItem('vi-currentUser')).id : null
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
}
export default initialPropertyData;
