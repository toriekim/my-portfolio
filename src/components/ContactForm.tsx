'use client';

import { FormEvent, useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function submitForm(e: FormEvent) {
    e.preventDefault();
    console.log(name, email, message);
    // TODO: submit the form, send email to myself
    console.log('Submitted');
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <form
      onSubmit={submitForm}
      className="flex w-full flex-col items-start justify-start gap-5"
    >
      {/* text fields */}
      <input
        name="name"
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex w-full shrink grow basis-0 bg-zinc-100 px-8 py-5 text-base font-normal"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex w-full shrink grow basis-0 bg-zinc-100 px-8 py-5 text-base font-normal"
      />
      <div className="h-56 w-full">
        <textarea
          name="message"
          placeholder="Type your message here"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex h-full w-full shrink grow basis-0 resize-none bg-zinc-100 px-8 py-5 text-base font-normal"
        />
      </div>
      {/* button */}
      <button
        type="submit"
        className="mt-5 flex items-start justify-start rounded-[5px] bg-magentaPink px-[82px] py-[25px] text-center font-display text-xl font-bold leading-[30px] text-yellowParchment"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
