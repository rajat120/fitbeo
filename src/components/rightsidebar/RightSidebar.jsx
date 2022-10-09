import React from "react";
import "../rightsidebar/RightSidebar.css";
import InfoIcon from "@mui/icons-material/Info";
import ProgressBar from "../progressbar/ProgressBar";

function RightSidebar() {
	return (
		<div className="right-container">
			<div className="profile-center">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUX52K4wjSKVKzHXBgagCqtpWMuJ30ePq_HubGBg&s"
					alt="person"
				/>
			</div>
			<div className="right-row">
				<div>Rajat Agarwal</div>
				<div>Frontend Developer</div>
			</div>
			<div className="status">
				<div>
					<p>1,269</p>
					<p>Products</p>
				</div>
				<div className="line"></div>
				<div>
					<p>5.2K</p>
					<p>Followers</p>
				</div>
			</div>
			<div className="line-hrzn"></div>
			<div className="badge">
				<div>Earning</div>
				<div>
					<InfoIcon />
				</div>
			</div>
			<ProgressBar />
		</div>
	);
}

export default RightSidebar;
