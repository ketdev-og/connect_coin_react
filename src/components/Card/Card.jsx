import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Colors } from "../../constants/colors";


export default function BasicCard({title,amount,to}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          style={{
            color: Colors.primary_dark,
            fontWeight: 500,

            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          variant="h5"
          color="text.secondary"
          style={{
            color: Colors.secondary_dark,

            textAlign: "center",
          }}
        >
         {amount}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          color: Colors.secondary_dark,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          to={to}
          style={{
            backgroundColor: "#ec5630",
            color: "white",
            padding: "0.3rem 1rem",
            borderRadius: "10px",
          }}
        >
          View All
        </Link>
      </CardActions>
    </Card>
  );
}
