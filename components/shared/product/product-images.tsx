'use client'

import Image from "next/image";
import { useState } from "react";
import { cn } from '@/lib/utils';

const ProductImages = ({images}: {images: string[] }) => {
  const [current, setCurrent] = useState(0);


  return ( <div className="space-y-4">
    <Image src={images[current]}
    width={1000}
    height={1000}
    alt='Images'
    className="min-h-[300px] object-cover object-center" />

    <div className="flex">
      {
        images.map((image, index) => (
          <div  key={index} className={cn('border mr-2 cursor-pointer hover:border-orange-600', current === index && 'border-orange-500')}>
          <Image src={image}
              width={100}
              height={100}
              alt='Images'
              className="min-h-[100px] object-cover object-center" onClick={() => setCurrent(index)} />
          </div>
        ))
      }
    </div>
  </div> );
}
 
export default ProductImages;