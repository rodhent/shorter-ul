import React from 'react'
import { useForm } from 'react-hook-form'

const Shoter = () => {
	const { handleSubmit, register, errors } = useForm()
	const onSub = (input) => {}

	return (
		<div>
			<input
				type="text"
				name="urlShort"
				placeholder="Enter your URL"
				ref={register({
					required: 'Required',
					pattern: {
						// value: '',
						message: 'please enter a URL',
					},
				})}
			/>
			<button type="submit"> Shorten It!</button>
		</div>
	)
}

export default Shoter
