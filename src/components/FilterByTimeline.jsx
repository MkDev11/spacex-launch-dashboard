import React from "react";
import { Dropdown } from "semantic-ui-react";

const launchTimelines = [
	{
		key: "All Launches",
		text: "All ",
		value: "All",
	},
	{
		key: "Upcoming",
		text: "Upcoming Launches",
		value: "Upcoming",
	},
	{
		key: "Past",
		text: "Past Launches",
		value: "Past",
	},
];

function FilterByTimeline({ setTimeline }) {
	const handleChange = (e, { value }) => {
		if (value === "All") {
			value = "";
		}
		setTimeline(`/${value}`);
	};
	return (
		<div className="timeline-filter">
			<p className="filter-name-label text-align-center">
				Launch Timeline
			</p>
			<Dropdown
				fluid
				selection
				defaultValue="All"
				options={launchTimelines}
				onChange={handleChange}
			/>
		</div>
	);
}

export default FilterByTimeline;
