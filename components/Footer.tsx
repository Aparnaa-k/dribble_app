import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type ColumnProps = {
    title: string;
    links: Array<string>;
}

const FooterColumn = ({title, links}:ColumnProps) => {
    return (
    <div className='footer-column'>
        <h4 className='font-semibold'>{title}</h4>
        <ul className='flex flex-col gap-2 font-normal'>{links.map((link)=> <Link href="/" key={link}>{link}</Link>)}</ul>
    </div>
)}

function Footer() {
  return (
    <footer className='flexStart footer'>
        <div className='flex flex-col gap-12 w-full'>            
            <div className='flex items-start flex-col'>
                <Image src='/logo-purple.svg' width={115} height={38} alt='flexibble'/>
                <p className='text-start text-sm font-normal mt-5 max-w-xs'>Flexibble is the world's leading community for creatives to share, grow, and get hired. </p>
            </div>
            <div className='flex flex-row gap-7'>
                
            <div className='flex flex-row flex-wrap gap-12'>
                <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>
            </div>
            <div className='flex-1 flex flex-col gap-4'>
                <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links}/>
                <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links}/>
            </div>
            <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links}/>

            <div className='flex flex-col flex-wrap gap-12'>
                <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links}/>
                <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links}/>
            </div>
            <div className='flex-1 flex flex-col gap-4'>
                <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links}/>
            </div>
 
            </div>
            <div className='flexBetween footer_copyright'>
                <p className='text-sm font-normal'>© 2023  Flexible. All rights reserved.</p>
                <p className='text-black font-semibold'>10,123<span> projects submitted</span></p>
            </div>  

        </div>
    </footer>
  )
}

export default Footer