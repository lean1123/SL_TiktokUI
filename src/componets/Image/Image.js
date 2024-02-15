import classNames from 'classnames';
import styles from './Image.module.scss';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import PropTypes from 'prop-types';

const Image = forwardRef(({ className, src, alt, falBack: customFalBack = images.noImage, ...props }, ref) => {
    const [falBack, setFalBack] = useState('');

    const handleErrorImagePropblem = () => {
        setFalBack(customFalBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={falBack || src}
            alt={alt}
            {...props}
            onError={handleErrorImagePropblem}
        />
    );
});

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    falBack: PropTypes.string,
};

export default Image;
