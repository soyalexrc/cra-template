// const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");
const catchHtml = (html) => {
  return {
    __html: html
  }
}

const openWhatsApp = (number) => {
  const formattedNumber = number.replace('+', '').replaceAll(' ', '');
  return window.open(`https://wa.me/${formattedNumber}`, '_blank')
}

const formatPrice = num => {
  if (typeof num !== "string") {
    const formattedNumber = num.toString().replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return '$' + formattedNumber;
  } else {
    const formattedNumber = num.replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return '$' + formattedNumber;
  }
}

export { catchHtml, formatPrice, openWhatsApp }
