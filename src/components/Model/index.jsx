import React from "react"

export default function Model(props) {
	// PROPS
	const { model } = props

	// STYLES
	const styleBikiniTop = {
		width: "500px",
		height: "500px",
		background: `url(${model.topclothes})`,
		position: "absolute",
		top: "-9%",
		left: "-5%",
		zIndex: "3",
		transform: "scale(0.5)",
	}

	const styleBikiniBottom = {
		width: "500px",
		height: "1000px",
		background: `url(${model.botclothes})`,
		position: "absolute",
		top: "-30%",
		left: "-5%",
		zIndex: "2",
		transform: "scale(0.5)",
	}

	const styleFeet = {
		width: "500px",
		height: "1000px",
		background: `url(${model.shoes})`,
		position: "absolute",
		bottom: "-37%",
		right: "-3.5%",
		transform: "scale(0.5)",
		zIndex: "1",
	}

	const styleHandBag = {
		width: "500px",
		height: "1000px",
		background: `url(${model.handbags})`,
		position: "absolute",
		bottom: "-40%",
		right: "-3.5%",
		transform: "scale(0.5)",
		zIndex: "4",
	}

	const styleNecklace = {
		width: "500px",
		height: "1000px",
		background: `url(${model.necklaces})`,
		position: "absolute",
		bottom: "-40%",
		right: "-3.5%",
		transform: "scale(0.5)",
		zIndex: "4",
	}

	const styleHair = {
		width: "1000px",
		height: "1000px",
		background: `url(${model.hairstyle})`,
		position: "absolute",
		top: "-75%",
		right: "-57%",
		transform: "scale(0.15)",
		zIndex: "4",
	}

	const styleBackground = {
		backgroundImage: `url(${model.background})`,
	}

	return (
		<div className="col-md-4">
			<div className="contain">
				<div className="body"></div>
				<div className="model"></div>
				<div className="hairstyle" style={styleHair}></div>
				<div className="necklace" style={styleNecklace}></div>
				<div className="bikinitop" style={styleBikiniTop}></div>
				<div className="bikinibottom" style={styleBikiniBottom}></div>
				<div className="handbag" style={styleHandBag}></div>
				<div className="feet" style={styleFeet}></div>
				<div className="background" style={styleBackground}></div>
			</div>
		</div>
	)
}
