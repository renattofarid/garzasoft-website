import Image from "next/image";
import Link from "next/link";

export default function ButtonWhatsapp() {
  const numero = "992441187";
  const mensaje = "Hola, deseo información sobre sus servicios.";
  const link = `https://api.whatsapp.com/send?phone=51${numero}&text=${mensaje}`;
  return (
    <Link
      href={link}
      className="w-fit fixed bottom-0 right-0 p-4 group"
      target="_blank"
    >
      <span className="absolute right-16 bottom-6 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded px-2 py-1 w-full transition-opacity pointer-events-none">
        Chatea con nosotros ahora! 👋
      </span>
      <Image src={"/whatsapp.svg"} width={50} height={50} alt="" />
    </Link>
  );
}
