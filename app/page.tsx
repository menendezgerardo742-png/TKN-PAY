export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b0f1a",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontFamily: "Arial"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "32px",
          marginBottom: "30px",
          textShadow: "0 0 15px cyan"
        }}>
          TKN COMMUNITY
        </h1>

        <div style={{ display: "grid", gap: "15px" }}>

          <a href="https://www.paypal.com/paypalme/TU_USUARIO" target="_blank"
            style={buttonStyle("#0070ba")}>
            PayPal
          </a>

          <a href="https://cash.app/$TU_CASHTAG" target="_blank"
            style={buttonStyle("#00c853")}>
            Cash App
          </a>

          <a href="#" target="_blank"
            style={buttonStyle("#8b5cf6")}>
            Zelle
          </a>

          <a href="#" target="_blank"
            style={buttonStyle("#ffffff", "#000")}>
            Apple Pay
          </a>

          <a href="#" target="_blank"
            style={buttonStyle("#f59e0b")}>
            Crypto
          </a>

        </div>
      </div>
    </main>
  );
}

function buttonStyle(bg: string, color: string = "#fff") {
  return {
    background: bg,
    color: color,
    padding: "15px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    boxShadow: `0 0 15px ${bg}`,
    transition: "0.2s",
    display: "block"
  };
}
