import { Parallax } from 'react-parallax';
import backgroundThree from '../img/3.jpg'

const ImageThree = () => (
    <Parallax className='image' blur={0} bgImage={backgroundThree} strength={400} bgImageStyle={{minHeight:"100vh"}}>
       <div className='content'>
        <span className='img-txt'>Trzecie zdjęcie</span>
        </div>
    </Parallax> 
);

export default ImageThree 