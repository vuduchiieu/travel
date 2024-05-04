import { StaticImageData } from "next/image";

const icon : {
    arrow_r : string | StaticImageData,
    eye : string | StaticImageData,
    eye_hide : string | StaticImageData,
}
= {
    arrow_r : require('./arrow-right.svg').default,
    eye : require('./eye.svg').default,
    eye_hide : require('./eye-hide.svg').default,
}

export default icon;