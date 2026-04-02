export const WHATSAPP_NUMBER = "5519994656845"

export const whatsappHref = (prefill?: string) => {
  const text = encodeURIComponent(
    prefill ?? "Olá, vim pelo site da Parvus"
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export const EMAIL = "rehitutcontato@gmail.com"
export const INSTAGRAM_HANDLE = "parvuss"
export const INSTAGRAM_URL = "https://instagram.com/parvuss"
