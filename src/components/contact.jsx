// import { useState } from 'react';
// import emailjs from 'emailjs-com';
// import React from 'react';

// const initialState = {
// 	name: '',
// 	email: '',
// 	message: '',
// };
// const optionsFIO = [
// 	{ value: 'option1', label: 'Филиппов Вадим Николаевич' },
// 	{ value: 'option2', label: 'Филиппова Ольга Евгеньевна' },
// 	{ value: 'option3', label: 'Филиппова Мария Вадимовна' },
// 	{ value: 'option4', label: 'Филиппов Данила Вадимович' },
// 	{ value: 'option5', label: 'Половиков Эдуард Владимирович' },
// 	{ value: 'option6', label: 'Посиницкая Ирина Геннадьевна' },
// 	{ value: 'option7', label: 'Посиницкий Эдуард Дмитриевич' },
// 	{ value: 'option8', label: 'Посиницкая Мария Андреевна' },
// 	{ value: 'option9', label: 'Якименко Владимир Эдуардович' },
// 	{ value: 'option10', label: 'Якименко Светлана Юрьевна' },
// ];
// const optionsSet = [
// 	{ value: 'option1', label: 'Rafaello' },
// 	{ value: 'option2', label: 'Donatello' },
// 	{ value: 'option3', label: 'Giotto' },
// 	{ value: 'option4', label: 'Michelangelo' },
// ];
// export const Contact = (props) => {
// 	const [{ name, email, message }, setState] = useState(initialState);
// 	const [selectedOptionFio, setSelectedOptionFio] = useState('');
// 	const [selectedOptionSet, setSelectedOptionSet] = useState('');

// 	const handleChangeFio = (event) => {
// 		setSelectedOptionFio(event.target.value);
// 	};
// 	const handleChangeSet = (event) => {
// 		setSelectedOptionSet(event.target.value);
// 	};
// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setState((prevState) => ({ ...prevState, [name]: value }));
// 	};
// 	const clearState = () => setState({ ...initialState });

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		console.log(name, email, message);

// 		{
// 			/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */
// 		}

// 		emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY').then(
// 			(result) => {
// 				console.log(result.text);
// 				clearState();
// 			},
// 			(error) => {
// 				console.log(error.text);
// 			},
// 		);
// 	};
// 	return (
// 		<div>
// 			<div id="contact">
// 				<div className="container">
// 					<div className="col-md-8">
// 						<div className="row">
// 							<div className="section-title">
// 								<h2>Выбрать меню</h2>
// 								<p>Пожалуйста, выберите себя в списке и название сета, которое вы хотите заказать в ресторане!</p>
// 							</div>
// 							<form name="sentMessage" validate onSubmit={handleSubmit}>
// 								<div className="rowContact">
// 									<div className="col-md-6">
// 										<div className="form-group">
// 											{/* <input
// 												type="select"
// 												id="name"
// 												name="name"
// 												className="form-control"
// 												placeholder="Name"
// 												required
// 												onChange={handleChange}
// 											/> */}
// 											<div>
// 												<label htmlFor="optionsSelect">Я</label>
// 												<select
// 													id="optionsSelect"
// 													value={selectedOptionFio}
// 													onChange={handleChangeFio}
// 													className="form-control"
// 													required
// 												>
// 													<option value="" disabled>
// 														ФИО
// 													</option>
// 													{optionsFIO.map((option) => (
// 														<option key={option.value} value={option.value}>
// 															{option.label}
// 														</option>
// 													))}
// 												</select>
// 												<div>{/* <p>Selected Option: {selectedOption}</p> */}</div>
// 											</div>
// 											<p className="help-block text-danger"></p>
// 										</div>
// 									</div>
// 									<div className="col-md-6">
// 										<div className="form-group">
// 											<div>
// 												<label htmlFor="optionsSelect">Выбираю</label>
// 												<select
// 													id="optionsSelect"
// 													value={selectedOptionSet}
// 													onChange={handleChangeSet}
// 													className="form-control"
// 													required
// 												>
// 													<option value="" disabled>
// 														Выберите сет
// 													</option>
// 													{optionsSet.map((option) => (
// 														<option key={option.value} value={option.value}>
// 															{option.label}
// 														</option>
// 													))}
// 												</select>
// 												<div>{/* <p>Selected Option: {selectedOption}</p> */}</div>
// 											</div>
// 											<p className="help-block text-danger"></p>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="form-group">
// 									<textarea
// 										name="message"
// 										id="message"
// 										className="form-control"
// 										rows="4"
// 										placeholder="Дополнительно"
// 										required
// 										onChange={handleChange}
// 									></textarea>
// 									<p className="help-block text-danger"></p>
// 								</div>
// 								<div id="success"></div>
// 								<button type="submit" className="btn btn-custom btn-lg">
// 									Я определился(лась) с выбором
// 								</button>
// 							</form>
// 						</div>
// 					</div>
// 					<div className="col-md-3 col-md-offset-1 contact-info">
// 						<div className="contact-item">
// 							<h3>Контакты</h3>
// 							<p>
// 								<span>
// 									<i className="fa fa-map-marker"></i>{' '}
// 									<a
// 										className="taxi"
// 										data-title="Нажмите чтобы вызвать такси"
// 										href="https://3.redirect.appmetrica.yandex.com/route?&end-lat=59.963138&end-lon=30.247048&tariffClass=comfortplus&ref=kolyasiquedev&appmetrica_tracking_id=1178268795219780156&lang=ru"
// 									>
// 										Место встречи
// 									</a>
// 								</span>
// 								<p>{props.data ? props.data.addressYacht : 'loading'}</p>
// 							</p>

// 							<p>
// 								<span>
// 									<i className="fa fa-map-marker"></i> Ресторан
// 								</span>
// 								{props.data ? props.data.addressRest : 'loading'}
// 							</p>
// 						</div>
// 						<div className="contact-item">
// 							<p>
// 								<span>
// 									<i className="fa fa-phone"></i> Николай
// 								</span>{' '}
// 								{props.data ? props.data.phoneNikolai : 'loading'}
// 							</p>
// 						</div>
// 						<div className="contact-item">
// 							<p>
// 								<span>
// 									<i className="fa fa-phone"></i> Татьяна
// 								</span>{' '}
// 								{props.data ? props.data.phoneTanya : 'loading'}
// 							</p>
// 						</div>
// 						{/* <div className="contact-item">
// 							<p>
// 								<span>
// 									<i className="fa fa-envelope-o"></i> Email
// 								</span>{' '}
// 								{props.data ? props.data.email : 'loading'}
// 							</p>
// 						</div> */}
// 					</div>
// 					<div className="col-md-12">
// 						<div className="row">
// 							<div className="social">© 2024 kolyasique.dev</div>
// 						</div>
// 					</div>
// 					{/* <div className="col-md-12">
// 						<div className="row">
// 							<div className="social">
// 								<ul>
// 									<li>
// 										<a href={props.data ? props.data.facebook : '/'}>
// 											<i className="fa fa-facebook"></i>
// 										</a>
// 									</li>
// 									<li>
// 										<a href={props.data ? props.data.twitter : '/'}>
// 											<i className="fa fa-twitter"></i>
// 										</a>
// 									</li>
// 									<li>
// 										<a href={props.data ? props.data.youtube : '/'}>
// 											<i className="fa fa-youtube"></i>
// 										</a>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</div> */}
// 				</div>
// 			</div>
// 			{/* <div id="footer">
// 				<div className="container text-center">
// 					<p>&copy; 2024 kolyasique.dev</p>
// 				</div>
// 			</div> */}
// 		</div>
// 	);
// };
//!
// import { useState } from 'react';

// import React from 'react';

// const initialState = {
// 	name: '',
// 	email: '',
// 	message: '',
// };
// const optionsFIO = [
// 	{ value: 'Филиппов Вадим Николаевич', label: 'Филиппов Вадим Николаевич' },
// 	{ value: 'Филиппова Ольга Евгеньевна', label: 'Филиппова Ольга Евгеньевна' },
// 	{ value: 'Филиппова Мария Вадимовна', label: 'Филиппова Мария Вадимовна' },
// 	{ value: 'Филиппов Данила Вадимович', label: 'Филиппов Данила Вадимович' },
// 	{ value: 'Половиков Эдуард Владимирович', label: 'Половиков Эдуард Владимирович' },
// 	{ value: 'Посиницкая Ирина Геннадьевна', label: 'Посиницкая Ирина Геннадьевна' },
// 	{ value: 'Посиницкий Эдуард Дмитриевич', label: 'Посиницкий Эдуард Дмитриевич' },
// 	{ value: 'Посиницкая Мария Андреевна', label: 'Посиницкая Мария Андреевна' },
// 	{ value: 'Якименко Владимир Эдуардович', label: 'Якименко Владимир Эдуардович' },
// 	{ value: 'Якименко Светлана Юрьевна', label: 'Якименко Светлана Юрьевна' },
// ];
// const optionsSet = [
// 	{ value: 'Rafaello', label: 'Rafaello' },
// 	{ value: 'Donatello', label: 'Donatello' },
// 	{ value: 'Giotto', label: 'Giotto' },
// 	{ value: 'Michelangelo', label: 'Michelangelo' },
// ];

// const TELEGRAM_TOKEN = '7352125092:AAHQ-T1Imlas-N9aVTrL5p4NpsOTBfkDxoo';
// const TELEGRAM_CHAT_ID = '-1002163084264';

// export const Contact = (props) => {
// 	const [{ name, email, message }, setState] = useState(initialState);
// 	const [selectedOptionFio, setSelectedOptionFio] = useState('');
// 	const [selectedOptionSet, setSelectedOptionSet] = useState('');

// 	const handleChangeFio = (event) => {
// 		setSelectedOptionFio(event.target.value);
// 	};
// 	const handleChangeSet = (event) => {
// 		setSelectedOptionSet(event.target.value);
// 	};
// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setState((prevState) => ({ ...prevState, [name]: value }));
// 	};
// 	const clearState = () => setState({ ...initialState });

// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		const messageText = `Имя: ${selectedOptionFio}\nСет: ${selectedOptionSet}\nДополнительно: ${message}`;

// 		fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				chat_id: TELEGRAM_CHAT_ID,
// 				text: messageText,
// 			}),
// 		})
// 			.then((response) => response.json())
// 			.then((data) => {
// 				console.log('Success:', data);
// 				clearState();
// 				setSelectedOptionFio('');
// 				setSelectedOptionSet('');
// 			})
// 			.catch((error) => {
// 				console.error('Error:', error);
// 			});
// 	};

// 	return (
// 		<div>
// 			<div id="contact">
// 				<div className="container">
// 					<div className="col-md-8">
// 						<div className="row">
// 							<div className="section-title">
// 								<h2>Выбрать меню</h2>
// 								<p>Пожалуйста, выберите себя в списке и название сета, которое вы хотите заказать в ресторане!</p>
// 							</div>
// 							<form name="sentMessage" validate onSubmit={handleSubmit}>
// 								<div className="rowContact">
// 									<div className="col-md-6">
// 										<div className="form-group">
// 											<div>
// 												<label htmlFor="optionsSelectFio">Я</label>
// 												<select
// 													id="optionsSelectFio"
// 													value={selectedOptionFio}
// 													onChange={handleChangeFio}
// 													className="form-control"
// 													required
// 												>
// 													<option value="" disabled>
// 														ФИО
// 													</option>
// 													{optionsFIO.map((option) => (
// 														<option key={option.value} value={option.value}>
// 															{option.label}
// 														</option>
// 													))}
// 												</select>
// 											</div>
// 											<p className="help-block text-danger"></p>
// 										</div>
// 									</div>
// 									<div className="col-md-6">
// 										<div className="form-group">
// 											<div>
// 												<label htmlFor="optionsSelectSet">Выбираю</label>
// 												<select
// 													id="optionsSelectSet"
// 													value={selectedOptionSet}
// 													onChange={handleChangeSet}
// 													className="form-control"
// 													required
// 												>
// 													<option value="" disabled>
// 														Выберите сет
// 													</option>
// 													{optionsSet.map((option) => (
// 														<option key={option.value} value={option.value}>
// 															{option.label}
// 														</option>
// 													))}
// 												</select>
// 											</div>
// 											<p className="help-block text-danger"></p>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="form-group">
// 									<textarea
// 										name="message"
// 										id="message"
// 										className="form-control"
// 										rows="4"
// 										placeholder="Дополнительно"
// 										required
// 										onChange={handleChange}
// 										value={message}
// 									></textarea>
// 									<p className="help-block text-danger"></p>
// 								</div>
// 								<div id="success"></div>
// 								<button type="submit" className="btn btn-custom btn-lg">
// 									Я определился(лась) с выбором
// 								</button>
// 							</form>
// 						</div>
// 					</div>
// 					<div className="col-md-3 col-md-offset-1 contact-info">
// 						<div className="contact-item">
// 							<h3>Контакты</h3>
// 							<p>
// 								<span>
// 									<i className="fa fa-map-marker"></i>{' '}
// 									<a
// 										className="taxi"
// 										data-title="Нажмите чтобы вызвать такси"
// 										href="https://3.redirect.appmetrica.yandex.com/route?&end-lat=59.963138&end-lon=30.247048&tariffClass=comfortplus&ref=kolyasiquedev&appmetrica_tracking_id=1178268795219780156&lang=ru"
// 									>
// 										Место встречи
// 									</a>
// 								</span>
// 								<p>{props.data ? props.data.addressYacht : 'loading'}</p>
// 							</p>

// 							<p>
// 								<span>
// 									<i className="fa fa-map-marker"></i> Ресторан
// 								</span>
// 								{props.data ? props.data.addressRest : 'loading'}
// 							</p>
// 						</div>
// 						<div className="contact-item">
// 							<p>
// 								<span>
// 									<i className="fa fa-phone"></i> Николай
// 								</span>{' '}
// 								{props.data ? props.data.phoneNikolai : 'loading'}
// 							</p>
// 						</div>
// 						<div className="contact-item">
// 							<p>
// 								<span>
// 									<i className="fa fa-phone"></i> Татьяна
// 								</span>{' '}
// 								{props.data ? props.data.phoneTanya : 'loading'}
// 							</p>
// 						</div>
// 					</div>
// 					<div className="col-md-12">
// 						<div className="row">
// 							<div className="social">© 2024 kolyasique.dev</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

//!
import React, { useState, useEffect } from 'react';

const TELEGRAM_TOKEN = '7352125092:AAHQ-T1Imlas-N9aVTrL5p4NpsOTBfkDxoo';
const TELEGRAM_CHAT_ID = '-1002163084264';

export const Contact = (props) => {
	const [guests, setGuests] = useState([]);
	const [name, setName] = useState('');
	const [selectedOptionSet, setSelectedOptionSet] = useState('');
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);
	// const data = require('../../assets/damages.json');
	const optionsSet = [
		{ value: 'Rafaello', label: 'Rafaello' },
		{ value: 'Donatello', label: 'Donatello' },
		{ value: 'Giotto', label: 'Giotto' },
		{ value: 'Michelangelo', label: 'Michelangelo' },
	];
	useEffect(() => {
		// Загрузка списка гостей из guests.json
		fetch('/guests.json')
			.then((response) => response.json())
			.then((data) => {
				console.log(data, 'DATA');
				setGuests(data.guests);
			})
			.catch((error) => {
				console.error('Ошибка загрузки списка гостей:', error);
			});
	}, []);

	const handleChangeFio = (event) => {
		setName(event.target.value);
	};

	const handleChangeSet = (event) => {
		setSelectedOptionSet(event.target.value);
	};

	const handleChangeMessage = (event) => {
		setMessage(event.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const guest = guests.find((guest) => guest.name === name);

		if (!guest) {
			console.error('Гость не найден в списке');
			return;
		}

		const messageText = `Выбор меню: \n Гость: ${guest.name}\nСет: ${selectedOptionSet}\nДополнительно: ${
			message ? message : 'Не указано'
		}`;

		// Отправка сообщения в Telegram
		fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				chat_id: TELEGRAM_CHAT_ID,
				text: messageText,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Success:', data);

				// Удаление гостя из списка после успешной отправки
				const updatedGuests = guests.filter((guest) => guest.name !== name);
				setGuests(updatedGuests);

				// Очистка формы
				setName('');
				setSelectedOptionSet('');
				setMessage('');
				setSubmitted(true);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	return (
		<div>
			<div id="contact">
				<div className="container">
					<div className="col-md-8">
						<div className="row">
							<div className="section-title">
								<h2>Выбрать меню</h2>
								<p>Пожалуйста, выберите себя в списке и название сета, которое Вы хотите заказать в ресторане!</p>
							</div>
							<form name="sentMessage" validate onSubmit={handleSubmit}>
								<div className="rowContact">
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="optionsSelectFio">Я</label>
											<select
												id="optionsSelectFio"
												value={name}
												onChange={handleChangeFio}
												className="form-control"
												required
												disabled={submitted}
											>
												<option value="" disabled>
													ФИО
												</option>
												{guests.map((guest) => (
													<option key={guest.id} value={guest.name}>
														{guest.name}
													</option>
												))}
											</select>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="optionsSelectSet">Выбираю</label>
											<select
												id="optionsSelectSet"
												value={selectedOptionSet}
												onChange={handleChangeSet}
												className="form-control"
												required
												disabled={submitted}
											>
												<option value="" disabled>
													Выберите сет
												</option>
												{optionsSet.map((option) => (
													<option key={option.value} value={option.value}>
														{option.label}
													</option>
												))}
											</select>
										</div>
									</div>
								</div>
								<div className="form-group">
									<textarea
										name="message"
										id="message"
										className="form-control"
										rows="4"
										placeholder="Дополнительно: предпочтения / пожелания / ничего из меню не подходит / аллергия"
										value={message}
										onChange={handleChangeMessage}
										disabled={submitted}
									></textarea>
								</div>
								<button type="submit" disabled={submitted} className="btn btn-custom btn-lg">
									{!submitted ? 'Отправить мой выбор' : 'Спасибо! Ждем Вас!'}
								</button>
							</form>
						</div>
					</div>
					<div className="col-md-3 col-md-offset-1 contact-info">
						<div className="contact-item">
							<h3>Контакты</h3>
							<p>
								<span>
									<i className="fa fa-map-marker"></i>{' '}
									<a
										className="taxi"
										data-title="Нажмите чтобы вызвать такси"
										href="https://3.redirect.appmetrica.yandex.com/route?&end-lat=59.963138&end-lon=30.247048&tariffClass=comfortplus&ref=kolyasiquedev&appmetrica_tracking_id=1178268795219780156&lang=ru"
									>
										Место встречи
									</a>
								</span>
								<p>{props.data ? props.data.addressYacht : 'loading'}</p>
							</p>

							<p>
								<span>
									<i className="fa fa-map-marker"></i> Ресторан
								</span>
								{props.data ? props.data.addressRest : 'loading'}
							</p>
						</div>
						<div className="contact-item">
							<p>
								<span>
									<i className="fa fa-phone"></i> Николай
								</span>{' '}
								{props.data ? props.data.phoneNikolai : 'loading'}
							</p>
						</div>
						<div className="contact-item">
							<p>
								<span>
									<i className="fa fa-phone"></i> Татьяна
								</span>{' '}
								{props.data ? props.data.phoneTanya : 'loading'}
							</p>
						</div>
					</div>
					<div className="col-md-12">
						<div className="row">
							<div className="social">© 2024 kolyasique.dev</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
