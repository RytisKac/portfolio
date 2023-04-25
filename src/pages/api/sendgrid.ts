import sendgrid, { MailDataRequired } from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey(process.env.SEND_GRID_API_KEY || '');

interface ReqBody {
	subject: string;
	email: string;
	message: string;
}

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		res.status(405).json({ error: 'Method not allowed' });
		return;
	}

	const { subject, email, message } = req.body as ReqBody;

	if (!subject || !email || !message) {
		res.status(400).json({ error: 'Missing required fields' });
		return;
	}

	const msg: MailDataRequired = {
		to: process.env.RECEIVER,
		from: process.env.SENDER || '',
		subject: `${req.body.subject}`,
		html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
					<html lang="en">
					<head>
						<meta charset="utf-8">
					
						<title>The HTML5 Herald</title>
						<meta name="description" content="The HTML5 Herald">
						<meta name="author" content="SitePoint">
					<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
					
						<link rel="stylesheet" href="css/styles.css?v=1.0">
					
					</head>
					
					<body>
						<div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
							</div>
								<div class="container" style="margin-left: 20px;margin-right: 20px;">
								<h3>You've got a new mail from ${req.body.email} </h3>
								<div style="font-size: 16px;">
								<p>Message:</p>
								<p>${req.body.message}</p>
								<br>
								</div>
							</div>
					</body>
					</html>`,
	};

	try {
		await sendgrid.send(msg);
		res.status(200).json({ message: 'Email sent successfully' });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Failed to send email' });
	}
}

export default sendEmail;
