import React from "react";
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg  bg-dark  align-items-end">
			<div className="container-fluid px-5">
				<span className="text-white">Start Bootstrap</span>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon bg-danger"></span>Name
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active text-white"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li>
							<a
								className="nav-link active text-muted"
								aria-current="page"
								href="#">
								about
							</a>
						</li>

						<li>
							<a
								className="nav-link active text-muted"
								aria-current="page"
								href="#">
								services
							</a>
						</li>

						<li>
							<a
								className="nav-link active text-muted"
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
