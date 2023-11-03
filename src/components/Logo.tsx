import companyLogo from  '../assets/svgs/Logo_White_arvoyx.svg'
import './styles/logo.css'
export default function Logo(){
    return(
        <div className="logo">
            <img src={companyLogo} alt="company logo"/>
        </div>
    )
}
