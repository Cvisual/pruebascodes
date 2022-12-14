import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "../styles/Home.module.css";

export default function Home() {
	const {
		register,
		watch,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = (data) => console.log(data);

	const [inputList, setinputList] = useState([
		{
			tipoEntidad: "",
			entidad: "",
			fechaAfiliacion: "",
			estadoAfiliacion: "",
			observaciones: "",
		},
	]);
	const handleinputchange = (e, index) => {
		const { name, value } = e.target;
		const list = [...inputList];
		list[index][name] = value;
		setinputList(list);
	};

	const handleremove= index=>{
		const list=[...inputList];
		list.splice(index,1);
		setinputList(list);
	  }
	 
	  const handleaddclick=()=>{ 
		setinputList([...inputList, { tipoEntidad: "", entidad: "", fechaAfiliacion: "", estadoAfiliacion: "", observaciones: ""}]);
	  }

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className="flex flex-col justify-between">
					<form onSubmit={handleSubmit(onSubmit)}>
						{inputList.map((x, i) => (
							<div className="flex flex-col" key={i}>
								<div className="w-full ">
									<div className="flex flex-row">
										<div className="w-11/12 flex flex-row flex-wrap">
											<div className="w-3/12">
												<div>
													<label htmlFor="">Tipo entidad</label> <br/>

													<select
														name="tipoEntidad"
														className="form-select border-2"
														onChange={ e=>handleinputchange(e,i) }
													>
														<option value="">Selecciona una entidad</option>
														<option value="arl">
															Arl
														</option>
														<option value="eps">
															EPS
														</option>
													</select>
												</div>
											</div>
											<div className="w-3/12">
												<div>
													<label htmlFor="">Entidad</label><br/>
													<select
														name="entidad"
														className="form-select border-2"
														onChange={ e=>handleinputchange(e,i) }
													>
														<option value="">Selecciona una entidad</option>
														<option value="SENA">
															SENA
														</option>
														<option value="COMPENSAR">
															COMPENSAR
														</option>
													</select>
												</div>
											</div>
											<div className="w-3/12">
												<div>
													<label className="text-parrafos">Fecha afiliaci??n</label><br/>
													<input
														type="date"
														name="fechaAfiliacion"
														className="form-control border-2"
														onChange={ e=>handleinputchange(e,i) }
													/>
												</div>
											</div>
											<div className="w-3/12">
												<div>
													<label htmlFor="">Estado afiliacion</label><br/>
													<select
														name="estadoAfiliacion"
														className="form-select border-2"
														onChange={ e=>handleinputchange(e,i) }
													>
														<option value="">Selecciona una estado</option>
														<option value="ACTIVO">
															Activo
														</option>
														<option value="INACTIVO">
															Inactivo
														</option>
													</select>
												</div>
											</div>
											<div className="w-full">
												<label htmlFor="">Observaciones</label>
												<textarea
													name="observaciones"
													rows="3"
													className="w-full border-2"
													onChange={ e=>handleinputchange(e,i) }
												></textarea>
											</div>
										</div>
										<div className="w-1/12">
										{
											inputList.length!==1 &&
											<button  className="btn block bg-red-500 px-4 py-8 ml-4" onClick={()=> handleremove(i)} style={{marginBottom: 10}}>Remove</button>
										}									
										</div>
									</div>
								</div>
								<div className="w-full">
								{inputList.length - 1 === i && (
										<button
											type="button"
											className="btn block bg-green-500 px-4 w-full ml-4"
											onClick={ handleaddclick}
										>
											<i className="fas fa-plus"></i>
											agregar entidad
										</button>
									)}
								</div>
							</div>
							
						))}

						<div className="flex justify-center items-center">
							<button
								type="submit"
								className="mt-2 bg-red-700 text-white px-12 py-2 w-full rounded-full"
							>
								Guardar
							</button>
						</div>
					</form>
				</div>
			</main>
		</div>
	);
}
