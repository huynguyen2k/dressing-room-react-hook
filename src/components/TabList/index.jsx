import React from "react"

export default function TabList(props) {
	const { data, onSelectItem } = props

	// HANDLE FUNCTIONS
	const handleClickItem = item => {
		if (onSelectItem) {
			const dispatchItem = {
				type: item.type,
				image: item.imgSrc_png,
			}
			onSelectItem(dispatchItem)
		}
	}

	// RENDER FUNCTIONS
	const renderTabList = () => {
		if (typeof data !== "object" || data === null) return

		return data.navPills.map((tab, index) => {
			return (
				<li className="nav-item" key={index}>
					<a
						className={`nav-link btn-default ${index === 0 ? "active" : ""}`}
						data-toggle="pill"
						href={`#${tab.tabName}`}
					>
						{tab.showName}
					</a>
				</li>
			)
		})
	}

	const renderTabContent = tabType => {
		if (typeof data !== "object" || data === null) return

		return data.tabPanes
			.filter(item => tabType === item.type)
			.map(item => {
				return (
					<div className="col-md-3" key={item.id}>
						<div className="card text-center">
							<img src={item.imgSrc_jpg} alt={item.name} />
							<h4>
								<b>{item.name}</b>
							</h4>
							<button onClick={() => handleClickItem(item)}>Thử đồ</button>
						</div>
					</div>
				)
			})
	}

	const renderTabPanes = () => {
		if (typeof data !== "object" || data === null) return

		return data.navPills.map((tab, index) => {
			return (
				<div
					className={`tab-pane container ${index === 0 ? "active" : "fade"}`}
					id={tab.tabName}
					key={index}
				>
					<div className="container">
						<div className="row">{renderTabContent(tab.type)}</div>
					</div>
				</div>
			)
		})
	}

	return (
		<div className="col-md-8">
			<ul className="nav nav-pills">{renderTabList()}</ul>
			<div className="well">
				<div className="tab-content">{renderTabPanes()}</div>
			</div>
		</div>
	)
}
