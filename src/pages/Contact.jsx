import React, { useState } from "react";

function Contact() {
  const InitialValues = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    check: false,
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  const [formData, setFormData] = useState(InitialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(InitialValues);
  };

  return (
    <div>
      {" "}
      <section className='grid place-items-center md:px-0 px-10 mb-[44px]'>
        <div>
          <h2 className='text-[#101828] leading-[44px] font-bold my-[10px] text-[36px] mt-6'>
            Contact Me
          </h2>
          <p className='my-[30px] leading-8 font-[500] text-[20px] text-[#475467]'>
            Hi there, contact me to ask me about anything
            you have in mind
          </p>
          <section className='form'>
            <form action='' onSubmit={handleSubmit}>
              <div className='flex items-center justify-between gap-4 md:flex-row flex-col'>
                <div className='firstName w-full'>
                  <label htmlFor='first_name'>
                    First Name
                  </label>
                  <input
                    type='text'
                    id='first_name'
                    value={formData.first_name}
                    name='first_name'
                    onChange={handleChange}
                    placeholder='Enter Your First Name'
                    className='h-11 py-3 px-4 w-full border-[#d0d5dd] border-[1px] font-[400] [box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05)] rounded-lg blue_input'
                    required
                  />
                </div>
                <div className='lastName w-full'>
                  <label htmlFor='last_name'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    id='last_name'
                    value={formData.last_name}
                    name='last_name'
                    onChange={handleChange}
                    className='h-11 w-full py-3 px-4 border-[#d0d5dd] border-[1px] font-[400] [box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05)] rounded-lg blue_input'
                    placeholder='Enter Your Last Name'
                    required
                  />
                </div>
              </div>
              <div className='email'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter Your Last Name'
                  className='w-full h-11 py-3 px-4 border-[#d0d5dd] border-[1px] font-[400] [box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05)] rounded-lg focus:outline-1 blue_input'
                  required
                />
              </div>
              <div className='textarea'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  placeholder="Send me a message and i'll reply you as soon as possible..."
                  onChange={handleChange}
                  name='message'
                  value={formData.message}
                  cols='30'
                  rows='10'
                  className={` ${
                    !formData.message
                      ? "error_input"
                      : "[box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);] border-[#d0d5dd] focus:outline-1 blue_input"
                  } h-[120px] resize-none w-full  py-3 px-4  border-[1px] font-[400] [box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05)] rounded-lg   `}
                  required></textarea>
              </div>
              <div className='checked'>
                <input
                  type='checkbox'
                  name='check'
                  id='check'
                  required
                  checked={formData.check}
                  onChange={handleChange}
                />
                <h4>
                  You agree to providing your data to
                  Yanfunmi who may contact you
                </h4>
              </div>
              <button
                id='btn__submit'
                type='submit'
                className='contact_btn'>
                Send message
              </button>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Contact;
