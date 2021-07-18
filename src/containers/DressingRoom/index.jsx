import React from "react"

// DATA
import data from "../../data/Data.json"

// COMPONENTS
import TabList from "../../components/TabList/index"
import Model from "../../components/Model/index"
import Header from "../../components/Header/index"

// HOOKS
import { useDispatch, useSelector } from "react-redux"

// ACTIONS
import { selectItemAction } from "../../actions/dressingRoomAction"

export default function DressingRoom() {
	// SELECTORS
	const model = useSelector(state => state.dressingRoomReducer.model)

	// DISPATCH
	const dispatch = useDispatch()

	// EVENT FUNCTIONS
	const onSelectItem = item => {
		dispatch(selectItemAction(item))
	}

	return (
		<div className="container-fluid">
			<Header />
			<div className="row">
				<TabList data={data} onSelectItem={onSelectItem} />
				<Model model={model} />
			</div>
		</div>
	)
}
