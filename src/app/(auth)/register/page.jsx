'use client'
import React from 'react';
import logo from "@/asset/eduapa.png"
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import Link from 'next/link';
const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors },} = useForm();
    const handleRegister= async (e)=>{
         const { data, error } = await authClient.signUp.email({
                name: e.name, 
                email: e.email, 
                password: e.password, 
                image: e.image,
                callbackURL: "/",
            });
        if (data){
             console.log(data);
             toast.success(`${data.user.name} is Registered Successfully`)
             await authClient.signOut();
             redirect('/login');
        }
        if (error){
            toast.error(error.message);
        }
    }
    const handleSignInGoogle = async()=>{
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    const handleErrors = (errors)=>{
        if (errors.email){
             toast.warning("Email Must Required");
        }
        else if (errors.name){
             toast.warning("Name Must Required");
        }
        else if (errors.image){
             toast.warning("Photo Must Required");
        }
        else {
              toast.warning('Password Must Be given');
        }
    }
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
             <div>
                <Image src={logo} alt="logo" width={120} height={120} className='grayscale-100'></Image>
             </div>
            <h1 className='font-semibold text-xl text-gray-600'>Sign up for EduApa</h1>
            <div>
                <form onSubmit={handleSubmit(handleRegister , handleErrors)}>
                <fieldset className="fieldset rounded-box w-85 sm:w-100  p-4">       

                <label className="label text-gray-600 font-semibold text-[16px]">Email</label>
                <input type="email" {...register('email', { required: true })} className="input outline-none w-85 sm:w-100  hover:border-blue-500 hover:border-2" placeholder="Email" />
              
                <label className="label text-gray-600 font-semibold text-[16px]">Name</label>
                <input type="text" {...register('name', { required: true })} className="input outline-none w-85 sm:w-100  hover:border-blue-500 hover:border-2" placeholder="Your Name" />
                 
                <label className="label text-gray-600 font-semibold text-[16px]">Photo</label>
                <input type="text" {...register('image', { required: true })} className="input outline-none w-85 sm:w-100  hover:border-blue-500 hover:border-2" placeholder="URL" />

                <label className="label text-gray-600 font-semibold text-[16px]">Password</label>
                <input type="password" {...register('password', { required: true })} className="input outline-none w-85 sm:w-100  hover:border-blue-500 hover:border-2" placeholder="Password" />

                <button type='submit' className="btn bg-orange-600 text-white mt-4">Create Account</button>
                </fieldset>
                </form>
                <p className='flex justify-center text-slate-500'>-------------------- OR --------------------</p>
                <div className='flex justify-center mt-5'>
                    <button onClick={handleSignInGoogle} className="btn  text-black bg-base-200  w-85 sm:w-100  border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                     Continue with Google
                    </button>
                </div>
                <p className='text-center mt-4'>Already Have an Account ? <Link href={'/login'} className='text-blue-500'>Go Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;