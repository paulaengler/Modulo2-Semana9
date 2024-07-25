// import React from 'react';
import { useForm } from 'react-hook-form';
import { subYears } from 'date-fns';
// useFormContext, useFormState

function Cadastro() {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

   
  const validateDate = (value) => {
    // Função para validar se a data de nascimento é maior ou igual a 18 anos atrás
    const selectedDate = new Date(value);
    const minAgeDate = subYears(new Date(), 18);
    return selectedDate <= minAgeDate || 'Você deve ter pelo menos 18 anos de idade.';
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>

        <div>
        <label htmlFor='name'>Nome:</label>
        <input id='name' type='text' {...register('name', {required: true})} placeholder="Nome" />
        {errors.name && <span>Este campo é obrigatório.</span>}
        </div>
     
        <div>
          <label htmlFor='dob'>Data de Nascimento:</label>
          <input id='dob' type='date' {...register('dob', { required: true, validate: validateDate })} />
          {errors.dob && <span>{errors.dob.message}</span>}
        </div>

        <div>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email'{...register('email', {required: true})} placeholder="Email" />
        {errors.email && <span>Este campo é obrigatório.</span>}
        </div>

        <div>
        <label htmlFor='senha'>Email</label>
        <input id='senha' type='senha'{...register('senha', {required: true})} placeholder="Senha" />
        {errors.senha && <span>Este campo é obrigatório.</span>}
        </div>
     
        <div> <button type="submit">Enviar</button> </div>
      
    </form>
    </>
  );
}

export default Cadastro

// COMPRONENTE CONTROLADO


// import React, { useState } from "react";

// export const Form = () => {
//   const [input, setInputValues] = useState({name: "", email:""});

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputValues({ ...inputValues, [name]: value });
// };

//  function onSubmit(event) {
//     event.preventDefault();
//     console.log(input)
//   }

//   return (
//     <>
//     <h2> Formulário de cadastro </h2>
//     <form onSubmit={onSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           onChange={(e) => handleChange(e)}
//           value={input.name}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           onChange={(e) => handleChange(e)}
//           value={input.email}
//         />
//       </label>
//       <button type="submit">Enviar</button>
//     </form>
//     </>
//   );
// };


// COMPONENTE NÃO CONTROLADO
// import {useRef} from "react";
// // import { useForm } from "react-hook-form";

// function Cadastro() {
//     const nomeRef = useRef();
//     const emailRef = useRef();
//     const senhaRef = useRef();
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // Acessando os valores dos inputs diretamente dos elementos do formulário
//       console.log(nomeRef.current.value);
//       console.log(emailRef.current.value);
//       console.log(senhaRef.current.value);
//     };
  
//     return (
//         <>
//         <h2> Formulário de cadastro </h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           ref={nomeRef}
//           name="nome"
//           type="text"
//         />
//         <input
//           ref={emailRef}
//           name="email"
//           type="email"
//         />
//          <input
//           ref={senhaRef}
//           name="senha"
//           type="text"
//         />
//         <button type="submit">Enviar</button>
//       </form>
//       </>
//     );
//   }

// export default Cadastro