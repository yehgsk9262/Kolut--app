import { useState } from "react";

const COLORS = {
  green: "#1A7A3C",
  greenLight: "#2EA84F",
  red: "#CE1126",
  yellow: "#FCD116",
  dark: "#0D1B0F",
  white: "#FFFFFF",
  gray: "#F4F6F4",
  grayText: "#6B7B6E",
};

const style = {
  app: {
    fontFamily: "'Nunito', sans-serif",
    background: COLORS.gray,
    minHeight: "100vh",
    maxWidth: 420,
    margin: "0 auto",
    position: "relative",
    overflow: "hidden",
  },
  header: {
    background: COLORS.green,
    padding: "20px 24px 28px",
    color: COLORS.white,
    position: "relative",
  },
  logo: {
    fontSize: 26,
    fontWeight: 900,
    letterSpacing: 2,
    color: COLORS.yellow,
  },
  subtitle: {
    fontSize: 12,
    color: "rgba(255,255,255,0.75)",
    marginTop: 2,
    letterSpacing: 0.5,
  },
  balanceCard: {
    background: "rgba(255,255,255,0.12)",
    borderRadius: 16,
    padding: "16px 20px",
    marginTop: 16,
    border: "1px solid rgba(255,255,255,0.2)",
  },
  balanceLabel: { fontSize: 12, color: "rgba(255,255,255,0.7)", marginBottom: 4 },
  balanceAmount: { fontSize: 32, fontWeight: 900, color: COLORS.white },
  balanceCurrency: { fontSize: 14, fontWeight: 600, color: COLORS.yellow, marginLeft: 6 },
  balanceRow: { display: "flex", alignItems: "baseline" },
  protectionRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 12,
    gap: 8,
  },
  protectionBadge: {
    flex: 1,
    background: "rgba(255,255,255,0.1)",
    borderRadius: 10,
    padding: "8px 10px",
    textAlign: "center",
  },
  protectionValue: { fontSize: 13, fontWeight: 800, color: COLORS.yellow },
  protectionLabel: { fontSize: 10, color: "rgba(255,255,255,0.65)", marginTop: 2 },
  quickActions: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 10,
    padding: "20px 20px 0",
  },
  actionBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  },
  actionLabel: { fontSize: 11, fontWeight: 700, color: COLORS.dark, textAlign: "center" },
  section: { padding: "20px 20px 0" },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 800,
    color: COLORS.dark,
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  txList: { display: "flex", flexDirection: "column", gap: 8 },
  txItem: {
    background: COLORS.white,
    borderRadius: 14,
    padding: "14px 16px",
    display: "flex",
    alignItems: "center",
    gap: 12,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  txEmoji: {
    width: 44,
    height: 44,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    flexShrink: 0,
  },
  txInfo: { flex: 1 },
  txName: { fontSize: 14, fontWeight: 700, color: COLORS.dark },
  txSub: { fontSize: 11, color: COLORS.grayText, marginTop: 2 },
  txKolute: {
    fontSize: 10,
    color: COLORS.greenLight,
    fontWeight: 700,
    background: "#E8F5EC",
    padding: "2px 7px",
    borderRadius: 20,
    marginTop: 3,
    display: "inline-block",
  },
  txAmount: { textAlign: "right" },
  txMontant: { fontSize: 15, fontWeight: 800 },
  txDate: { fontSize: 10, color: COLORS.grayText, marginTop: 2 },
  sendModal: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
    display: "flex",
    alignItems: "flex-end",
    zIndex: 100,
    maxWidth: 420,
    margin: "0 auto",
  },
  modalBox: {
    background: COLORS.white,
    borderRadius: "24px 24px 0 0",
    padding: "28px 24px 40px",
    width: "100%",
  },
  modalTitle: { fontSize: 20, fontWeight: 900, color: COLORS.dark, marginBottom: 6 },
  modalSub: { fontSize: 13, color: COLORS.grayText, marginBottom: 22 },
  inputGroup: { marginBottom: 16 },
  inputLabel: { fontSize: 12, fontWeight: 700, color: COLORS.grayText, marginBottom: 6, display: "block" },
  input: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 14,
    border: "2px solid #E0E8E1",
    fontSize: 16,
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
    outline: "none",
    boxSizing: "border-box",
    background: COLORS.gray,
    color: COLORS.dark,
  },
  kolLabel: {
    background: "#E8F5EC",
    border: "none",
    borderRadius: 12,
    padding: "12px 16px",
    fontSize: 14,
    fontWeight: 700,
    color: COLORS.greenLight,
    textAlign: "center",
    marginBottom: 20,
  },
  sendBtn: {
    width: "100%",
    padding: "18px",
    background: COLORS.green,
    color: COLORS.white,
    border: "none",
    borderRadius: 16,
    fontSize: 16,
    fontWeight: 900,
    cursor: "pointer",
    letterSpacing: 0.5,
  },
  cancelBtn: {
    width: "100%",
    padding: "12px",
    background: "none",
    color: COLORS.grayText,
    border: "none",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    marginTop: 8,
  },
  successBox: {
    position: "fixed",
    inset: 0,
    background: COLORS.green,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 200,
    maxWidth: 420,
    margin: "0 auto",
    padding: 32,
  },
  successIcon: { fontSize: 72, marginBottom: 16 },
  successTitle: { fontSize: 26, fontWeight: 900, color: COLORS.white, textAlign: "center" },
  successSub: { fontSize: 14, color: "rgba(255,255,255,0.8)", textAlign: "center", marginTop: 8, lineHeight: 1.6 },
  successKol: {
    background: COLORS.yellow,
    color: COLORS.dark,
    borderRadius: 14,
    padding: "14px 28px",
    fontWeight: 900,
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
  },
  successClose: {
    marginTop: 16,
    background: "rgba(255,255,255,0.2)",
    color: COLORS.white,
    border: "none",
    borderRadius: 14,
    padding: "14px 40px",
    fontSize: 15,
    fontWeight: 800,
    cursor: "pointer",
  },
  navBar: {
    position: "fixed",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: 420,
    background: COLORS.white,
    display: "flex",
    justifyContent: "space-around",
    padding: "12px 0 18px",
    boxShadow: "0 -2px 20px rgba(0,0,0,0.08)",
    zIndex: 50,
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: "0 16px",
  },
  navIcon: { fontSize: 22 },
  navLabel: { fontSize: 10, fontWeight: 700 },
};

const TRANSACTIONS = [
  { emoji: "🐟", bg: "#FFF3E0", nom: "Marché Soumbédioune", type: "Envoi", montant: -5000, kolute: 50, date: "Aujourd'hui, 10:32" },
  { emoji: "🛵", bg: "#E3F2FD", nom: "Thierno Transport", type: "Reçu", montant: +12000, kolute: 120, date: "Hier, 18:15" },
  { emoji: "💊", bg: "#FCE4EC", nom: "Pharmacie Liberté", type: "Envoi", montant: -3500, kolute: 35, date: "Hier, 14:00" },
  { emoji: "🍞", bg: "#F3E5F5", nom: "Boulangerie Dakar", type: "Envoi", montant: -1500, kolute: 15, date: "Lundi, 07:45" },
];

const TABS = ["Accueil", "Historique", "Ma Protection", "Profil"];
const TAB_ICONS = ["🏠", "📋", "🛡️", "👤"];

export default function KoluteApp() {
  const [modal, setModal] = useState(null);
  const [success, setSuccess] = useState(false);
  const [montant, setMontant] = useState("");
  const [telephone, setTelephone] = useState("");
  const [tab, setTab] = useState(0);

  const kolute1 = montant ? Math.round(Number(montant) * 0.01) : 0;
  const net = montant ? Number(montant) - kolute1 : 0;

  function handleEnvoyer() {
    if (!montant || !telephone) return;
    setModal(null);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setMontant("");
      setTelephone("");
    }, 3500);
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      <div style={style.app}>
        <div style={style.header}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={style.logo}>KOLUTÉ</div>
              <div style={style.subtitle}>L'Algorithme Fiscal du Sénégal</div>
            </div>
            <div style={{ fontSize: 28, cursor: "pointer" }}>🔔</div>
          </div>
          <div style={style.balanceCard}>
            <div style={style.balanceLabel}>Solde disponible</div>
            <div style={style.balanceRow}>
              <span style={style.balanceAmount}>47 850</span>
              <span style={style.balanceCurrency}>FCFA</span>
            </div>
            <div style={style.protectionRow}>
              <div style={style.protectionBadge}>
                <div style={style.protectionValue}>2 340 F</div>
                <div style={style.protectionLabel}>🏥 Santé</div>
              </div>
              <div style={style.protectionBadge}>
                <div style={style.protectionValue}>1 560 F</div>
                <div style={style.protectionLabel}>👴 Retraite</div>
              </div>
              <div style={style.protectionBadge}>
                <div style={style.protectionValue}>1 200 F</div>
                <div style={style.protectionLabel}>💰 Crédit</div>
              </div>
            </div>
          </div>
        </div>

        <div style={style.quickActions}>
          {[
            { icon: "📤", label: "Envoyer", bg: COLORS.green, action: () => setModal("envoyer") },
            { icon: "📥", label: "Recevoir", bg: "#1565C0", action: () => setModal("recharger") },
            { icon: "📱", label: "Recharger", bg: "#6A1B9A", action: () => setModal("recharger") },
            { icon: "📊", label: "Mon Score", bg: COLORS.red, action: () => {} },
          ].map((a, i) => (
            <button key={i} style={style.actionBtn} onClick={a.action}>
              <div style={{ ...style.actionIcon, background: a.bg }}>
                <span style={{ filter
