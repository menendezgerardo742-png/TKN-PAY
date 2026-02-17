import { PayPalIcon, CashAppIcon, ZelleIcon, ApplePayIcon, CryptoIcon } from "./page";

export const paymentMethods = [
  {
    name: "PayPal",
    description: "Pago seguro con tu cuenta PayPal",
    icon: PayPalIcon,
    href: "https://www.paypal.com/paypalme/EddisonRibero18",
    color: "#0070ba",
    bgColor: "rgba(0, 112, 186, 0.15)",
    borderColor: "rgba(0, 112, 186, 0.4)",
  },
  {
    name: "Cash App",
    description: "Envia dinero rapido con Cash App",
    icon: CashAppIcon,
    href: "https://cash.app/$tkncomunnity",
    color: "#00d632",
    bgColor: "rgba(0, 214, 50, 0.15)",
    borderColor: "rgba(0, 214, 50, 0.4)",
  },
  {
    name: "Zelle",
    description: "Transferencia directa con Zelle",
    icon: ZelleIcon,
    href: "#",
    color: "#6c1cd3",
    bgColor: "rgba(108, 28, 211, 0.15)",
    borderColor: "rgba(108, 28, 211, 0.4)",
  },
  {
    name: "Apple Pay",
    description: "Paga facilmente con Apple Pay",
    icon: ApplePayIcon,
    href: "#",
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
