import facebookIcon from '../assets/svgs/facebook_lhhwk2.svg'
import instagramIcon from '../assets/svgs/instagram_x8ujcq.svg'
import linkedinIcon from '../assets/svgs/linkedin_x8smhm.svg'
import Logo from './Logo'
import './styles/socialMediaIcons.css'

export default function SocialMediaIcons(){
    return(
        <div className="socials-container">
            <Logo/>
            <div className='socials'>
                <img src={facebookIcon} alt="link to facebook page" />
                <img src={instagramIcon}alt="link to our instagram" />
                <img src={linkedinIcon} alt="link to our linkedin" />
             </div>
        </div>
    )

}
