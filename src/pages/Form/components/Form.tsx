import React from 'react';
import { Separator } from '../../Extras/components/Separator';
import '../Form.css'

interface FormProps {
  
}

const Form = ({}: FormProps) => {
  return (
    
    <div className="Form">
      <Separator/>
      <text className="">
        Pagina de afiliacion
      </text>
      <div className="bg-canaess-500 w-[25%] min-w-20 max-w-100 rounded-lg border-b-canaess-1000 border-b-[0.2rem] border-r-canaess-1000 border-r-[0.2rem] self-center">
        <text>Formulario de registro</text>
      </div>
      <div className="flex-1">
        <text className="text-xl font-semibold">
          Indicaciones del Registro
        </text>
        <text className="">
          Para registrar una solicitud de xxx, puede utilizar el hipervinculo de arriba para acceder al formulario, 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </text>
      </div>
    </div>
  );
}

export { Form };
