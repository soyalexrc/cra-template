export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function openWhatsApp(number) {
  const formattedNumber = number.replace('+', '').replaceAll(' ', '');
  return window.open(`https://wa.me/${formattedNumber}`, '_blank')
}

export function formatNumber(phone) {
  if (phone.includes('+')) {
    return phone;
  } else {
    return `+ ${phone}`
  }

}

export function formatDate(dateStr) {
  const date = dateStr.split('T')[0];
  const time = dateStr.split('T')[1].split('.')[0];
  return `${date} - ${time}`
}

export function openExternalUrl(url) {
  window.open(url, '_blank', {})
}
