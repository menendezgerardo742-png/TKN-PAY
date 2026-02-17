"use client";

import { useState, useCallback } from "react";
import { Copy, Check, ShoppingCart, X, Trash2 } from "lucide-react";
import Image from "next/image";

/* ─── Copy Button ─── */
function CopyBtn({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300 transition-all hover:bg-white/10 hover:text-white"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-green-400" />
          <span className="text-green-400">Copiado</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}

/* ─── Data ─── */
interface Product {
  id: string;
  name: string;
  desc: string;
  price: number;
  icon: string;
}

const fivemProducts: Product[] = [
  { id: "f1", name: "Quantum Menu - Lifetime", desc: "Menu completo con 50+ funciones", price: 35.99, icon: "🚀" },
  { id: "f2", name: "Lua Executor Pro", desc: "Ejecuta scripts personalizados", price: 24.99, icon: "⚡" },
  { id: "f3", name: "Spoofer + Cleaner", desc: "Proteccion total, evita bans", price: 45.99, icon: "🛡️" },
  { id: "f4", name: "VIP Pack Completo", desc: "Todos los menus + actualizaciones", price: 89.99, icon: "👑" },
];

const discordProducts: Product[] = [
  { id: "d1", name: "Nitro Boost - 1 mes", desc: "Rol exclusivo + beneficios", price: 9.99, icon: "💎" },
  { id: "d2", name: "AutoMod Premium", desc: "Moderacion automatica avanzada", price: 19.99, icon: "🤖" },
  { id: "d3", name: "Custom Bot Development", desc: "Bot personalizado para tu server", price: 79.99, icon: "⚙️" },
  { id: "d4", name: "Rol Administrador VIP", desc: "Acceso a canales privados", price: 29.99, icon: "🔮" },
];

const paymentMethods = [
  { id: "paypal", name: "PayPal", icon: "📧", info: "tkncommunity@paypal.com", label: "Email" },
  { id: "zelle", name: "Zelle", icon: "🏦", info: "tkncommunity@bank.com", label: "Email Zelle" },
  { id: "cashapp", name: "CashApp", icon: "📱", info: "@TKNCommunity", label: "Usuario" },
  { id: "applepay", name: "Apple Pay", icon: "", info: "tkncommunity@icloud.com", label: "ID de Apple" },
];

const cryptoAddresses: Record<string, string> = {
  btc: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  eth: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  usdt: "0x742d35Cc6634C0532925a3b844Bc878e95d95fB5",
  bnb: "bnb1xlvns0c2e6j4v97l3q5tq0y0l4x9q2j6k8m3n4",
};

interface CartItem extends Product {
  cartId: number;
}

/* ─── Notification ─── */
function Notification({ message, show }: { message: string; show: boolean }) {
  return (
    <div
      className={`fixed top-6 right-6 z-[9999] rounded-full border-l-4 border-[#ffd700] bg-[#4b0082] px-6 py-4 font-semibold text-white shadow-2xl transition-transform duration-500 ${
        show ? "translate-x-0" : "translate-x-[500px]"
      }`}
    >
      {message}
    </div>
  );
}

/* ─── Success Modal ─── */
function SuccessModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="mx-4 max-w-md w-full animate-pulse-glow rounded-3xl border-4 border-[#ffd700] bg-gradient-to-br from-[#2a0845] to-[#4b0082] p-10 text-center shadow-2xl">
        <h2 className="mb-4 text-3xl font-bold text-white">PAGO EXITOSO!</h2>
        <p className="mb-2 text-gray-200">Tu compra ha sido procesada correctamente.</p>
        <p className="mb-2 text-gray-300">💜 Los roles y servicios seran activados en menos de 5 minutos</p>
        <p className="mb-6 text-gray-300">Unete a nuestro Discord para soporte inmediato</p>
        <button
          onClick={onClose}
          className="rounded-full bg-[#ffd700] px-8 py-3 text-lg font-bold text-[#4b0082] transition-all hover:scale-105 hover:shadow-[0_0_30px_#ffd700]"
        >
          CERRAR
        </button>
      </div>
    </div>
  );
}

/* ─── Product Card ─── */
function ProductCard({ product, onAdd }: { product: Product; onAdd: (p: Product) => void }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#2a2a40] bg-[#12121a] p-6 text-center transition-all hover:-translate-y-2 hover:border-[#8b5cf6] hover:shadow-[0_20px_40px_rgba(139,92,246,0.3)]">
      <div className="mb-3 text-5xl">{product.icon}</div>
      <h4 className="mb-2 text-lg font-bold text-white">{product.name}</h4>
      <p className="mb-4 min-h-[40px] text-sm text-gray-400">{product.desc}</p>
      <div className="mb-4 text-3xl font-black text-[#8b5cf6]">
        ${product.price.toFixed(2)} <span className="text-sm font-normal text-gray-500">USD</span>
      </div>
      <button
        onClick={() => onAdd(product)}
        className="w-full rounded-full bg-gradient-to-r from-[#4b0082] to-[#8b5cf6] px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
      >
        Agregar al Carrito
      </button>
    </div>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedPayment, setSelectedPayment] = useState("paypal");
  const [cryptoType, setCryptoType] = useState("btc");
  const [notification, setNotification] = useState({ message: "", show: false });
  const [modalOpen, setModalOpen] = useState(false);

  const notify = (msg: string) => {
    setNotification({ message: msg, show: true });
    setTimeout(() => setNotification((n) => ({ ...n, show: false })), 3000);
  };

  const addToCart = (product: Product) => {
    setCart((c) => [...c, { ...product, cartId: Date.now() + Math.random() }]);
    notify(`${product.name} agregado al carrito`);
  };

  const removeFromCart = (cartId: number) => {
    setCart((c) => c.filter((i) => i.cartId !== cartId));
  };

  const total = cart.reduce((s, i) => s + i.price, 0);

  const checkout = () => {
    if (cart.length === 0) {
      notify("Agrega productos al carrito primero");
      return;
    }
    setModalOpen(true);
    setTimeout(() => setCart([]), 5000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/tkn-bg.png" alt="" fill className="object-cover opacity-10" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/40 via-[#0a0a0f]/70 to-[#0a0a0f]/95" />
      </div>

      {/* Purple rays */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[70vh] w-[2px] bg-gradient-to-b from-[#8b5cf6] via-[#8b5cf6]/30 to-transparent opacity-60 animate-ray-1" />
        <div className="absolute top-0 left-[30%] h-[80vh] w-[3px] bg-gradient-to-b from-[#a78bfa] via-[#7c3aed]/20 to-transparent opacity-50 animate-ray-2" />
        <div className="absolute top-0 left-[50%] h-[60vh] w-[1px] bg-gradient-to-b from-[#8b5cf6] via-[#8b5cf6]/25 to-transparent opacity-70 animate-ray-3" />
        <div className="absolute top-0 left-[70%] h-[75vh] w-[2px] bg-gradient-to-b from-[#a78bfa] via-[#7c3aed]/30 to-transparent opacity-45 animate-ray-4" />
        <div className="absolute top-0 left-[90%] h-[85vh] w-[3px] bg-gradient-to-b from-[#8b5cf6] via-[#8b5cf6]/20 to-transparent opacity-55 animate-ray-5" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#8b5cf6]/15 to-transparent" />
      </div>

      <Notification message={notification.message} show={notification.show} />
      <SuccessModal open={modalOpen} onClose={() => { setModalOpen(false); notify("Gracias por tu compra en TKN COMMUNITY!"); }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 relative h-28 w-64">
            <Image src="/tkn-logo.png" alt="TKN Community" fill className="object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.7)]" priority />
          </div>
          <h1 className="mb-2 text-5xl font-black neon-text text-[#8b5cf6] sm:text-6xl">TKN COMMUNITY</h1>
          <h2 className="text-xl font-semibold text-gray-300">FiveM &bull; Discord &bull; Premium Services</h2>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* FiveM */}
          <section>
            <h3 className="mb-6 text-center text-3xl font-bold text-white">
              🎮 FiveM MENUS
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {fivemProducts.map((p) => (
                <ProductCard key={p.id} product={p} onAdd={addToCart} />
              ))}
            </div>
          </section>

          {/* Discord */}
          <section>
            <h3 className="mb-6 text-center text-3xl font-bold text-white">
              💬 DISCORD SERVICES
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {discordProducts.map((p) => (
                <ProductCard key={p.id} product={p} onAdd={addToCart} />
              ))}
            </div>
          </section>
        </div>

        {/* Payment Section */}
        <section className="mt-16 rounded-3xl border border-[#8b5cf6]/30 bg-gradient-to-br from-[#2a0845]/80 to-[#4b0082]/60 p-8 backdrop-blur-md">
          <h3 className="mb-8 text-center text-3xl font-bold text-white">
            💰 METODOS DE PAGO 💰
          </h3>

          {/* Payment methods grid */}
          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {paymentMethods.map((m) => (
              <button
                key={m.id}
                onClick={() => { setSelectedPayment(m.id); notify(`Metodo seleccionado: ${m.name}`); }}
                className={`rounded-2xl border-2 p-4 text-center backdrop-blur-md transition-all hover:-translate-y-1 ${
                  selectedPayment === m.id
                    ? "border-[#ffd700] bg-white/10 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                    : "border-transparent bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="mb-2 text-3xl">{m.icon}</div>
                <h4 className="text-sm font-bold text-white">{m.name}</h4>
                <p className="mt-1 truncate text-[10px] text-gray-400">{m.info}</p>
              </button>
            ))}
            {/* Crypto */}
            <button
              onClick={() => { setSelectedPayment("crypto"); notify("Metodo seleccionado: Criptomonedas"); }}
              className={`rounded-2xl border-2 p-4 text-center backdrop-blur-md transition-all hover:-translate-y-1 ${
                selectedPayment === "crypto"
                  ? "border-[#ffd700] bg-white/10 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                  : "border-transparent bg-white/5 hover:bg-white/10"
              }`}
            >
              <div className="mb-2 text-3xl">₿</div>
              <h4 className="text-sm font-bold text-white">Cripto</h4>
              <p className="mt-1 text-[10px] text-gray-400">BTC, ETH, USDT, BNB</p>
            </button>
          </div>

          {/* Selected payment details */}
          <div className="mb-8 rounded-2xl border border-[#8b5cf6]/20 bg-black/30 p-6">
            {selectedPayment === "crypto" ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <select
                    value={cryptoType}
                    onChange={(e) => setCryptoType(e.target.value)}
                    className="rounded-lg border border-[#8b5cf6]/30 bg-[#0a0a0f] px-4 py-2 text-sm text-white focus:border-[#8b5cf6] focus:outline-none"
                  >
                    <option value="btc">Bitcoin (BTC)</option>
                    <option value="eth">Ethereum (ETH)</option>
                    <option value="usdt">USDT (ERC20)</option>
                    <option value="bnb">BNB</option>
                  </select>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">Direccion {cryptoType.toUpperCase()}</p>
                    <p className="truncate font-mono text-xs text-gray-200">{cryptoAddresses[cryptoType]}</p>
                  </div>
                  <CopyBtn text={cryptoAddresses[cryptoType]} label="Copiar" />
                </div>
              </div>
            ) : (
              (() => {
                const m = paymentMethods.find((pm) => pm.id === selectedPayment);
                if (!m) return null;
                return (
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-wider text-gray-500">{m.label}</p>
                      <p className="truncate font-mono text-sm text-gray-200">{m.info}</p>
                    </div>
                    <CopyBtn text={m.info} label="Copiar" />
                  </div>
                );
              })()
            )}
          </div>

          {/* Cart */}
          <div className="rounded-2xl border border-[#8b5cf6]/20 bg-black/30 p-6">
            <div className="mb-4 flex items-center justify-between border-b border-[#8b5cf6]/20 pb-4">
              <span className="flex items-center gap-2 text-lg font-bold text-white">
                <ShoppingCart className="h-5 w-5" /> TU CARRITO
              </span>
              <span className="rounded-full bg-[#8b5cf6] px-3 py-1 text-xs font-bold text-white">
                {cart.length}
              </span>
            </div>

            <div className="mb-4 max-h-64 space-y-2 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="py-6 text-center text-gray-500">El carrito esta vacio</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.cartId}
                    className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.icon} {item.name}
                      </p>
                      <p className="text-xs text-[#ffd700]">${item.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="mb-4 flex items-center justify-between border-t border-[#8b5cf6]/20 pt-4">
              <span className="text-lg font-bold text-white">TOTAL:</span>
              <span className="text-2xl font-black text-[#ffd700]">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={checkout}
              className="w-full rounded-full bg-gradient-to-r from-[#ffd700] to-[#ffa500] py-4 text-lg font-extrabold uppercase tracking-widest text-[#4b0082] transition-all hover:shadow-[0_0_40px_rgba(255,215,0,0.5)]"
            >
              💜 FINALIZAR COMPRA 💜
            </button>
          </div>
        </section>

        {/* Discord Preview */}
        <section className="mt-10 rounded-2xl border-l-4 border-[#5865F2] bg-[#36393f] p-6">
          <h4 className="mb-2 text-lg font-bold text-white">💬 Discord - TKN COMMUNITY</h4>
          <p className="mb-3 text-sm text-[#b9bbbe]">Al comprar obtendras acceso inmediato a:</p>
          <div className="flex flex-wrap gap-2">
            {["🎮 FiveM VIP", "💜 Community Supporter", "🚀 Early Access", "⚡ Private Menus"].map((role) => (
              <span key={role} className="rounded-full bg-[#5865F2] px-3 py-1 text-xs font-medium text-white">
                {role}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-[#b9bbbe]">🔗 discord.gg/tkncommunity</p>
        </section>
      </div>
    </div>
  );
}