import Image from 'next/image';
import { memo } from 'react';

interface ImageUploadProps {
  images: File[];
  onUpload: (imageFiles: File[]) => void;
  className?: string;
}

function ImageUpload({ images, onUpload, className }: ImageUploadProps) {
  const handleUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.onchange = (e) => {
      const files = Array.from((e.target as HTMLInputElement).files!).filter((file) => {
        for (const image of images) {
          if (file.name === image.name && file.size === image.size) return false;
        }

        return true;
      });

      if (images.length + files.length > 5) {
        alert('이미지는 최대 5개까지 업로드할 수 있습니다.');
        return;
      }

      onUpload([...images, ...files]);
    };
    input.click();
  };

  return (
    <div className={`flex w-[calc(100%+1.5rem)] gap-2 pr-6 ${className ?? ''}`}>
      <div
        className="flex h-[72px] w-[72px] shrink-0 cursor-pointer flex-col items-center justify-center bg-background"
        onClick={handleUpload}
      >
        <Image src="/assets/icons/32/Camera.svg" alt="camera" width={32} height={32} />
        <p className="text-caption">
          {images.length}
          <span className="text-bk40">/5</span>
        </p>
      </div>
      <div className="flex gap-2 overflow-hidden overflow-x-scroll">
        {images.map((image, index) => (
          <Thumbnail
            key={image.lastModified + index}
            image={image}
            onClick={() => onUpload(images.filter((_, i) => i !== index))}
          />
        ))}
      </div>
    </div>
  );
}

interface ThumbnailProps {
  image: File;
  onClick: () => void;
}

const Thumbnail = function Thumbnail({ image, onClick }: ThumbnailProps) {
  return (
    <div className="relative h-[72px] w-[72px] flex-shrink-0">
      <Image src={URL.createObjectURL(image)} alt="image" className="object-cover" fill />
      <Image
        src="/assets/icons/16/Delete.svg"
        alt="close"
        className="absolute right-1 top-1 cursor-pointer"
        width={16}
        height={16}
        onClick={onClick}
      />
    </div>
  );
};

export default memo(ImageUpload);
