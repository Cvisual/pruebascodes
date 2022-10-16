import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Country, State, City} from "country-state-city";

export const selectCountryStateCity = () => {

	const {  register, watch, formState: { errors }, handleSubmit } = useForm();
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
		<>
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
		</>
	);

};