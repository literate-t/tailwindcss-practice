import rr from '../assets/rr.jpeg';
import './style.css';

type PropsType = {
    type: String
}

const ProfilePhoto = ( {type} : PropsType ) => {
    let imageStyle = '';
    if (type === 'large') {
        imageStyle = "w-[700px] h-[700px]";
    } else if (type === 'medium') {
        imageStyle = "w-[500px] h-[500px]"
    }
    return (
        <div>
            <img src={rr} alt="royce" className={`test-style rounded-full ${imageStyle}`}/>
        </div>
    );
};

export default ProfilePhoto;