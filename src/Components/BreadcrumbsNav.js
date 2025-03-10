import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const BreadcrumbsNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
      <Link component={RouterLink} to="/" color="inherit">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography key={index} color="textPrimary">
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Typography>
        ) : (
          <Link key={index} component={RouterLink} to={routeTo} color="inherit">
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
