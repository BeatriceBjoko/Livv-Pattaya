import "./Contact.css";
import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import useRevealAnimation from "../../../hooks/useRevealAnimation";

export default function Contact() {
	const { copy, language } = useLanguage();
	const containerRef = useRevealAnimation(language);
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		livingWith: "",
	});

	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [serverError, setServerError] = useState(false);

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const validate = () => {
		let newErrors = {};

		if (!form.name.trim()) {
			newErrors.name = copy.contact.errors.name;
		}

		if (!form.email.trim()) {
			newErrors.email = copy.contact.errors.emailRequired;
		} else if (!emailRegex.test(form.email)) {
			newErrors.email = copy.contact.errors.emailInvalid;
		}

		if (!form.livingWith) {
			newErrors.livingWith = copy.contact.errors.livingWith;
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm((prev) => ({
			...prev,
			[name]: value,
		}));

		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: null,
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setServerError(false);

		if (!validate()) return;

		setLoading(true);

		try {
			const response = await fetch("https://formspree.io/f/mgoloznr", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					name: form.name,
					email: form.email,
					phone: form.phone,
					livingWith: form.livingWith,
				}),
			});

			if (response.ok) {
				setSubmitted(true);
				setForm({
					name: "",
					email: "",
					phone: "",
					livingWith: "",
				});
			} else {
				setServerError(true);
			}
		} catch (error) {
			setServerError(true);
		}

		setLoading(false);
	};

	return (
		<section id="contact" className="contact" ref={containerRef}>
			<div className="container">
				<h2 className="contact-title reveal">{copy.contact.title}</h2>

				<div className="contact-card reveal">
					<form onSubmit={handleSubmit} noValidate>
						<div className="form-group">
							<label>
								{copy.contact.fields.name.label}
								<span className="required">*</span>
							</label>

							<input type="text" name="name" placeholder={copy.contact.fields.name.placeholder} value={form.name} onChange={handleChange} className={errors.name ? "error" : ""} />

							{errors.name && <p className="error-text">{errors.name}</p>}
						</div>

						<div className="form-group">
							<label>
								{copy.contact.fields.email.label}
								<span className="required">*</span>
							</label>

							<input type="email" name="email" placeholder={copy.contact.fields.email.placeholder} value={form.email} onChange={handleChange} className={errors.email ? "error" : ""} />

							{errors.email && <p className="error-text">{errors.email}</p>}
						</div>

						<div className="form-group">
							<label>{copy.contact.fields.phone.label}</label>

							<input type="text" name="phone" placeholder={copy.contact.fields.phone.placeholder} value={form.phone} onChange={handleChange} />
						</div>

						<div className="form-group">
							<label>
								{copy.contact.question.label}
								<span className="required">*</span>
							</label>

							<div className="radio-group">
								{copy.contact.question.options.map((option, i) => (
									<label key={i} className="radio-option">
										<input type="radio" name="livingWith" value={option} checked={form.livingWith === option} onChange={handleChange} />
										{option}
									</label>
								))}
							</div>

							{errors.livingWith && <p className="error-text">{errors.livingWith}</p>}
						</div>

						<button type="submit" className="contact-button" disabled={loading}>
							{loading ? copy.contact.button.sending : copy.contact.button.submit}
						</button>

						{submitted && <p className="success-message">{copy.contact.messages.success}</p>}

						{serverError && (
							<p className="error-text" style={{ textAlign: "center" }}>
								{copy.contact.messages.error}
							</p>
						)}
					</form>
				</div>
			</div>
		</section>
	);
}
