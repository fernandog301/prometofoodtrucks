import React, { useEffect } from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import { useSignUpContext } from '@/context/Context';

const AddAvatarComponent = () => {
    const { image, setImage } = useSignUpContext();

    const uploadOptions = {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'default_cloud_name',
        apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || 'default_api_key',
        uploadPreset: 'PrometoFoodTrucks',
        folder: 'avatars',
        multiple: false,
        maxFiles: 1,
        cropping: false,
        sources: ['local'] as ('url' | 'local' | 'camera' | 'dropbox' | 'facebook' | 'gettyimages' | 'google_drive' | 'image_search' | 'instagram' | 'istock' | 'shutterstock' | 'unsplash')[],
        allowedFormats: ['png', 'jpg', 'jpeg'],
    };


    return (
        <div className='flex justify-center items-center py-8'>
            <CldUploadWidget signatureEndpoint="/utils/sign-image" options={uploadOptions}>
                {({ open, results }) => {
                    if (results && typeof results === 'object' && 'info' in results) {
                        const info = results.info;
                        if (typeof info === 'string') {
                            setImage(info);
                        } else if (info && 'url' in info) {
                            setImage(info.url);
                        }
                    }
                    return (
                        <button className=' w-32 h-32 border-solid border-black border-2 rounded-full bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${image})`}} onClick={() => open()}>
                            +
                        </button>
                    );
                }}
            </CldUploadWidget>
        </div>
    )
}

export default AddAvatarComponent