import React from "react";

export const multiStep = () => {
	return (
		<div className="flex flex-col justify-between">
			<ul className="flex justify-between">
				<li>
					<a
						href="#"
						onClick={() => setOpenTab(1)}
						className={` ${
							openTab === 1
								? "border-b-2 border-purple-600 text-purple-600"
								: ""
						} inline-block px-4 py-2 text-gray-600 `}
					>
						Tabs 1
					</a>
				</li>
				<li>
					<a
						href="#"
						onClick={() => setOpenTab(2)}
						className={` ${
							openTab === 2
								? "border-b-2 border-purple-600 text-purple-600"
								: ""
						} inline-block px-4 py-2 text-gray-600 `}
					>
						Tabs 2
					</a>
				</li>
				<li>
					<a
						href="#"
						onClick={() => setOpenTab(3)}
						className={` ${
							openTab === 3
								? "border-b-2 border-purple-600 text-purple-600"
								: ""
						} inline-block px-4 py-2 text-gray-600 `}
					>
						Tabs 3
					</a>
				</li>
			</ul>
			<div className="p-3 mt-6 bg-white ">
				<div className={openTab === 1 ? "block" : "hidden"}>
					React JS with Tailwind CSS Tab 1 Content show
				</div>
				<div className={openTab === 2 ? "block" : "hidden"}>
					React JS with Tailwind CSS Tab 2 Content show
				</div>
				<div className={openTab === 3 ? "block" : "hidden"}>
					React JS with Tailwind CSS Tab 3 Content show
				</div>
			</div>
		</div>
	);
};
