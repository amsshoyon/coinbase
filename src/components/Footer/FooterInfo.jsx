import React from 'react'

const FooterInfo = () => {
    return (
        <div className="d-flex flex-column mb-5">
            <div className="logo pb-2">
                <img src="/assets/images/logo.svg" alt="Coinbase logo" className="footer-logo mb-4" />
            </div>
            <select className="mb-2">
                <option value="de">Deutsch</option>
                <option value="en" selected="">English</option>
                <option value="es">Español - España</option>
                <option value="es-LA">Español - América Latina</option>
                <option value="fr">Français - France</option>
                <option value="it">Italiano</option>
                <option value="pl">Polski</option>
                <option value="pt">Português - Brasil</option>
                <option value="pt-PT">Português - Portugal</option>
                <option value="ru">Pусский</option>
                <option value="th">ไทย</option>
                <option value="tr">Türkçe</option>
            </select>
            <div className="text-gray">
                <div className="copyright mb-2 fz16">
                    © 2021 Coinbase
                </div>
                <div className="social d-flex">
                    <a href="https://blog.coinbase.com/" className="fz16" target="_blank" rel="noreferrer">Blog</a>
                    <span>&nbsp; • &nbsp;</span>
                    <a href="https://twitter.com/coinbase" className="fz16" target="_blank" rel="noreferrer">Twitter</a>
                    <span>&nbsp; • &nbsp;</span>
                    <a href="https://www.facebook.com/Coinbase" className="fz16" target="_blank" rel="noreferrer">Facebook</a>
                </div>
            </div>
        </div>
    )
}

export default FooterInfo
