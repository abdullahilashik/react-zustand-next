import { IProduct } from '@/types/shop-types'
import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'

interface IProductGridItemProps {
    product: IProduct
}

const ProductGridItem = ({product} : IProductGridItemProps) => {
  return (
    <>
      <Card>
        <CardHeader>{product?.title}</CardHeader>
        <CardContent>
          <div className="flex flex-col item-start relative">
            <Image src={product?.thumbnail} height={100} width={100} alt='' />
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default ProductGridItem