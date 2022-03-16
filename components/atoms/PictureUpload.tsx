/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import React, { useRef, useState } from 'react';

import { Button } from './Button';
import { Img } from './Img';

const PictureUpload: React.FC<{
  src?: string;
  onChange?: (data) => void;
  disabled?: boolean;
}> = ({ src, onChange, disabled }) => {
  const [picture, setPicture] = useState<any>(src);
  const ref = useRef(null);

  return (
    <div className="w-max text-center" onClick={() => ref.current.click()}>
      <div className={clsx('flex h-20 min-w-[5rem] items-center justify-center  bg-black bg-opacity-50')}>
        {!picture && <i className={clsx('icon block h-8 w-8', 'icon-image bg-white')}></i>}
        {picture && <Img src={picture} alt="upload" className={clsx('h-20 object-cover')} />}
      </div>
      <div className="flex items-center justify-center">
        <Button size="squareSmall" className="!-mt-3" disabled={disabled}>
          <i className="icon icon-add block h-3 w-3 bg-white"></i>
        </Button>
      </div>
      <input
        className="hidden"
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];

          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            onChange && onChange(file);
            setPicture(reader.result);
          };
        }}
        disabled={disabled}
        ref={ref}
      />
    </div>
  );
};

export default PictureUpload;
