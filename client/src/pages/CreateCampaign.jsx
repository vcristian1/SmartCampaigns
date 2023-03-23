import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { money } from '../assets';
import { CustomButton } from '../components';
import { checkIfImage } from '../utils';
import { FormField } from '../components';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: '',
  });

  const handleSubmit = () => {

  }

  return (
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && 'Loader...'}
      <div className='flex justify-center itmes-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
        <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Start a Campaign</h1>
      </div>

      <form action="" onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">

        <div className='flex flex-wrap gap-[40px]'>
          <FormField 
           labelName="Your Name *"
           placeholder="John Doe"
           inputType="text"
           value={form.name}
           handleChange={() => {}}
          />
          <FormField 
           labelName="Your Campaign *"
           placeholder="Write a Title"
           inputType="text"
           value={form.title}
           handleChange={() => {}}
          />
        </div>
        <FormField
         labelName="Story *"
         placeholder="Write your story"
         isTextArea
         value={form.description}
         handleChange={() => {}} 
        />

        <div className='w-full flex justify-start items-center p-4 bg-[#8c6dfe] h-[120px] rounded-[10px]'>
          <img src={money} alt={money} className="w-[40px] h-[40px] object-contain"/>
          <h4 className='font-epilogue font-bold text-[25px] text-white ml-[20px]'>You will get 100% of the raised amount</h4>
        </div>

        <div className='flex flex-wrap gap-[40px]'>
          <FormField
          labelName="Goal *"
          placeholder="ETH 0.50"
          inputType="number"
          value={form.target}
          handleChange={() => {}} 
          />
          <FormField
          labelName="End Date *"
          placeholder="End Date"
          inputType="date"
          value={form.deadline}
          handleChange={() => {}} 
          />
        </div>

        <FormField
         labelName="Campaign Image *"
         placeholder="Place image URL of your Smart Campaign"
         inputType="text"
         value={form.image}
         handleChange={() => {}} 
        />

        <div className='flex justify-center items-center mt-[40px]'>
          <CustomButton 
           btnType="submit"
           title="Submit New Campaign"
           styles="bg-[#1dc071]"
          />

        </div>
      </form>
    </div>
  )
}

export default CreateCampaign