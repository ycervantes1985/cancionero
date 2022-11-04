import React from 'react';
import CancionForm from '../components/CancionForm';
import { simplePost } from '../services/simplePost';

const Main = () => {

    const crearCancion = async(values) => {
        values.compositores = [values.compositor1,values.compositor2,values.compositor3];
        const response = await simplePost("http://localhost:8000/api/cancion/new", values);
        console.log(response)


    }

    return (
        


        <div>
            <h1>Aqui esta el main</h1>
            <CancionForm nombre="" artista="" compositor1="" compositor2="" compositor3="" onSubmitProp={crearCancion} />
        </div>
    );
}

export default Main;
