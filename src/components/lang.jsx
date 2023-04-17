import { useTranslation } from "react-i18next";


const Lang = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <i className="bi bi-translate"></i>
      <div className="lang-group">
        <button className="lang-btn" onClick={() => i18n.changeLanguage("en")}>en</button>
        <button className="lang-btn" onClick={() => i18n.changeLanguage("es")}>es</button>
      </div>
    </div>
  )
}

export default Lang;
