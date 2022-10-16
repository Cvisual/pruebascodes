import Head from "next/head";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Country, State, City} from "country-state-city";

import styles from "../styles/Home.module.css";


export default function Home() {
	const {  register, watch, formState: { errors }, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	
	const [countries, setCountries] = useState([]);
	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);

	 const countryList = Country.getAllCountries();	
	 
	 const countrySelected = register("country");
	 const stateSelected = register("state");	
	 const citySelected = register("city");	
		
	const statesData = () =>{
		const countrySelect = watch("country", "defaultValue");		
		setStates(State.getStatesOfCountry(countrySelect));			
	}
		
	const cityData = () =>{
		const stateSelected = watch("state", "defaultValue");	
		const countrySelect = watch("country", "defaultValue");									
		setCities(City.getCitiesOfState(countrySelect, stateSelected));		
	}
	

	useEffect(()=>{
		setCountries(countryList);
	},[])

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
					<select
				className="px-12 py-2 mr-2  border-2"
				onChange={(e) => {
					countrySelected.onChange(e);
					statesData();
				}}
				ref={countrySelected.ref}
				name="country"
			>
				<option value="">seleccione un pais</option>
				{countries?.map((country, index) => (
					<option key={index} value={country.isoCode}>
						{country.name}
					</option>
				))}
			</select>
			<select
				className="px-12 py-2 mr-2  border-2"
				onChange={(e) => {
					stateSelected.onChange(e);
					cityData();
				}}
				ref={stateSelected.ref}
				name="state"
			>
				<option value="">Seleccione un departamento</option>
				{states?.map((state, index) => (
					<option key={index} value={state.isoCode}>
						{state.name}
					</option>
				))}
			</select>
			<select
				className="px-12 py-2 mr-2  border-2"
				onChange={(e) => {
					citySelected.onChange(e);
				}}
				ref={citySelected.ref}
				name="city"
			>
				<option value="">Seleccione una Ciudad</option>
				{cities?.map((city, index) => (
					<option key={index} value={city.name}>
						{city.name}
					</option>
				))}
			</select>
						<br/>
						<div className="flex justify-center items-center">
							<button type="submit"  className="mt-2 bg-red-700 text-white px-12 py-2 w-full rounded-full">
								Guardar
							</button>
						</div>
					</form>
				</div>
			</main>
		</div>
	);
}