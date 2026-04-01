import type { ComponentType, ImgHTMLAttributes } from 'react';

import back from '../../assets/images/back.png';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';
import image5 from '../../assets/images/image5.png';
import image6 from '../../assets/images/image6.png';
import image7 from '../../assets/images/image7.png';
import image8 from '../../assets/images/image8.png';
import image9 from '../../assets/images/image9.png';
import image10 from '../../assets/images/image10.png';
import image11 from '../../assets/images/image11.png';
import image12 from '../../assets/images/image12.png';
import image13 from '../../assets/images/image13.png';
import image14 from '../../assets/images/image14.png';

export type CardImageIconProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;

export const Back = (props: CardImageIconProps) => <img src={back} {...props} />;
export const Image1 = (props: CardImageIconProps) => <img src={image1} {...props} />;
export const Image2 = (props: CardImageIconProps) => <img src={image2} {...props} />;
export const Image3 = (props: CardImageIconProps) => <img src={image3} {...props} />;
export const Image4 = (props: CardImageIconProps) => <img src={image4} {...props} />;
export const Image5 = (props: CardImageIconProps) => <img src={image5} {...props} />;
export const Image6 = (props: CardImageIconProps) => <img src={image6} {...props} />;
export const Image7 = (props: CardImageIconProps) => <img src={image7} {...props} />;
export const Image8 = (props: CardImageIconProps) => <img src={image8} {...props} />;
export const Image9 = (props: CardImageIconProps) => <img src={image9} {...props} />;
export const Image10 = (props: CardImageIconProps) => <img src={image10} {...props} />;
export const Image11 = (props: CardImageIconProps) => <img src={image11} {...props} />;
export const Image12 = (props: CardImageIconProps) => <img src={image12} {...props} />;
export const Image13 = (props: CardImageIconProps) => <img src={image13} {...props} />;
export const Image14 = (props: CardImageIconProps) => <img src={image14} {...props} />;

export const cardIconsFactory: Record<number, ComponentType<CardImageIconProps>> = {
    1: Image1,
    2: Image2,
    3: Image3,
    4: Image4,
    5: Image5,
    6: Image6,
    7: Image7,
    8: Image8,
    9: Image9,
    10: Image10,
    11: Image11,
    12: Image12,
    13: Image13,
    14: Image14,
};
