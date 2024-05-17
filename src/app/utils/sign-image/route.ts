import { v2 as cloudinary } from "cloudinary";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'default_cloud_name';
const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || 'default_api_key';
const apiSecret = process.env.CLOUDINARY_API_SECRET || 'default_api_secret';
 
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
 
export async function POST(request: Request) {
  const body = await request.json();
  const { paramsToSign } = body;
 
  const signature = cloudinary.utils.api_sign_request(paramsToSign, apiSecret);
  
  return Response.json({ signature });
}