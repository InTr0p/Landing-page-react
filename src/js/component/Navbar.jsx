import React from "react";
const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light  align-items-end">
			<div className="container-fluid">
				<button
					className="navbar-toggler  "
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active "
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li>
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								about
							</a>
						</li>

						<li>
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								services
							</a>
						</li>

						<li>
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								contact
							</a>
						</li>
					</ul>
					<form className="d-flex"></form>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
