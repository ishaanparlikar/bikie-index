import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from 'moment';
interface MediaCard {
  src?: String;
  name: String;
  desc: String;
  stolen: boolean;
  location: String;
  date_stolen: String;
}

export default function MediaCard({
  src,
  name,
  desc,
  stolen,
  location,
  date_stolen,
}: MediaCard) {
  
  return (
    <Card sx={{ display: "flex", width: "1000px", padding: "20px" }}>
      <CardContent
        sx={{
          flex: "1",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          padding: "0",
        }}
      >
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        {desc && (
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        )}
        <Typography color={stolen ? "red" : "green"}>
          {stolen ? "Stolen" : "Found"}
        </Typography>
        <Typography>
          <>
          Date Stolen : {date_stolen}
          </>
        </Typography>
        <Typography color={"green"}>{location}</Typography>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </CardContent>
      <CardMedia
        component="img"
        height="200"
        sx={{ objectFit: "contain", width: "200px" }}
        image={src ? src : "https://via.placeholder.com/150"}
        alt={name}
      />
    </Card>
  );
}
