"use client"

import Image from "next/image";
import SignUpComponent from "./SignUp/page";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import HomeComponent from "./Home/page";

export default function Home() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
    
  let router = useRouter();

  const handleSubmit = () => {
    

    router.push('/Components/Pages/Login');
  }


  return (
    <div>
    <HomeComponent />
    </div>
  );
}
