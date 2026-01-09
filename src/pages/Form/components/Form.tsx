import React from 'react';
import '../Form.css'
import { Link } from 'react-router';

interface FormProps {
  
}

const Form = ({}: FormProps) => {
  return ( 
    <div className="Form h-screen">
      <div className="py-5">
        <text className="text-2xl font-bold text-canaess-500">
          Pagina de afiliacion
        </text>
        <Link to="/" className="flex justify-center my-10">
          <div className="bg-canaess-500 w-[25%] min-w-60 max-w-100 py-2 rounded-lg border-b-canaess-1000 border-b-[0.2rem] border-r-canaess-1000 border-r-[0.2rem] self-center">
            <text>Formulario de registro</text>
          </div>
        </Link>
        <div className="flex justify-center">
          <div className="text-start max-w-[75rem] px-24">
            <text className="text-lg font-semibold">
              Indicaciones del Registro
            </text><br/>
            <text className="">
              Para registrar una solicitud de xxx, puede utilizar el hipervinculo de arriba para acceder al formulario, <br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Form };
