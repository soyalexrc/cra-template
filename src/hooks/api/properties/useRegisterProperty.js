import {useState, useEffect} from 'react';

export default function useRegisterProperty() {
  const [propertyData, setPropertyData] = useState({
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
  })

  const handlePropertyData = (index, value) => {
    setPropertyData(prevState => ({
      ...prevState,
      [index]: value
    }))
    if (index === 'propertyType' && value !== 'Apartamento') {
      setPropertyData(prevState => ({
        ...prevState,
        footageBuilding: null
      }))
    }
  }
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return {propertyData, handlePropertyData, error};
}
