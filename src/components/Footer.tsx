import './styles/footer.css'
import footerdata from '../data/footerText.json'
export default function Footer(){
    /**Imported the json data, then destructuring  */
    const {addressTitle, premises, street, city } =footerdata.address
    const {contactTitle, phone, email} = footerdata.contact
    const {navTitle, about, socialImpact, invest, news, contact} = footerdata.nav
    const {brandsTitle, elewa, italanta, vlabs} = footerdata.companyBrands
    const {privacyTitle, terms, cookiesPolicy } = footerdata.privacy
  return(
    <div className="footer">
        <div className="line"></div>
        <div className="company-details">

            <div className="contact">
                <h2>{addressTitle}</h2>
                <p>{premises}</p>
                <p>{street}</p>
                <p>{city}</p>
            </div>

             <div className="contact">
                <h2>{contactTitle}</h2>
                <p>{phone}</p>
                <p>{email}</p>
             </div>

             <div className="navigation">
                <h2>{navTitle}</h2>
                <p>{about}</p>
                <p>{socialImpact}</p>
                <p>{invest}</p>
                <p>{news}</p>
                <p>{contact}</p>
             </div>
             <div className="brands">
                <h2>{brandsTitle}</h2>
                <p>{elewa}</p>
                <p>{italanta}</p>
                <p>{vlabs}</p>
             </div>
             <div className="privacy">
                <h2>{privacyTitle}</h2>
                <p>{terms}</p>
                <p>{cookiesPolicy}</p>
             </div>
        </div>
    </div>
  )
}
