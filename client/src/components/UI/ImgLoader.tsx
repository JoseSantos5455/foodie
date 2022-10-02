import { LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';

type Props = {
  className?: string;
  src: string;
  alt: string;
};

const ImgLoader = ({ src, alt, className = '' }: Props) => {
  const loadedImages: { [key: string]: boolean } = {};
  const [loaded, setLoaded] = useState(loadedImages[src]);

  const onLoad = () => {
    loadedImages[src] = true;
    setLoaded(true);
  };

  return (
    <>
      {!loaded && (
        <LoadingOutlined
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            margin: 'auto',
            maxWidth: 30,
            maxHeight: 30,
          }}
        />
      )}
      <img
        alt={alt || ''}
        className={`${className || ''} ${loaded ? 'is-img-loaded' : 'is-img-loading'}`}
        onLoad={onLoad}
        src={src}
      />
    </>
  );
};
export default ImgLoader;
