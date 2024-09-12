
import whatsapp from '../assets/images/whatsapp.png'

export default function Component() {
  const phoneNumber = '2348069391306' // Replace with your actual WhatsApp number without any spaces or special characters

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I have a question about your services.')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-2 right-0 mb-5 mr-5 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="rounded-full focus:outline-none animate-pulse transition-transform duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <img 
          src={whatsapp} 
          width={50} 
          height={50} 
          className="rounded-full" 
          alt="WhatsApp chat button" 
        />
      </button>
    </div>
  )
}