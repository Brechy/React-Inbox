/* eslint-disable no-unused-vars */
import React from 'react';

const ComposeForm = (props) => {

	const submitMessage = ({people, sendMessage}) => {
		this.preventDefault();
		sendMessage({
			subject: this.target.subject.value,
			body: this.target.body.value,
		});
	};
	return (
		<form className={`form-horizontal well ${props.composing ? '' : 'hidden'}`} onSubmit={submitMessage}>
			<div className="form-group">
				<div className="col-sm-8 col-sm-offset-2">
					<h4>Compose Message</h4>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
				<div className="col-sm-8">
					<input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject">
					</input>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="body" className="col-sm-2 control-label">Body</label>
				<div className="col-sm-8">
					<textarea name="body" id="body" className="form-control"></textarea>
				</div>
			</div>
			<div className="form-group">
				<div className="col-sm-8 col-sm-offset-2">
					<input type="submit" value="Send" className="btn btn-primary">
					</input>
				</div>
			</div>
		</form>
	);
};
export default ComposeForm;
