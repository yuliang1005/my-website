import { Image } from 'antd'
import React from 'react'

export default function TopHeader() {
    return (
        <div>
            <Image src="/head-image.png" alt='header-image' width='100%' preview={false} />
        </div>
    )
}
