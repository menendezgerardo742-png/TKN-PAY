import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
 
const PayPalIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797H9.603c-.564 0-1.04.408-1.13.964L7.076 21.337zm7.795-15.7H13.19c-.41 0-.764.296-.828.7l-.635 4.023c.064-.016.126-.027.192-.027h1.658c3.357 0 5.967-1.363 6.735-5.305.255-1.313.01-2.236-.647-2.906-.735-.75-2.06-1.174-3.795-1.174l.001.689z" />
  </svg>
);
 
const CashAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M23.59 3.47A5.1 5.1 0 0 0 20.55.42C19.5.07 18.25 0 15.66 0H8.34C5.76 0 4.5.07 3.45.42A5.1 5.1 0 0 0 .42 3.47C.07 4.5 0 5.76 0 8.34v7.32c0 2.58.07 3.84.42 4.87a5.1 5.1 0 0 0 3.03 3.03c1.05.37 2.29.44 4.89.44h7.32c2.58 0 3.84-.07 4.87-.42a5.1 5.1 0 0 0 3.03-3.05c.37-1.03.44-2.29.44-4.87V8.34c0-2.58-.07-3.84-.42-4.87zM17.2 12.63a6.04 6.04 0 0 1-1.66 2.85l.96.96a.48.48 0 0 1 0 .67l-1.2 1.2a.48.48 0 0 1-.67 0l-.97-.97a6.5 6.5 0 0 1-3.18.82 5.94 5.94 0 0 1-2.18-.42l-.6 1.46a.47.47 0 0 1-.62.26l-1.56-.64a.47.47 0 0 1-.26-.62l.6-1.46a5.8 5.8 0 0 1-1.66-2.85l-1.57.23a.47.47 0 0 1-.55-.39l-.24-1.67a.47.47 0 0 1 .39-.55l1.58-.23a6.04 6.04 0 0 1 .65-2.1L4.5 8.21a.48.48 0 0 1 0-.67l1.2-1.2a.48.48 0 0 1 .67 0l.97.97a6.5 6.5 0 0 1 3.18-.82c.76 0 1.49.15 2.18.42l.6-1.46a.47.47 0 0 1 .62-.26l1.56.64a.47.47 0 0 1 .26.62l-.6 1.46a5.8 5.8 0 0 1 1.66 2.85l1.57-.23a.47.47 0 0 1 .55.39l.24 1.67a.47.47 0 0 1-.39.55l-1.58.23zm-4.29-1.9a2.41 2.41 0 0 0-3.41 0 2.41 2.41 0 0 0 0 3.41 2.41 2.41 0 0 0 3.41 0 2.41 2.41 0 0 0 0-3.41z" />
  </svg>
);
 
const ZelleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M13.559 24h-2.64c-.482 0-.852-.384-.852-.864V18.48H2.064C.924 18.48 0 17.556 0 16.416V14.16c0-.624.288-1.212.78-1.596L10.067 5.52H2.064c-.482 0-.864-.384-.864-.864V2.064c0-.48.384-.864.864-.864h8.003V.864c0-.48.384-.864.864-.864h2.64c.48 0 .864.384.864.864v4.992l7.5-5.472c.18-.132.384-.192.6-.192.576 0 1.032.468 1.032 1.032v2.64c0 .348-.168.672-.456.876l-9.576 6.996h8.4c.48 0 .864.384.864.864v2.592c0 .48-.384.864-.864.864h-8.016v4.08c0 .48-.384.864-.864.864z" />
  </svg>
);
 
const ApplePayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M7.078 23.55c-.473-.316-.893-.703-1.244-1.15-.383-.463-.738-.95-1.064-1.454-.766-1.12-1.365-2.345-1.78-3.636-.5-1.502-.743-2.94-.743-4.347 0-1.57.34-2.94 1.002-4.09.49-.9 1.22-1.653 2.1-2.182.85-.53 1.84-.82 2.84-.84.35 0 .73.05 1.13.15.29.08.64.21 1.07.37.55.21.85.34.95.37.32.12.59.18.8.18.16 0 .39-.05.645-.13.145-.05.42-.14.81-.31.386-.14.692-.26.935-.35.37-.11.728-.21 1.05-.26.39-.06.777-.02 1.16.1.67.22 1.25.59 1.72 1.09-.14.09-.27.18-.39.28-.55.38-1.02.83-1.39 1.35-.514.72-.78 1.58-.77 2.45.02 1.02.39 2 1.07 2.76.31.37.68.69 1.1.95.21.13.42.25.64.35-.1.29-.21.574-.33.86-.32.77-.68 1.51-1.09 2.22-.326.564-.69 1.1-1.09 1.604-.46.574-.96 1.1-1.56 1.43-.646.37-1.386.38-2.05.024-.46-.24-.96-.4-1.47-.43-.55-.02-1.1.12-1.59.39-.44.246-.93.424-1.44.504-.47.07-.96.03-1.41-.12zm6.09-18.34c-.21.14-.45.26-.72.34-.32.1-.66.15-1.01.14-.44-.01-.87-.1-1.28-.29-.3-.14-.57-.33-.81-.57-.34-.37-.6-.82-.75-1.3-.15-.49-.2-1.01-.12-1.52.3.05.59.15.87.29.42.2.8.47 1.12.79.32.33.58.71.77 1.12.17.37.29.77.33 1.18-.14-.01-.27 0-.4.02z" />
  </svg>
);
 
const CryptoIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.7-.168-1.05-.25l.527-2.116L11.51 4.19l-.54 2.153c-.285-.066-.565-.13-.835-.2l.002-.007-1.815-.455-.35 1.407s.975.224.955.238c.535.136.63.494.614.78l-.614 2.457c.037.01.083.024.135.046l-.137-.035-.86 3.45c-.065.16-.23.4-.6.31.013.02-.96-.24-.96-.24L4.73 15.57l1.714.43c.318.08.63.163.938.24l-.545 2.19 1.315.328.54-2.157c.36.098.71.188 1.05.27l-.538 2.146 1.315.328.545-2.186c2.245.424 3.93.254 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.866-.2 1.518-.77 1.69-1.93h.003zm-3.022 4.238c-.404 1.64-3.157.75-4.05.53l.723-2.9c.893.223 3.75.663 3.327 2.37zm.406-4.26c-.37 1.49-2.662.733-3.405.548l.655-2.63c.744.186 3.137.534 2.75 2.082z" />
  </svg>
);
 
const paymentMethods = [
  {
    name: "PayPal",
    description: "Pago seguro con tu cuenta PayPal",
    icon: PayPalIcon,
    href: "https://www.paypal.com/paypalme@EddisonRibero18/",
    color: "#0070ba",
    bgColor: "rgba(0, 112, 186, 0.15)",
    borderColor: "rgba(0, 112, 186, 0.4)",
  },
  {
    name: "Cash App",
    description: "Envia dinero rapido con Cash App",
    icon: CashAppIcon,
    href: "https://cash.app/$tkncomunnityy",
    color: "#00d632",
    bgColor: "rgba(0, 214, 50, 0.15)",
    borderColor: "rgba(0, 214, 50, 0.4)",
  },
  {
    name: "Zelle",
    description: "Transferencia directa con Zelle",
    icon: ZelleIcon,
    href: "#941-290-8108",
    color: "#6c1cd3",
    bgColor: "rgba(108, 28, 211, 0.15)",
    borderColor: "rgba(108, 28, 211, 0.4)",
  },
  {
    name: "Apple Pay",
    description: "Paga facilmente con Apple Pay",
    icon: ApplePayIcon,
    href: "#941-290-8108",
    color: "#ffffff",
    bgColor: "rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  {
    name: "Crypto",
    description: "Bitcoin, Ethereum y mas criptomonedas",
    icon: CryptoIcon,
    href: "#",
    color: "#f7931a",
    bgColor: "rgba(247, 147, 26, 0.15)",
    borderColor: "rgba(247, 147, 26, 0.4)",
  },
];
 
export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background image - TKN logo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/tkn-bg.png"
          alt="TKN Community Background"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/40 via-[#0a0a0f]/70 to-[#0a0a0f]/95" />
      </div>
 
      {/* Purple rays falling from top */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {/* Main rays */}
        <div className="absolute top-0 left-[10%] h-[70vh] w-[2px] bg-gradient-to-b from-[#8b5cf6] via-[#8b5cf6]/30 to-transparent opacity-60 animate-ray-1" />
        <div className="absolute top-0 left-[25%] h-[80vh] w-[3px] bg-gradient-to-b from-[#a78bfa] via-[#7c3aed]/20 to-transparent opacity-50 animate-ray-2" />
        <div className="absolute top-0 left-[40%] h-[60vh] w-[1px] bg-gradient-to-b from-[#8b5cf6] via-[#8b5cf6]/25 to-transparent opacity-70 animate-ray-3" />
        <div className="absolute top-0 left-[55%] h-[75vh] w-[2px] bg-gradient-to-b from-[#a78bfa] via-[#7c3aed]/30 to-transparent opacity-45 animate-ray-4" />
        <div className="absolute top-0 left-[70%] h-[85vh] w-[3px] bg-gradient-to-b from-[#8b5cf6] via-[#8b5cf6]/20 to-transparent opacity-55 animate-ray-5" />
        <div className="absolute top-0 left-[85%] h-[65vh] w-[1px] bg-gradient-to-b from-[#a78bfa] via-[#7c3aed]/25 to-transparent opacity-60 animate-ray-6" />
        <div className="absolute top-0 left-[5%] h-[55vh] w-[1px] bg-gradient-to-b from-[#8b5cf6] via-[#8b5cf6]/15 to-transparent opacity-40 animate-ray-7" />
        <div className="absolute top-0 left-[48%] h-[90vh] w-[2px] bg-gradient-to-b from-[#a78bfa] via-[#7c3aed]/35 to-transparent opacity-35 animate-ray-8" />
        <div className="absolute top-0 left-[62%] h-[50vh] w-[1px] bg-gradient-to-b from-[#8b5cf6] via-[#8b5cf6]/20 to-transparent opacity-50 animate-ray-3" />
        <div className="absolute top-0 left-[93%] h-[72vh] w-[2px] bg-gradient-to-b from-[#a78bfa] via-[#7c3aed]/25 to-transparent opacity-40 animate-ray-1" />
        <div className="absolute top-0 left-[17%] h-[68vh] w-[1px] bg-gradient-to-b from-[#8b5cf6] via-[#8b5cf6]/20 to-transparent opacity-55 animate-ray-5" />
        <div className="absolute top-0 left-[78%] h-[58vh] w-[2px] bg-gradient-to-b from-[#a78bfa] via-[#7c3aed]/30 to-transparent opacity-45 animate-ray-7" />
 
        {/* Wide glow beams */}
        <div className="absolute top-0 left-[20%] h-[60vh] w-16 bg-gradient-to-b from-[#8b5cf6]/10 via-[#8b5cf6]/3 to-transparent blur-md animate-ray-2" />
        <div className="absolute top-0 left-[50%] h-[70vh] w-20 bg-gradient-to-b from-[#7c3aed]/8 via-[#7c3aed]/2 to-transparent blur-lg animate-ray-6" />
        <div className="absolute top-0 left-[75%] h-[55vh] w-14 bg-gradient-to-b from-[#a78bfa]/10 via-[#a78bfa]/3 to-transparent blur-md animate-ray-4" />
 
        {/* Top glow */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#8b5cf6]/15 to-transparent" />
      </div>
 
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-[#8b5cf6]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-72 w-72 rounded-full bg-[#7c3aed]/10 blur-3xl" />
      </div>
 
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-5 relative h-28 w-64">
            <Image
              src="/tkn-logo.png"
              alt="TKN Community"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.7)]"
              priority
            />
          </div>
          <p className="text-sm text-gray-400">
            Elige tu metodo de pago preferido
          </p>
        </div>
 
        {/* Payment Links */}
        <div className="flex flex-col gap-3">
          {paymentMethods.map((method) => (
            <a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border px-5 py-4 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              style={{
                backgroundColor: method.bgColor,
                borderColor: method.borderColor,
              }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: method.bgColor, color: method.color }}
              >
                <method.icon />
              </div>
              <div className="flex-1">
                <h3
                  className="text-base font-semibold"
                  style={{ color: method.color }}
                >
                  {method.name}
                </h3>
                <p className="text-xs text-gray-400">{method.description}</p>
              </div>
              <ArrowUpRight
                className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: method.color }}
              />
            </a>
          ))}
        </div>
 
        {/* Footer */}
        <p className="mt-8 text-center text-xs text-gray-500">
          TKN COMMUNITY &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
