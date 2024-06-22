//Forms!
{
	// send data to somewhere
	function sendForm(form) {
		const data = new FormData(form) // take the data

		if (validation(data, form)){
			form.reset()
			closeModalForm()
			showPositiveModal()
		}
	}

	// pipes
	function validation(data, form) {
		form.querySelectorAll(".wrongForm").forEach((e) => {
			e.classList.remove("wrongForm")
		})
		let legit = true
		let listOfValid = {}

		for (i of data) {
			let name = i[0]
			let value = i[1]

			switch (name) {
				case "name":
					listOfValid[`${i[0]}`] = isValidName(value)
					break
				case "number":
					listOfValid[`${i[0]}`] = isValidNumber(value)
					break

				case "email":
					listOfValid[`${i[0]}`] = isValidEmail(value)
					break

				default:
					listOfValid[`${i[0]}`] = true
					break
			}
		}
		for (i in listOfValid) {
			if (!listOfValid[i]) {
				form.querySelector(`input[name="${i}"]`).classList.add("wrongForm")
				alert(`${form.querySelector(`input[name="${i}"]`).value} - не валидные данные!`)
				legit = false
			}
		}
		return legit
	}
	// functions:
	function isValidName(value) {
		if (/\d/.test(value)) {
			return false
		}

		return true
	}
	function isValidNumber(value) {
		if (isNaN(value)) {
			return false
		}
		if (String(value)[0] == 7 || String(value)[0] == 8) {
		} else {
			return false
		}
		if (String(Number(value)).length !== 11) {
			return false
		}

		return true
	}
	function isValidEmail(value) {
		let re = /\S+@\S+\.\S+/
		return re.test(value)
	}

	// positive modal
	{
		function showPositiveModal(title = "Спасибо! Мы скоро свяжемся с Вами, ожидайте звонка!") {
			document.querySelector(".positiveModal").classList.add("showModal")
			document.querySelector(".positiveModal h1").innerText = title
		}
		document.querySelector(".positiveModal button").addEventListener("click", () => {
			document.querySelector(".positiveModal").classList.remove("showModal")
		})
	}

	// Create & close form
	{
		function createForm(btnText = "Отправить", headerText = "Заполните форму") {
			document.querySelector(".FORM").classList.add("showModal")
			document.querySelector(".FORM").innerHTML = `
            <div class="formCard">
               <form>
                  <h1>${headerText}</h1>
                  <input required placeholder="Ваше имя" type="text" name="name" id="" />
                  <input required placeholder="+7 (__)___-__-__" type="number" name="number" id="" />
                  <span>
                     <input required type="checkbox" name="allow" id="" />
                     <label for="allow" >Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
                  </span>
                  <input class="blueBtn" type="submit" value="${btnText}" />
               </form>
               <div onclick='closeModalForm()' class="closeBtn"></div>
            </div>
         `
			document.querySelector(".FORM .formCard form").addEventListener(
				"submit",
				(e) => {
					e.preventDefault()
					sendForm(document.querySelector(".FORM .formCard form"))
				},
				false
			)
		}

		function closeModalForm() {
			document.querySelector(".FORM").innerHTML = ""
			document.querySelector(".FORM").classList.remove("showModal")
		}
	}

	// Another forms
	{
		document.querySelectorAll("form").forEach((el) => {
			el.addEventListener("submit",(e) => {
				e.preventDefault()
				sendForm(el)
			},false)
		})
	}
}

//FAQ
{
	let questions = document.getElementsByClassName("question")
	Array.from(questions).forEach((el, index) => {
		el.firstElementChild.addEventListener(
			"click",
			() => {
				el.classList.toggle("showAnswer")

				Array.from(questions).forEach((e, i) => {
					if (i !== index) {
						e.classList.remove("showAnswer")
					}
				})
			},
			false
		)
	})
}

//Nav
{
	document.querySelector("nav").innerHTML = `
   		<span>
				<div class="icon">
					<img src="!public/nav/logo.svg" width="100%" alt="logo" />
				</div>
				<div class="miniIcon">
					<img src="!public/nav/logoMini.png" width="100%" alt="logo" />
				</div>
				<div class="title">
					<div class="head">
						<ul>
							<li>
								<img src="!public/nav/docs.png" width="100%" alt="logo" />
								<h1>
									Медицинская лицензия <br />
									№ Л041-01162-50/00341080
								</h1>
							</li>
							<li>
								<img src="!public/nav/gerb.png" width="100%" alt="logo" />
								<h1>
									Депортамент труда и социальной <br />
									защиты населения города Москвы
								</h1>
							</li>
							<li>
								<img src="!public/nav/gerb_minzdrava.png" width="100%" alt="logo" />
								<h1>
									Министерство Здравоохранения <br />
									Российской Федерации
								</h1>
							</li>
						</ul>

						<div class="btns">
							<ul>
								<li class="dropdown">
									<h1>Пансионаты</h1>
									<div class="dropdownMenu">
										<ul>
											<li>
												<p><a href="./shelkovo.html">Пансионат "Щелково"</a></p>
											</li>
											<li>
												<p><a href="./lesnoe.html">Пансионат "Лесное"</a></p>
											</li>
											<li>
												<p><a href="./pribreznyi.html">Пансионат "Прибрежный"</a></p>
											</li>
											<li>
												<p><a href="./ozerniy.html">Пансионат "Озерный"</a></p>
											</li>
										</ul>
									</div>
								</li>
								<li class="dropdown">
									<h1>О компании</h1>
									<div class="dropdownMenu">
										<ul>
											<li>
												<img src="!public/nav/dropdown/aboutUs/free-icon-about-us-8644718.svg" alt="" />
												<p><a href="./mainPage.html#aboutUs">О нас</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/aboutUs/free-icon-certificate-4211086.svg" alt="" />
												<p><a href="./mainPage.html#docsBlock">Лицензии и сертификаты</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/aboutUs/free-icon-customer-review-4725665.svg" alt="" />
												<p><a href="./mainPage.html#feedback">Отзывы</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/aboutUs/free-icon-ruble-2769409.svg" alt="" />
												<p><a href="./mainPage.html#list">Стоимость услуг</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/aboutUs/free-icon-customer-686317.svg" alt="" />
												<p><a href="./mainPage.html#gallery">Услуги для постояльцев</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/aboutUs/free-icon-team-7610864.svg" alt="" />
												<p><a href="./mainPage.html#directors">Наша команда</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/aboutUs/free-icon-doc-5755536.svg" alt="" />
												<p><a href="./mainPage.html#steps">Порядок оформления</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/aboutUs/free-icon-certificate-4211086.svg" alt="" />
												<p><a href="./ippsu.html">Госпрограмма ИППСУ</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-procedure-4286345.svg" alt="" />
												<p><a href="./vakansii.html">Вакансии</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/aboutUs/free-icon-belongings-6523074.svg" alt="" />
												<p><a href="./mainPage.html#add">Перечень необходимых вещей</a></p>
											</li>
										</ul>
									</div>
								</li>
								<li class="dropdown">
									<h1>Услуги</h1>
									<div class="dropdownMenu">
										<ul>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-old-man-12264597.svg" alt="" />
												<p><a href="./services.html?comp=1">Уход за пожилыми людьми</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-patient-4348530.svg" alt="" />
												<p><a href="./services.html?comp=2">Уход за лежачими больными</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-coronavirus-225-8556301.svg" alt="" />
												<p><a href="./services.html?comp=3">Восстановление после ковида (COVID-19)</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-alzheimer-6370801.svg" />
												<p><a href="./services.html?comp=4">Уход за больными Альцгеймером</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-alzheimer-6723561.svg" />
												<p><a href="./services.html?comp=5">Уход за больными деменцией</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-disease-4939020.svg" />
												<p><a href="./services.html?comp=6">Уход за больными Паркинсон</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-procedure-4286345.svg" />
												<p><a href="./services.html?comp=7">Уход в послеоперационный период</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-brain-2453687.svg" alt="" />
												<p><a href="./services.html?comp=8">Восстановление после инсульта</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-heart-attack-7350718.svg" alt="" />
												<p><a href="./services.html?comp=9">Восстановление после инфаркта</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-pelvis-3323150.svg" alt="" />
												<p><a href="./services.html?comp=10">Восстановление после перелома шейки бедра</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-band-aid-3824551.svg" alt="" />
												<p><a href="./services.html?comp=11">Восстановление после травмы</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-surgery-6093558.svg" alt="" />
												<p><a href="./services.html?comp=12">Восстановление после операции</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-alcoholic-14838314.svg" alt="" />
												<p><a href="./services.html?comp=13">Восстановление после алкогольной и наркотической зависимостей</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-disabled-1806186.svg" alt="" />
												<p><a href="./services.html?comp=14">Уход за инвалидами</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-grenade-7445257.svg" alt="" />
												<p><a href="./services.html?comp=15">Реабилитация после боевых действий</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-old-man-3160279.svg" alt="" />
												<p><a href="./services.html?comp=16">Организация ухода и присмотра за одинокими пожилыми людьми</a></p>
											</li>
											<li>
												<img src="!public/nav/dropdown/services/free-icon-medical-prescription-5494019.svg" alt="" />
												<p><a href="./services2.html">Перечень оказываемых услуг для постояльцев</a></p>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<h1><a href="./feedback.html">Отзывы</a></h1>
								</li>
								<li>
									<h1><a href="./photos.html">Фотогалерея</a></h1>
								</li>
								<li>
									<h1><a href="./contacts.html">Контакты</a></h1>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="contact">
					<button onclick="createForm()">СВЯЗАТЬСЯ С НАМИ</button>
					<div class="number">
						<h1><a href="tel:88005559483">8 (800) 555-94-83</a></h1>
						<h1><a href="tel:84996382294">8 (499) 638-22-94</a></h1>
					</div>
				</div>

				<div class="iconPhone">
					<div class="picture">
						<img src="!public/nav/phoneIcon.png" alt="" width="100%" />
					</div>

					<div class="numbers">
						<h1><a href="tel:88005559483">8 (800) 555-94-83</a></h1>
						<h1><a href="tel:84996382294">8 (499) 638-22-94</a></h1>
					</div>
				</div>

				<div class="burgerMenu">
					<div class="brgBtn">
						<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
						</svg>
					</div>

					<div class="btns">
						<div class="cards">
							<div class="card list">
								<h3>Пансионаты</h3>
								<ul>
									<li>
										<p><a href="./shelkovo.html">Пансионат "Щелково"</a></p>
									</li>
									<li>
										<p><a href="./lesnoe.html">Пансионат "Лесное"</a></p>
									</li>
									<li>
										<p><a href="./pribreznyi.html">Пансионат "Прибрежный"</a></p>
									</li>
									<li>
										<p><a href="./ozerniy.html">Пансионат "Озерный"</a></p>
									</li>
								</ul>
							</div>

							<div class="card list">
								<h3>О компании</h3>
								<ul>
									<li>
										<img src="!public/nav/dropdown/aboutUs/free-icon-about-us-8644718.svg" alt="" />
										<p><a href="./mainPage.html#aboutUs">О нас</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/aboutUs/free-icon-certificate-4211086.svg" alt="" />
										<p><a href="./mainPage.html#docsBlock">Лицензии и сертификаты</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/aboutUs/free-icon-customer-review-4725665.svg" alt="" />
										<p><a href="./mainPage.html#feedback">Отзывы</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/aboutUs/free-icon-ruble-2769409.svg" alt="" />
										<p><a href="./mainPage.html#list">Стоимость услуг</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/aboutUs/free-icon-customer-686317.svg" alt="" />
										<p><a href="./mainPage.html#gallery">Услуги для постояльцев</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/aboutUs/free-icon-team-7610864.svg" alt="" />
										<p><a href="./mainPage.html#directors">Наша команда</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/aboutUs/free-icon-doc-5755536.svg" alt="" />
										<p><a href="./mainPage.html#steps">Порядок оформления</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/aboutUs/free-icon-certificate-4211086.svg" alt="" />
										<p><a href="./ippsu.html">Госпрограмма ИППСУ</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-procedure-4286345.svg" alt="" />
										<p><a href="./vakansii.html">Вакансии</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/aboutUs/free-icon-belongings-6523074.svg" alt="" />
										<p><a href="./mainPage.html#add">Перечень необходимых вещей</a></p>
									</li>
								</ul>
							</div>

							<div class="card list">
								<h3>Услуги</h3>
								<ul>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-old-man-12264597.svg" alt="" />
										<p><a href="./services.html?comp=1">Уход за пожилыми людьми</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-patient-4348530.svg" alt="" />
										<p><a href="./services.html?comp=2">Уход за лежачими больными</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-coronavirus-225-8556301.svg" alt="" />
										<p><a href="./services.html?comp=3">Восстановление после ковида (COVID-19)</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-alzheimer-6370801.svg" />
										<p><a href="./services.html?comp=4">Уход за больными Альцгеймером</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-alzheimer-6723561.svg" />
										<p><a href="./services.html?comp=5">Уход за больными деменцией</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-disease-4939020.svg" />
										<p><a href="./services.html?comp=6">Уход за больными Паркинсон</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-procedure-4286345.svg" />
										<p><a href="./services.html?comp=7">Уход в послеоперационный период</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-brain-2453687.svg" alt="" />
										<p><a href="./services.html?comp=8">Восстановление после инсульта</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-heart-attack-7350718.svg" alt="" />
										<p><a href="./services.html?comp=9">Восстановление после инфаркта</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-pelvis-3323150.svg" alt="" />
										<p><a href="./services.html?comp=10">Восстановление после перелома шейки бедра</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-band-aid-3824551.svg" alt="" />
										<p><a href="./services.html?comp=11">Восстановление после травмы</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-surgery-6093558.svg" alt="" />
										<p><a href="./services.html?comp=12">Восстановление после операции</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-alcoholic-14838314.svg" alt="" />
										<p><a href="./services.html?comp=13">Восстановление после алкогольной и наркотической зависимостей</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-disabled-1806186.svg" alt="" />
										<p><a href="./services.html?comp=14">Уход за инвалидами</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-grenade-7445257.svg" alt="" />
										<p><a href="./services.html?comp=15">Реабилитация после боевых действий</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-old-man-3160279.svg" alt="" />
										<p><a href="./services.html?comp=16">Организация ухода и присмотра за одинокими пожилыми людьми</a></p>
									</li>
									<li>
										<img src="!public/nav/dropdown/services/free-icon-medical-prescription-5494019.svg" alt="" />
										<p><a href="./services2.html">Перечень оказываемых услуг для постояльцев</a></p>
									</li>
								</ul>
							</div>

							<div class="card">
								<h3><a href="./feedback.html">Отзывы</a></h3>
							</div>

							<div class="card">
								<h3><a href="./photos.html">Фотогалерея</a></h3>
							</div>

							<div class="card">
								<h3><a href="./contacts.html">Контакты</a></h3>
							</div>
						</div>
					</div>
				</div>
			</span>
   `
}

//Footer
{
	document.querySelector("footer").innerHTML = `
			<div class="content">
				<div class="block">
					<div class="info">
						<div class="btn">
							<button>
								<p>
									<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="bvi-svg-eye">
										<path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
									</svg>
									ВЕРСИЯ САЙТА <br />
									ДЛЯ СЛАБОВИДЯЩИХ
								</p>
							</button>
						</div>
						<div class="icons">
							<div class="logo">
								<img width="100%" src="!public/nav/logo.svg" alt="logo" />
							</div>
							<div class="media">
								<span><a target="_blank" href="https://wa.me/message/TENTSKCCGT2DF1"><img src="!public/FAQ/whatsapp.png" width="100%" alt="" /></a></span>
								<span><a target="_blank" href="https://vk.com/pansionatrodnoyochag"><img src="!public/FAQ/vk.png" width="100%" alt="" /></a></span>
								<span><a target="_blank" href="https://youtube.com/@rodnoy-ochag?si=LGf56rnyTuoZhxsA"><img src="!public/FAQ/youtube.png" width="100%" alt="" /></a></span>
							</div>
						</div>
						<div class="text">
							<p>Согласие на обработку персональных данных</p>
							<p>Политика конфиденциальности</p>
						</div>
					</div>
				</div>
				<div class="block">
					<div class="cards">
						<div class="card list">
							<h3>Пансионаты</h3>
							<ul>
								<li>
									<p><a href="./shelkovo.html">Пансионат "Щелково"</a></p>
								</li>
								<li>
									<p><a href="./lesnoe.html">Пансионат "Лесное"</a></p>
								</li>
								<li>
									<p><a href="./pribreznyi.html">Пансионат "Прибрежный"</a></p>
								</li>
								<li>
									<p><a href="./ozerniy.html">Пансионат "Озерный"</a></p>
								</li>
							</ul>
						</div>

						<div class="card list">
							<h3>О компании</h3>
							<ul>
								<li>
									<img src="!public/nav/dropdown/aboutUs/free-icon-about-us-8644718.svg" alt="" />
									<p><a href="./mainPage.html#aboutUs">О нас</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/aboutUs/free-icon-certificate-4211086.svg" alt="" />
									<p><a href="./mainPage.html#docsBlock">Лицензии и сертификаты</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/aboutUs/free-icon-customer-review-4725665.svg" alt="" />
									<p><a href="./mainPage.html#feedback">Отзывы</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/aboutUs/free-icon-ruble-2769409.svg" alt="" />
									<p><a href="./mainPage.html#list">Стоимость услуг</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/aboutUs/free-icon-customer-686317.svg" alt="" />
									<p><a href="./mainPage.html#gallery">Услуги для постояльцев</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/aboutUs/free-icon-team-7610864.svg" alt="" />
									<p><a href="./mainPage.html#directors">Наша команда</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/aboutUs/free-icon-doc-5755536.svg" alt="" />
									<p><a href="./mainPage.html#steps">Порядок оформления</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/aboutUs/free-icon-certificate-4211086.svg" alt="" />
									<p><a href="./ippsu.html">Госпрограмма ИППСУ</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-procedure-4286345.svg" alt="" />
									<p><a href="./vakansii.html">Вакансии</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/aboutUs/free-icon-belongings-6523074.svg" alt="" />
									<p><a href="./mainPage.html#add">Перечень необходимых вещей</a></p>
								</li>
							</ul>
						</div>

						<div class="card list">
							<h3>Услуги</h3>
							<ul>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-old-man-12264597.svg" alt="" />
									<p><a href="./services.html?comp=1">Уход за пожилыми людьми</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-patient-4348530.svg" alt="" />
									<p><a href="./services.html?comp=2">Уход за лежачими больными</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-coronavirus-225-8556301.svg" alt="" />
									<p><a href="./services.html?comp=3">Восстановление после ковида (COVID-19)</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-alzheimer-6370801.svg" />
									<p><a href="./services.html?comp=4">Уход за больными Альцгеймером</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-alzheimer-6723561.svg" />
									<p><a href="./services.html?comp=5">Уход за больными деменцией</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-disease-4939020.svg" />
									<p><a href="./services.html?comp=6">Уход за больными Паркинсон</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-procedure-4286345.svg" />
									<p><a href="./services.html?comp=7">Уход в послеоперационный период</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-brain-2453687.svg" alt="" />
									<p><a href="./services.html?comp=8">Восстановление после инсульта</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-heart-attack-7350718.svg" alt="" />
									<p><a href="./services.html?comp=9">Восстановление после инфаркта</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-pelvis-3323150.svg" alt="" />
									<p><a href="./services.html?comp=10">Восстановление после перелома шейки бедра</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-band-aid-3824551.svg" alt="" />
									<p><a href="./services.html?comp=11">Восстановление после травмы</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-surgery-6093558.svg" alt="" />
									<p><a href="./services.html?comp=12">Восстановление после операции</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-alcoholic-14838314.svg" alt="" />
									<p><a href="./services.html?comp=13">Восстановление после алкогольной и наркотической зависимостей</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-disabled-1806186.svg" alt="" />
									<p><a href="./services.html?comp=14">Уход за инвалидами</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-grenade-7445257.svg" alt="" />
									<p><a href="./services.html?comp=15">Реабилитация после боевых действий</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-old-man-3160279.svg" alt="" />
									<p><a href="./services.html?comp=16">Организация ухода и присмотра за одинокими пожилыми людьми</a></p>
								</li>
								<li>
									<img src="!public/nav/dropdown/services/free-icon-medical-prescription-5494019.svg" alt="" />
									<p><a href="./services2.html">Перечень оказываемых услуг для постояльцев</a></p>
								</li>
							</ul>
						</div>

						<div class="card">
							<h3><a href="./feedback.html">Отзывы</a></h3>
						</div>

						<div class="card">
							<h3><a href="./photos.html">Фотогалерея</a></h3>
						</div>

						<div class="card">
							<h3><a href="./contacts.html">Контакты</a></h3>
						</div>
					</div>
				</div>
				<div class="block">
					<div class="contacts">
						<h1>Свяжитесь с нами</h1>
						<div class="container">
							<ul>
								<li>
									<svg id="svg-1482" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
										<path d="M8.5 2C8.77614 2 9 2.22386 9 2.5V4.5C9 4.77614 8.77614 5 8.5 5C8.22386 5 8 4.77614 8 4.5V4H6.5C5.67157 4 5 4.67157 5 5.5V13.5C5 13.7761 4.77614 14 4.5 14C4.22386 14 4 13.7761 4 13.5V5.5C4 4.11929 5.11929 3 6.5 3H8V2.5C8 2.22386 8.22386 2 8.5 2Z" fill="#e83a3a"></path>
										<path d="M11.5 2C11.7761 2 12 2.22386 12 2.5V4.5C12 4.77614 11.7761 5 11.5 5C11.2239 5 11 4.77614 11 4.5V2.5C11 2.22386 11.2239 2 11.5 2Z" fill="#e83a3a"></path>
										<path d="M14.5 2C14.7761 2 15 2.22386 15 2.5V4.5C15 4.77614 14.7761 5 14.5 5C14.2239 5 14 4.77614 14 4.5V2.5C14 2.22386 14.2239 2 14.5 2Z" fill="#e83a3a"></path>
										<path d="M17.5 2C17.7761 2 18 2.22386 18 2.5V4.5C18 4.77614 17.7761 5 17.5 5C17.2239 5 17 4.77614 17 4.5V2.5C17 2.22386 17.2239 2 17.5 2Z" fill="#e83a3a"></path>
										<path d="M20.5 2C20.7761 2 21 2.22386 21 2.5V4.5C21 4.77614 20.7761 5 20.5 5C20.2239 5 20 4.77614 20 4.5V2.5C20 2.22386 20.2239 2 20.5 2Z" fill="#e83a3a"></path>
										<path d="M23.5 2C23.7761 2 24 2.22386 24 2.5V4.5C24 4.77614 23.7761 5 23.5 5C23.2239 5 23 4.77614 23 4.5V2.5C23 2.22386 23.2239 2 23.5 2Z" fill="#e83a3a"></path>
										<path d="M26.5 2C26.7761 2 27 2.22386 27 2.5V3H28.5C29.8807 3 31 4.11929 31 5.5V21.5C31 22.8807 29.8807 24 28.5 24H17.5C17.2239 24 17 23.7761 17 23.5C17 23.2239 17.2239 23 17.5 23H28.5C29.3284 23 30 22.3284 30 21.5V5.5C30 4.67157 29.3284 4 28.5 4H27V4.5C27 4.77614 26.7761 5 26.5 5C26.2239 5 26 4.77614 26 4.5V2.5C26 2.22386 26.2239 2 26.5 2Z" fill="#e83a3a"></path>
										<path d="M8 9.5C8 9.22386 8.22386 9 8.5 9H12.5C12.7761 9 13 9.22386 13 9.5C13 9.77614 12.7761 10 12.5 10H8.5C8.22386 10 8 9.77614 8 9.5Z" fill="#e83a3a"></path>
										<path d="M15 9.5C15 9.22386 15.2239 9 15.5 9H19.5C19.7761 9 20 9.22386 20 9.5C20 9.77614 19.7761 10 19.5 10H15.5C15.2239 10 15 9.77614 15 9.5Z" fill="#e83a3a"></path>
										<path d="M22 9.5C22 9.22386 22.2239 9 22.5 9H26.5C26.7761 9 27 9.22386 27 9.5C27 9.77614 26.7761 10 26.5 10H22.5C22.2239 10 22 9.77614 22 9.5Z" fill="#e83a3a"></path>
										<path d="M8 13.5C8 13.2239 8.22386 13 8.5 13H12.5C12.7761 13 13 13.2239 13 13.5C13 13.7761 12.7761 14 12.5 14H8.5C8.22386 14 8 13.7761 8 13.5Z" fill="#e83a3a"></path>
										<path d="M15 13.5C15 13.2239 15.2239 13 15.5 13H19.5C19.7761 13 20 13.2239 20 13.5C20 13.7761 19.7761 14 19.5 14H15.5C15.2239 14 15 13.7761 15 13.5Z" fill="#e83a3a"></path>
										<path d="M22 13.5C22 13.2239 22.2239 13 22.5 13H26.5C26.7761 13 27 13.2239 27 13.5C27 13.7761 26.7761 14 26.5 14H22.5C22.2239 14 22 13.7761 22 13.5Z" fill="#e83a3a"></path>
										<path d="M15 17.5C15 17.2239 15.2239 17 15.5 17H19.5C19.7761 17 20 17.2239 20 17.5C20 17.7761 19.7761 18 19.5 18H15.5C15.2239 18 15 17.7761 15 17.5Z" fill="#e83a3a"></path>
										<path d="M22 17.5C22 17.2239 22.2239 17 22.5 17H26.5C26.7761 17 27 17.2239 27 17.5C27 17.7761 26.7761 18 26.5 18H22.5C22.2239 18 22 17.7761 22 17.5Z" fill="#e83a3a"></path>
										<path d="M7.5 19C7.77614 19 8 19.2239 8 19.5V22H9.5C9.77614 22 10 22.2239 10 22.5C10 22.7761 9.77614 23 9.5 23H7.5C7.22386 23 7 22.7761 7 22.5V19.5C7 19.2239 7.22386 19 7.5 19Z" fill="#e83a3a"></path>
										<path fill-rule="evenodd" clip-rule="evenodd" d="M1 22.5C1 18.9101 3.91015 16 7.5 16C11.0899 16 14 18.9101 14 22.5C14 26.0899 11.0899 29 7.5 29C3.91015 29 1 26.0899 1 22.5ZM7.5 28C4.46243 28 2 25.5376 2 22.5C2 19.4624 4.46243 17 7.5 17C10.5376 17 13 19.4624 13 22.5C13 25.5376 10.5376 28 7.5 28Z" fill="#e83a3a"></path>
									</svg>
									<p>Ежедневно с 9:00 до 21:00</p>
								</li>
								<li>
									<svg id="svg-4565" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
										<path d="M9 4.5C9 3.11929 10.1193 2 11.5 2H20.51C21.8852 2 23 3.11481 23 4.49V4.5C23 4.77614 22.7761 5 22.5 5C22.2239 5 22 4.77614 22 4.5V4.49C22 3.6671 21.3329 3 20.51 3H11.5C10.6716 3 10 3.67157 10 4.5V22.5C10 22.7761 9.77614 23 9.5 23C9.22386 23 9 22.7761 9 22.5V4.5Z" fill="#e83a3a"></path>
										<path
											d="M11 6.5C11 6.22386 11.2239 6 11.5 6H22.5C22.7761 6 23 6.22386 23 6.5V26.5C23 27.8807 21.8807 29 20.5 29H11.5C10.1193 29 9 27.8807 9 26.5V24.5C9 24.2239 9.22386 24 9.5 24H20.5C20.7761 24 21 24.2239 21 24.5C21 24.7761 20.7761 25 20.5 25H10V26.5C10 27.3284 10.6716 28 11.5 28H20.5C21.3284 28 22 27.3284 22 26.5V7H11.5C11.2239 7 11 6.77614 11 6.5Z"
											fill="#e83a3a"
										></path>
										<path d="M15 26.5C15 25.9477 15.4477 25.5 16 25.5C16.5523 25.5 17 25.9477 17 26.5C17 27.0523 16.5523 27.5 16 27.5C15.4477 27.5 15 27.0523 15 26.5Z" fill="#e83a3a"></path>
										<path d="M13.5 5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4C13.2239 4 13 4.22386 13 4.5C13 4.77614 13.2239 5 13.5 5Z" fill="#e83a3a"></path>
										<path d="M15 4.5C15 4.22386 15.2239 4 15.5 4H18.5C18.7761 4 19 4.22386 19 4.5C19 4.77614 18.7761 5 18.5 5H15.5C15.2239 5 15 4.77614 15 4.5Z" fill="#e83a3a"></path>
										<path d="M16.814 9.13967C16.6278 8.95344 16.3259 8.95344 16.1397 9.13967C15.9534 9.32589 15.9534 9.62782 16.1397 9.81405L20.1859 13.8603C20.3722 14.0466 20.6741 14.0466 20.8603 13.8603C21.0466 13.6741 21.0466 13.3722 20.8603 13.186L16.814 9.13967Z" fill="#e83a3a"></path>
										<path d="M19.5116 9.13967C19.3253 8.95344 19.0234 8.95344 18.8372 9.13967C18.651 9.32589 18.651 9.62782 18.8372 9.81405L20.186 11.1628C20.3722 11.349 20.6741 11.349 20.8603 11.1628C21.0466 10.9766 21.0466 10.6747 20.8603 10.4884L19.5116 9.13967Z" fill="#e83a3a"></path>
									</svg>
									<p><a href="tel:88005559483">8 (800) 555-94-83</a></p>
								</li>
								<li>
									<svg id="svg-4565" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
										<path d="M9 4.5C9 3.11929 10.1193 2 11.5 2H20.51C21.8852 2 23 3.11481 23 4.49V4.5C23 4.77614 22.7761 5 22.5 5C22.2239 5 22 4.77614 22 4.5V4.49C22 3.6671 21.3329 3 20.51 3H11.5C10.6716 3 10 3.67157 10 4.5V22.5C10 22.7761 9.77614 23 9.5 23C9.22386 23 9 22.7761 9 22.5V4.5Z" fill="#e83a3a"></path>
										<path
											d="M11 6.5C11 6.22386 11.2239 6 11.5 6H22.5C22.7761 6 23 6.22386 23 6.5V26.5C23 27.8807 21.8807 29 20.5 29H11.5C10.1193 29 9 27.8807 9 26.5V24.5C9 24.2239 9.22386 24 9.5 24H20.5C20.7761 24 21 24.2239 21 24.5C21 24.7761 20.7761 25 20.5 25H10V26.5C10 27.3284 10.6716 28 11.5 28H20.5C21.3284 28 22 27.3284 22 26.5V7H11.5C11.2239 7 11 6.77614 11 6.5Z"
											fill="#e83a3a"
										></path>
										<path d="M15 26.5C15 25.9477 15.4477 25.5 16 25.5C16.5523 25.5 17 25.9477 17 26.5C17 27.0523 16.5523 27.5 16 27.5C15.4477 27.5 15 27.0523 15 26.5Z" fill="#e83a3a"></path>
										<path d="M13.5 5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4C13.2239 4 13 4.22386 13 4.5C13 4.77614 13.2239 5 13.5 5Z" fill="#e83a3a"></path>
										<path d="M15 4.5C15 4.22386 15.2239 4 15.5 4H18.5C18.7761 4 19 4.22386 19 4.5C19 4.77614 18.7761 5 18.5 5H15.5C15.2239 5 15 4.77614 15 4.5Z" fill="#e83a3a"></path>
										<path d="M16.814 9.13967C16.6278 8.95344 16.3259 8.95344 16.1397 9.13967C15.9534 9.32589 15.9534 9.62782 16.1397 9.81405L20.1859 13.8603C20.3722 14.0466 20.6741 14.0466 20.8603 13.8603C21.0466 13.6741 21.0466 13.3722 20.8603 13.186L16.814 9.13967Z" fill="#e83a3a"></path>
										<path d="M19.5116 9.13967C19.3253 8.95344 19.0234 8.95344 18.8372 9.13967C18.651 9.32589 18.651 9.62782 18.8372 9.81405L20.186 11.1628C20.3722 11.349 20.6741 11.349 20.8603 11.1628C21.0466 10.9766 21.0466 10.6747 20.8603 10.4884L19.5116 9.13967Z" fill="#e83a3a"></path>
									</svg>
									<p><a href="tel:84996382294">8 (499) 638-22-94</a></p>
								</li>
								<li>
									<svg id="svg-8074" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
										<path
											d="M2.5 16C2.5 8.54416 8.54416 2.5 16 2.5C23.4558 2.5 29.5 8.54416 29.5 16C29.5 17.9508 29.0073 19.2445 28.2 19.85C27.425 20.4313 26.156 20.519 24.2236 19.5528C23.9766 19.4293 23.6763 19.5294 23.5528 19.7764C23.4293 20.0234 23.5294 20.3237 23.7764 20.4472C25.844 21.481 27.575 21.5687 28.8 20.65C29.9927 19.7555 30.5 18.0492 30.5 16C30.5 7.99187 24.0081 1.5 16 1.5C7.99187 1.5 1.5 7.99187 1.5 16C1.5 24.0081 7.99187 30.5 16 30.5C20.3308 30.5 24.2187 28.6007 26.8749 25.5913C27.0576 25.3842 27.0379 25.0682 26.8309 24.8855C26.6238 24.7028 26.3079 24.7225 26.1251 24.9295C23.6507 27.733 20.032 29.5 16 29.5C8.54416 29.5 2.5 23.4558 2.5 16Z"
											fill="#e83a3a"
										></path>
										<path
											d="M9.5 16C9.5 12.4101 12.4101 9.5 16 9.5C19.5899 9.5 22.5 12.4101 22.5 16C22.5 16.2761 22.7239 16.5 23 16.5C23.2761 16.5 23.5 16.2761 23.5 16C23.5 11.8579 20.1421 8.5 16 8.5C11.8579 8.5 8.5 11.8579 8.5 16C8.5 20.1421 11.8579 23.5 16 23.5C18.7767 23.5 21.2003 21.9908 22.4963 19.7504C22.6346 19.5113 22.5529 19.2055 22.3139 19.0672C22.0749 18.9289 21.769 19.0106 21.6307 19.2496C20.5061 21.1938 18.4053 22.5 16 22.5C12.4101 22.5 9.5 19.5899 9.5 16Z"
											fill="#e83a3a"
										></path>
									</svg>
									<p><a href="mailto:rvcshelkovo@mail.ru">rvcshelkovo@mail.ru</a></p>
								</li>
							</ul>
						</div>
						<p class="underTitle">Представленная на сайте информация не является публичной офертой.</p>
					</div>
				</div>
			</div>
			<div class="underContent">
				<p>© 2012 - 2024 г. Официальный сайт сети частных пансионатов для пожилых "Родной очаг". Все права защищены.</p>
			</div>
      `

	document.querySelectorAll("footer .content .block .cards .list h3").forEach((el) => {
		el.addEventListener(
			"click",
			() => {
				el.parentNode.classList.toggle("showList")
			},
			false
		)
	})
}
