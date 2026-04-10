import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/549354715587915?text=Hola%20quiero%20saber%20más%20sobre%20tus%20servicios🚀"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp size={30} color="white" />
    </a>
  );
}
