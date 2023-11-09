import HomepageIcon from '../assets/svgs/Homepage_wg26en.svg'
import './styles/belowHero.css'
import textData from '../data/belowHeroSectionData.json'
export default function BelowHeroSection (){
    const{heading,description}= textData.data
    const{belief1,belief2,belief3,belief4}=textData.data.beliefs
    return (
        <div className="below-hero">
            <div className="icon">
                <img src={HomepageIcon}alt="icon1" />
            </div>
            <div className="content">
                <div className="header">
                  <h2>{heading}</h2>
                  <p className='description'>{description}</p>
                </div>
              <div className='beliefs'>
                <div className="col-1">
                    <p>{belief1.title}</p>
                    <p>{belief1.content}</p>
                    <p>{belief2.title}</p>
                    <p>{belief2.content}</p>
                </div>
                <div className="col-2">
                    <p>{belief3.title}</p>
                    <p>{belief3.content}</p>
                    <p>{belief4.title}</p>
                    <p>{belief4.content}</p>
                </div>
              </div>
            </div>
        </div>
    )
}
