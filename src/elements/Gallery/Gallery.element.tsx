import { Props } from '@/shared/types';
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import './Gallery.element.scss';

type P = {
  images: ReactImageGalleryItem[];
};

export default function GalleryElement(props: Props<'div', P>) {
  const { images } = props;
  return (
    <div>
      <ReactImageGallery
        autoPlay
        items={images}
        lazyLoad
        infinite
        showThumbnails
        showIndex
      />
    </div>
  );
}
