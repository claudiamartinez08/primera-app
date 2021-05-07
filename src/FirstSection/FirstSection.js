import './FirstSection.css';
import IMG1 from '../IMG1.png';
import Button from '../Button/Button';
 
function FirstSection(){

   return (
    <section>
        <div className="sectionOne">
            <div className="infoLeft">
                <h1 className="header1">The Place where you know people</h1>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adispiscing elit. Nunc odio in et, lectus sit loremd integer</p>
                <Button text="Get Started" className="buttonSecundary"/>

            </div>
            <img className="IMG1" src={IMG1} alt="Find love" />
        </div>
    </section>
   ) 
}

export default FirstSection