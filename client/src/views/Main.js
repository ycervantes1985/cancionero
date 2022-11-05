import React, { useEffect, useState } from 'react';
import CancionForm from '../components/CancionForm';
import { simplePost } from '../services/simplePost';
import { simpleGet } from '../services/simpleGet'

const Main = () => {

    const [canciones, setCanciones] = useState();

    useEffect(() => {
        traerCanciones()
    }, []);

    const crearCancion = async(values) => {
        values.compositores = [values.compositor1,values.compositor2,values.compositor3];
        const response = await simplePost("http://localhost:8000/api/cancion/new", values);
        console.log(response)
        traerCanciones()
    }

    const traerCanciones = async() =>{
        const response = await simpleGet("http://localhost:8000/api/canciones")
        console.log(response)
        setCanciones(response.data.canciones)


    }



    return (
        <div>
            <h2>crear canción </h2>
            <CancionForm nombre="" artista="" compositor1="" compositor2="" compositor3="" onSubmitProp={crearCancion} />

            <h2>Listado de canciones y autores</h2>

            <table class="table">
                <thead>

                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Artista</th>
                        <th scope="col">Compositores</th>
                    </tr>
                </thead>
                <tbody>
                    {canciones?.map((cancion)=>
                    <tr key= {cancion._id}>
                        <th scope="row"> {cancion.nombre} </th>
                        <td> {cancion.artista} </td>
                        <td> {cancion.compositores} </td>
                    </tr>
                    )}

                </tbody>
            </table>

        </div>
    );
}

export default Main;
