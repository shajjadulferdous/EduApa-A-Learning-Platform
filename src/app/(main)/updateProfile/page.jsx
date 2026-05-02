'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/asset/user.png'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const UpdateProfilePage = () => {
     const { register, handleSubmit, formState: { errors },} = useForm();
     const { data: session } = authClient.useSession()
     const user = session?.user;
     const handleUpdate = async (e)=>{
         await authClient.updateUser({
            image: e.image,
            name: e.name,
        })
     }
     
     const handleErrors = ()=>{
             toast.error("Input file Missing");
     }
     return (
            <div className='flex justify-center items-center'>
               <div className='flex justify-center items-center flex-col my-10 space-y-3 px-10 py-5 shadow-xl w-95'>
                <div className='w-50 h-50'>
                    <Image src={user?.image || userAvatar} alt='user image' width={200} height={200} className='w-full h-full rounded-full'></Image>
                </div>
                 <h1 className='text-2xl font-bold mt-3'>{user?.name.toUpperCase() || "user name"}</h1>
                <form onSubmit={handleSubmit(handleUpdate , handleErrors)}>
                <fieldset className="fieldset rounded-box w-95 p-8">       
              
                <label className="label text-gray-600 font-semibold text-[16px]">Name</label>
                <input type="text" {...register('name', { required: true })} className="input outline-none w-85 hover:border-blue-500 hover:border-2" placeholder="Your Name" />
                 
                <label className="label text-gray-600 font-semibold text-[16px]">Photo</label>
                <input type="text" {...register('image', { required: true })} className="input outline-none w-85 hover:border-blue-500 hover:border-2" placeholder="URL" />

                <button type='submit' className='btn mt-4'>Update</button>
                </fieldset>
                </form>
            
               </div>
            </div>
        );
};

export default UpdateProfilePage;