+++
title = "Contact Us"
date = "2023-04-29T11:59:25-07:00"
draft = false
showToc = false
+++

Thank you for your interest in Muse Systems. Please complete the form below and we will contact you as soon as possible.

<form
	name="muse-contact"
	method="post"
	action="/contact-thank-you"
	class="border-2 border-zinc-300 rounded-lg p-6 flex flex-col gap-4"
	netlify-honeypot="registration"
	data-netlify="true">
	<input type="hidden" name="subject" value="New message from %{formName} (%{submissionId})" />
	<div class="hidden"><label class="" for="registration">Registration #:</label><input class="w-full border-2 border-zinc-300 focus:border-zinc-900 focus:bg-white bg-zinc-50" id="registration" name="registration" type="text" /></div>
	<div class="flex flex-col md:flex-row gap-4">
		<label class="" for="name">Name:</label><input class="w-full border-2 border-zinc-300 focus:border-zinc-900 focus:bg-white bg-zinc-50" id="name" name="name" type="text" autofocus />
		<label class="" for="email">Email:</label><input class="w-full border-2 border-zinc-300 focus:border-zinc-900 focus:bg-white bg-zinc-50" id="email" name="email" type="email" />
	</div>
	<div class="flex flex-col gap-2">
		<label class="w-24" for="message">Message:</label>
		<textarea class="w-full resize-y border-2 border-zinc-300 focus:border-zinc-900 focus:bg-white bg-zinc-50" rows="5" id="message" name="message"></textarea>
	</div>
	<div class="flex flex-row gap-2">
		<div class="grow"></div>
		<button class="w-48 font-bold border-2 border-zinc-300 rounded-lg p-2 hover:bg-zinc-300" type="submit">Submit</button>
		<div class="grow"></div>
	</div>
</form>
