import dynamic from 'next/dynamic'

const DynamicMapPageComponent = dynamic(() => import('./AddLocationComponent'), {
    ssr: false,
})

export default DynamicMapPageComponent