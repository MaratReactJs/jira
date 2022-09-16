import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectData, setData } from "../redux/dataSlice";
import SelectField from "./form/selectField";
import DescptionField_2 from "./form/descptionField_2";
import CheckboxField from "./form/checkboxField";
import DateField from "./form/dateField";
import TimeField from "./form/timeField";

const ModalPlan = ({ setShowPlan, createLog, setIsSubmit }) => {
	const { data } = useSelector(selectData);
	const dispatch = useDispatch();
	const handleChange = (target) => {
		dispatch(setData({ ...data, [target.name]: target.value }));
	};
	const handleSubmit = (e) => {
		createLog();
		setShowPlan(false);
		e.preventDefault();
		setIsSubmit(true);
	};

	const removeItem = () => {
		setShowPlan(false);
	};
	return (
		<div
			className="w-[100vw] h-[100vh] bg-[#00497652] fixed top-0 left-0 flex justify-center items-center z-20"
			onClick={removeItem}>
			<div
				className="w-[26vw] h-[70vh] p-[20px] rounded min-w-[10vw] min-h-[50vh] bg-white border  "
				onClick={(e) => e.stopPropagation()}>
				<form onSubmit={handleSubmit}>
					<div>
						<div className=" inline bg-[#00c3f2] rounded-full mr-5">
							<FontAwesomeIcon
								icon={faAnglesRight}
								className=" w-[20px]  text-[#fff]"
							/>
						</div>
						<h1 className="text-xl inline">Plan Time</h1>
					</div>

					<div className=" bg-[#dee3ed] h-[1px] mt-[5%]"></div>

					<div className="border border-[#dee3ed] h-[40px] mt-[5%] rounded flex justify-between">
						<div className="w-[50%] bg-[#adc4d3] text-[#466079] font-semibold flex justify-center items-center rounded">
							Issue
						</div>
						<div className="w-[50%]  text-[#466079] font-semibold flex justify-center items-center rounded">
							Project
						</div>
					</div>

					<SelectField />
					<DescptionField_2 onChange={handleChange} value={data.description} />
					<CheckboxField />
					<DateField />
					<TimeField />
					<SelectField />

					<div className="mt-[15%]   flex items-center justify-end">
						<div className="flex">
							{" "}
							<button
								type="submit"
								className="font-medium text-white bg-[#004974] mr-[3%] hover:bg-[#0073a9] hover:text-white px-3 py-2 whitespace-nowrap rounded">
								Plan Time
							</button>
							<button
								onClick={removeItem}
								className=" font-medium text-[#004974] mr-[3%] hover:bg-[#f5f8fa]  px-3  py-2 rounded hover:outline outline-offset-[-1px] outline-1">
								Cancel
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ModalPlan;
