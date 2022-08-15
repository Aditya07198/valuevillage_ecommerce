import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
// import { useToast } from '../hooks/useToast';
import React from 'react';


export default function Home() {
//   const toast = useToast();
  const { register, handleSubmit, formState:{errors}, reset } = useForm();
  const router = useRouter();
  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
      if (response.status == 200) {
        reset();
        toast(
          'success',
          'Thank you for contacting us, we will be in touch soon.'
        );
      }
    } catch (err) {}
  }
console.log("errors",errors)
  return (
    <div className=" py-16 bg-gray-50 px-4 sm:px-6 flex justify-center items-center y">
      <div className="mx-auto w-full rounded-xl bg-white p-8  ">
        <form
          
          onSubmit={handleSubmit(onSubmitForm)}
          className="mx-auto  shadow p-3 yy"
          style={{ width: "60%" }}
          >
          <div className="pb-2 d-flex justify-content-between "   >
            <label style={{ width:"30%" }} for="name" >
              Full name:-
            </label>
            
            <input className="text-start w-full" style={{ width: "70%" }}  {...register('name', { required: 'Full Name is required' , maxLength: 30 })}/>
            </div>
          <span className="text-red-400 text-sm py-2" style={{ color:"red" }} >
              {errors?.name?.message}
            </span>
          <div className="pb-2 d-flex justify-content-between "   >
            <label style={{ width:"30%" }} for="email" >
              Email:-
            </label>
            <input className="text-start w-full" style={{ width: "70%" }}  {...register('email',{ required: 'You must enter your valid Email address',pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} />
            </div>

          <span className="text-red-400 text-sm py-2" style={{ color:"red" }} >
              {errors?.email?.message}
            </span>
          <div className="pb-2 d-flex justify-content-between "   >
            <label style={{ width:"30%" }} for="phone" >
              Phone:-
            </label>
            <input className="text-start w-full" style={{ width: "70%" }}  {...register('phone',{ required: 'Phone number is required'})} />
            </div>

          <span className="text-red-400 text-sm py-2" style={{ color:"red" }} >
            {errors?.phone?.message}
            </span>
          <div className="pb-2 d-flex justify-content-between "  >
            <label style={{ width:"30%" }} for="message" >
              Message:-
            </label>
            
          <div style={{ width: "70%" }}  >
          <textarea style={{ width:"100%" }} {...register('message',{ required: 'Message is required', minLength:10})} />
          </div>

</div>
          <span className="text-red-400 text-sm py-2" style={{ color:"red" }} >
          {errors?.message?.message}
          </span>
          
          <div  style={{ display:"flex", justifyContent:"center" }} >
            <button
            
              type="submit"
              className="btn btn-primary"

              >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}