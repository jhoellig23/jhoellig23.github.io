{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww25100\viewh15700\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 <!DOCTYPE html>\
<html>\
<head>\
<title>W3.CSS Template</title>\
<meta charset="UTF-8">\
<meta name="viewport" content="width=device-width, initial-scale=1">\
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">\
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">\
<style>\
///////////////////////////\
//  YOUR WEBSITE STYLES  //\
///////////////////////////\
\
html \{\
	background-color: #000;\
\}\
\
body \{\
	color: rgba(white, 0.65);\
	font-family: system-ui, sans-serif;\
	line-height: 1.25;\
	letter-spacing: 0.025em;\
\}\
\
h1 \{\
	font-size: 3rem;\
	text-align: center;\
	margin-top: 2em;\
\}\
\
p \{\
	max-width: 30em;\
	margin: 2em auto;\
	text-align: center;\
\}\
\
p.scroll-notice \{\
	text-align: center;\
	margin-top: 80vh;\
	margin-bottom: 40vh;\
\}\
\
a \{\
	color: rgba(white, 0.65);\
\
	&:hover,\
	&:active \{\
		color: rgba(white, 0.75);\
	\}\
\}\
\
\
///////////////////////\
//  FIREWORK STYLES  //\
///////////////////////\
\
$small-bp: 640px;\
$large-bp: 840px;\
\
$ui-opacity: 0.5;\
$ui-color: rgba(#fff, $ui-opacity);\
$font: 'Russo One', arial, sans-serif;\
$letter-spacing: 0.06em;\
\
\
// Utils\
// -------\
\
.hide \{\
	opacity: 0;\
	visibility: hidden;\
\}\
\
.remove \{\
	display: none !important;\
\}\
\
.blur \{\
	filter: blur(12px);\
\}\
\
\
\
.fireworks-container \{\
	pointer-events: none;\
	position: fixed;\
	z-index: 99999;\
	top: 0;\
	left: 0;\
	width: 100%;\
	height: 100%;\
	display: flex;\
	justify-content: center;\
	align-items: center;\
	\
	color: $ui-color;\
	font-family: $font;\
	line-height: 1.25;\
	letter-spacing: $letter-spacing;\
	\
	* \{\
		position: relative;\
		box-sizing: border-box; \
	\}\
\}\
\
.loading-init \{\
	width: 100%;\
	align-self: center;\
	text-align: center;\
	text-transform: uppercase;\
	\
	&__header \{\
		font-size: 2.2em;\
	\}\
	\
	&__status \{\
		margin-top: 1em;\
		font-size: 0.8em;\
		opacity: 0.75;\
	\}\
\}\
\
.stage-container \{\
	// Keep menu blur contained\
	overflow: hidden;\
	// Let border width add to size\
	box-sizing: initial;\
	border: 1px solid #222;\
	// Allow border to be hidden when fullscreen\
	margin: -1px;\
	\
	// no need for border on small screens, especially since it causes horizontal scrolling on iOS.\
	@media (max-width: $large-bp) \{\
		border: none;\
		margin: 0;\
	\}\
\}\
\
.canvas-container \{\
	width: 100%;\
	height: 100%;\
	transition: filter 0.3s;\
	background: transparent !important;\
	\
	canvas \{\
		position: absolute;\
		// Use lighten blend mode so the sky can be shown lighting up behind the canvases.\
		mix-blend-mode: lighten;\
		// Chrome mobile always places <canvas> elements on their own composite layer, but Chrome\
		// on desktop doesn't, so we'll force it. Compositing makes sense since the canvas elements,\
		// but not all UI, redraws each frame.\
		transform: translateZ(0);\
	\}\
\}\
\
.controls \{\
	display: none;\
	// display: flex;\
	justify-content: space-between;\
	position: absolute;\
	top: 0;\
	width: 100%;\
	padding-bottom: 50px;\
	transition: opacity 0.3s, visibility 0.3s;\
	\
	@media (min-width: $large-bp) \{\
			visibility: visible;\
		\
			&.hide:hover \{\
				opacity: 1;\
		\}\
	\}\
\}\
\
.menu \{\
	position: absolute;\
	top: 0;\
	bottom: 0;\
	left: 0;\
	right: 0;\
	background-color: rgba(0, 0, 0, 0.42);\
	transition: opacity 0.3s, visibility 0.3s;\
	\
	&__inner-wrap \{\
		display: flex;\
		flex-direction: column;\
		justify-content: center;\
		align-items: center;\
		position: absolute;\
		top: 0;\
		bottom: 0;\
		left: 0;\
		right: 0;\
		transition: opacity 0.3s;\
	\}\
	\
	&__header \{\
		margin-top: auto;\
		margin-bottom: 8px;\
		padding-top: 16px;\
		font-size: 2em;\
		text-transform: uppercase;\
	\}\
	\
	&__subheader \{\
		margin-bottom: auto;\
		padding-bottom: 12px;\
		font-size: 0.86em;\
		opacity: 0.8;\
	\}\
	\
	form \{\
		width: 100%;\
		max-width: 400px;\
		padding: 0 10px;\
		overflow: auto;\
		-webkit-overflow-scrolling: touch;\
	\}\
	\
	.form-option \{\
		display: flex;\
		align-items: center;\
		margin: 16px 0;\
		transition: opacity 0.3s;\
		\
		label \{\
			display: block;\
			width: 50%;\
			padding-right: 12px;\
			text-align: right;\
			text-transform: uppercase;\
			user-select: none;\
		\}\
		\
		&--select \{\
			select \{\
				display: block;\
				width: 50%;\
				height: 30px;\
				font-size: 1rem;\
				font-family: $font;\
				color: $ui-color;\
				letter-spacing: $letter-spacing;\
				background-color: transparent;\
				border: 1px solid $ui-color;\
				\
				option \{\
					background-color: black;\
				\}\
			\}\
		\}\
		\
		&--checkbox \{\
			input \{\
				display: block;\
				width: 26px;\
				height: 26px;\
				margin: 0;\
				opacity: $ui-opacity;\
			\}\
		\}\
		\
		@media (max-width: $large-bp) \{\
			select, input \{\
				outline: none;\
			\}\
		\}\
	\}\
\}\
\
.close-menu-btn \{\
	position: absolute;\
	top: 0;\
	right: 0;\
\}\
\
.btn \{\
	$size: 50px;\
	opacity: 0.16;\
	width: $size;\
	height: $size;\
	display: flex;\
	user-select: none;\
	cursor: default;\
	transition: opacity 0.3s;\
	\
	&--bright \{\
		opacity: 0.5;\
	\}\
	\
	@media (min-width: $large-bp) \{\
		&:hover \{\
			opacity: 0.32;\
		\}\
		\
		&--bright:hover \{\
			opacity: 0.75;\
		\}\
	\}\
\
	svg \{\
		display: block;\
		margin: auto;\
	\}\
\}\
\
\
.credits \{\
	margin-top: auto;\
	margin-bottom: 10px;\
	padding-top: 6px;\
	font-size: 0.8em;\
	opacity: 0.75;\
	\
	a \{\
		color: $ui-color;\
		text-decoration: none;\
		\
		&:hover,\
		&:active \{\
			color: rgba(white, 0.75);\
			text-decoration: underline;\
		\}\
	\}\
\}\
\
\
.help-modal \{\
	$self: &;\
	$duration-in: 0.4s;\
	$duration-out: 0.25s;\
	$curve-in: ease-out;\
	$curve-out: ease-in;\
	\
	display: flex;\
	justify-content: center;\
	align-items: center;\
	position: fixed;\
	top: 0;\
	bottom: 0;\
	left: 0;\
	right: 0;\
	visibility: hidden;\
	transition-property: visibility;\
	transition-duration: $duration-out;\
	\
	&__overlay \{\
		position: absolute;\
		top: 0;\
		bottom: 0;\
		left: 0;\
		right: 0;\
		opacity: 0;\
		transition-property: opacity;\
		transition-timing-function: $curve-out;\
		transition-duration: $duration-out;\
	\}\
	\
	&__dialog \{\
		display: flex;\
		flex-direction: column;\
		align-items: center;\
		max-width: 400px;\
		max-height: calc(100vh - 100px);\
		margin: 10px;\
		padding: 20px;\
		border-radius: 0.3em;\
		background-color: rgba(#000, 0.4);\
		opacity: 0;\
		transform: scale(0.9, 0.9);\
		transition-property: opacity, transform;\
		transition-timing-function: $curve-out;\
		transition-duration: $duration-out;\
		\
		@media (min-width: $large-bp) \{\
			font-size: 1.25rem;\
			max-width: 500px;\
		\}\
	\}\
	\
	&__header \{\
		font-size: 1.75em;\
		text-transform: uppercase;\
		text-align: center;\
	\}\
	\
	&__body \{\
		$separator-color: rgba(#FFF, 0.25);\
		\
		overflow-y: auto;\
		-webkit-overflow-scrolling: touch;\
		margin: 1em 0;\
		padding: 1em 0;\
		border-top: 1px solid $separator-color;\
		border-bottom: 1px solid $separator-color;\
		line-height: 1.5;\
		color: rgba(#FFF, 0.75);\
	\}\
	\
	// These styles can be adopted as a standard button style if needed.\
	&__close-btn \{\
		flex-shrink: 0;\
		outline: none;\
		border: none;\
		border-radius: 2px;\
		padding: 0.25em 0.75em;\
		margin-top: 0.36em;\
		font-family: $font;\
		font-size: 1em;\
		color: $ui-color;\
		text-transform: uppercase;\
		letter-spacing: $letter-spacing;\
		background-color: rgba(#FFF, 0.25);\
		transition: color 0.3s, background-color 0.3s;\
		\
		&:hover,\
		&:active,\
		&:focus \{\
			color: #FFF;\
			background-color: #09F;\
		\}\
	\}\
	\
	&.active \{\
		visibility: visible;\
		transition-duration: $duration-in;\
		\
		#\{$self\}__overlay \{\
			opacity: 1;\
			transition-timing-function: $curve-in;\
			transition-duration: $duration-in;\
		\}\
		\
		#\{$self\}__dialog \{\
			opacity: 1;\
			transform: scale(1, 1);\
			transition-timing-function: $curve-in;\
			transition-duration: $duration-in;\
		\}\
	\}\
\}\
</style>\
<script src=\'93main.js"></script>\
</head>\
<body>\
\
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0
\cf0 <!-- YOUR CUSTOM MARKUP -->\
\
<h1>PyrogeneX</h1>\
<p>Comming Soon...</p>\
\
\
<!-- FIREWORK APP MARKUP -->\
<div class="fireworks-container">\
	<div class="loading-init">\
<!-- 		<div class="loading-init__header">Loading</div> -->\
<!-- 		<div class="loading-init__status">Assembling Shells</div> -->\
	</div>\
	<div class="stage-container remove">\
		<div class="canvas-container">\
			<canvas id="trails-canvas"></canvas>\
			<canvas id="main-canvas"></canvas>\
		</div>\
		<div class="controls">\
			<div class="btn pause-btn">\
				<svg fill="white" width="24" height="24"><use href="#icon-pause" xlink:href="#icon-pause"></use></svg>\
			</div>\
			<div class="btn sound-btn">\
				<svg fill="white" width="24" height="24"><use href="#icon-sound-off" xlink:href="#icon-sound-off"></use></svg>\
			</div>\
			<div class="btn settings-btn">\
				<svg fill="white" width="24" height="24"><use href="#icon-settings" xlink:href="#icon-settings"></use></svg>\
			</div>\
		</div>\
		<div class="menu hide">\
			<div class="menu__inner-wrap">\
				<div class="btn btn--bright close-menu-btn">\
					<svg fill="white" width="24" height="24"><use href="#icon-close" xlink:href="#icon-close"></use></svg>\
				</div>\
				<div class="menu__header">Settings</div>\
				<div class="menu__subheader">For more info, click any label.</div>\
				<form>\
					<div class="form-option form-option--select">\
						<label class="shell-type-label">Shell Type</label>\
						<select class="shell-type"></select>\
					</div>\
					<div class="form-option form-option--select">\
						<label class="shell-size-label">Shell Size</label>\
						<select class="shell-size"></select>\
					</div>\
					<div class="form-option form-option--select">\
						<label class="quality-ui-label">Quality</label>\
						<select class="quality-ui"></select>\
					</div>\
					<div class="form-option form-option--select">\
						<label class="sky-lighting-label">Sky Lighting</label>\
						<select class="sky-lighting"></select>\
					</div>\
					<div class="form-option form-option--select">\
						<label class="scaleFactor-label">Scale</label>\
						<select class="scaleFactor"></select>\
					</div>\
					<div class="form-option form-option--checkbox">\
						<label class="auto-launch-label">Auto Fire</label>\
						<input class="auto-launch" type="checkbox" />\
					</div>\
					<div class="form-option form-option--checkbox form-option--finale-mode">\
						<label class="finale-mode-label">Finale Mode</label>\
						<input class="finale-mode" type="checkbox" />\
					</div>\
					<div class="form-option form-option--checkbox">\
						<label class="hide-controls-label">Hide Controls</label>\
						<input class="hide-controls" type="checkbox" />\
					</div>\
					<div class="form-option form-option--checkbox form-option--fullscreen">\
						<label class="fullscreen-label">Fullscreen</label>\
						<input class="fullscreen" type="checkbox" />\
					</div>\
					<div class="form-option form-option--checkbox">\
						<label class="long-exposure-label">Open Shutter</label>\
						<input class="long-exposure" type="checkbox" />\
					</div>\
				</form>\
				<div class="credits">\
					Passionately built by <a href="https://cmiller.tech/" target="_blank">Caleb Miller</a>.\
				</div>\
			</div>\
		</div>\
	</div>\
	<div class="help-modal">\
		<div class="help-modal__overlay"></div>\
		<div class="help-modal__dialog">\
			<div class="help-modal__header"></div>\
			<div class="help-modal__body"></div>\
			<button type="button" class="help-modal__close-btn">Close</button>\
		</div>\
	</div>\
</div>\
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0
\cf0 \
<!\'97\
<div class="bgimg w3-display-container w3-animate-opacity w3-text-white">\
  <div class="w3-display-topleft w3-padding-large w3-xlarge">\
    Logo\
  </div>\
  <div class="w3-display-middle">\
    <h1 class="w3-jumbo w3-animate-top">COMING SOON</h1>\
    <hr class="w3-border-grey" style="margin:auto;width:40%">\
    <p class="w3-large w3-center">35 days left</p>\
  </div>\
  <div class="w3-display-bottomleft w3-padding-large">\
    Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>\
  </div>\
</div>\
\'97>\
</body>\
</html>}