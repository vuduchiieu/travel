import Picture from '@/assest/picture/picture'
import React from 'react'
import Image from 'next/image'
import Icon from '@/assest/icon/Icon'

const LoginByIns = () => {
  return (
    <div className='flex flex-row items-center gap-x-1.5'>
        <Image className='rounded-lg' height='30' width='30'  src={Picture.instagram} alt='instaIcon' />
        <div className='text-xs'> Continues with Instagram </div>
        <Image height='16' width='16' src={Icon.arrow_r} alt='arrow-right' />
    </div>
  )
}

export default LoginByIns