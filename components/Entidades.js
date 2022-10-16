import React from "react";
import { useForm , useFieldArray } from "react-hook-form";

export const Entidades = (prop) => {
	const { register, control } = prop;

	const { append, fields, remove } = useFieldArray({
		control,
		tipoEntidad: "",
		entidad: "",
		fechaAfiliacion: "",
		estadoAfiliacion: "",
		observaciones: "",
	});

	return (
		<div className="flex flex-col">
			<div className="w-full ">
				<div className="flex flex-row">
					<div className="w-12/12 flex flex-row flex-wrap">
						{
							fields.map((item, index) => (
								<div className="w-12/12 flex flex-row flex-wrap">
									<div className="w-3/12">
										<div>
											<label htmlFor="">Tipo entidad</label> <br />
											<select												
												className="form-select border-2"
												ref={register()}
												name={`entidades[${index}].tipoEntidad`}
											>
												<option value="">
													Selecciona una entidad
												</option>
												<option value="arl">Arl</option>
												<option value="eps">EPS </option>
											</select>
										</div>
									</div>
									<div className="w-3/12">
										<div>
											<label htmlFor="">Entidad</label>
											<br />
											<select												
												className="form-select border-2"
												ref={register()}
												name={`entidades[${index}].entidad`}
											>
												<option value="">
													Selecciona una entidad
												</option>
												<option value="SENA">SENA</option>
												<option value="COMPENSAR">COMPENSAR</option>
											</select>
										</div>
									</div>
									<div className="w-3/12">
										<div>
											<label className="text-parrafos">
												Fecha afiliación
											</label>
											<br />
											<input
												type="date"
												className="form-control border-2"
												ref={register()}
												name={`entidades[${index}].fechaAfiliacion`}
											/>
										</div>
									</div>
									<div className="w-3/12">
										<div>
											<label htmlFor="">Estado afiliacion</label>
											<br />
											<select
												className="form-select border-2"
												ref={register()}
												name={`entidades[${index}].estadoAfiliacion`}
											>
												<option value="">
													Selecciona una estado
												</option>
												<option value="ACTIVO">Activo</option>
												<option value="INACTIVO">Inactivo</option>
											</select>
										</div>
									</div>
									<div className="w-full">
										<label htmlFor="">Observaciones</label>
										<textarea											
											rows="1"
											className="w-full border-2"
											ref={register()}
											name={`entidades[${index}].observaciones`}
										></textarea>
									</div>
								</div>
							))
						}
					</div>
					{/* 
					<div className="w-12/12">
						<button
							type="button"
							className="btn block bg-green-500 px-4 h-full w-full ml-4"
						>
							<i className="fas fa-plus"></i>
							agregar entidad
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};


