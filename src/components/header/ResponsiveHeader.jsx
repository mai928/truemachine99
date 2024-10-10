import Link from 'next/link'
import React from 'react'

const ResponsiveHeader = ({setToggle ,toggle}) => {
    return (
        <div><div className='flex  justify-between items-center '>
            <Link href={'/'}>
                <img width={100} height={'auto'} src={'/assets/logo.png'} alt='Logo' />
            </Link>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill='black' onClick={() => setToggle(!toggle)} width={25} height={25} viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </div>
        </div></div>
    )
}

export default ResponsiveHeader