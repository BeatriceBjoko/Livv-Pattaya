import "./Contact.css";
import { th } from "../../../content/copy.th";

export default function Contact() {
	return (
		<section className="contact">
			<div className="container">
				<h2 className="contact-title">{th.contact.title}</h2>

				<div className="contact-card">
					<form className="contact-form">
						<div className="form-group">
							<label>
								{th.contact.fields.name.label}
								<span className="required">*</span>
							</label>
							<input type="text" placeholder={th.contact.fields.name.placeholder} />
						</div>

						<div className="form-group">
							<label>
								{th.contact.fields.contact.label}
								<span className="required">*</span>
							</label>
							<input type="text" placeholder={th.contact.fields.contact.placeholder} />
						</div>

						<div className="form-group">
							<p className="form-question">
								{th.contact.question.label}
								<span className="required">*</span>
							</p>

							{th.contact.question.options.map((option, i) => (
								<label key={i} className="radio-option">
									<input type="radio" name="family" />
									<span>{option}</span>
								</label>
							))}
						</div>

						<button type="submit" className="contact-button">
							{th.contact.button}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
