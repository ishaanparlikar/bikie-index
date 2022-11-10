import { Stack, Pagination, TextField, Box } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import MediaCard from "./MediaCard";
import usePagination from "./Pagination";
import { ApiData } from "./Context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
function CardList() {
  const Data = useContext(ApiData);

  let [page, setPage] = useState(1);
  const PER_PAGE = 10;
  const _DATA = usePagination(Data, PER_PAGE);

  const handleChange = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
  };
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    console.log(moment.unix(start).format('DD/MM/yyyy'));
  };
  return (
    <>
      <Box bgcolor="#fff" padding={"20px"} margin={"20px 0"}>
        <TextField
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search"
          fullWidth
        />
  
      </Box>
      <Stack spacing={2}>
        
        {_DATA
          .currentData()
          .filter((val: any) => {
            if (search == "" ){
              // console.log(moment(startDate).unix()==val.date_stolen);
              return val;
            } else if (val.title.toLowerCase().includes(search)) {
              return val;
            } else {
              return val;
            }
          })
          .map((bike: any) => {
            return (
              <>
                <MediaCard
                  name={bike.title}
                  desc={bike.description !== null ? bike.description : ""}
                  src={bike.large_img}
                  key={bike.id}
                  stolen={bike.stolen}
                  location={bike.stolen_location}
                  date_stolen={moment.unix(bike.date_stolen).format('DD/MM/yyyy')}
                />
              </>
            );
          })}
        <Pagination
          count={Math.ceil(Data.length / PER_PAGE)}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          sx={{ backgroundColor: "#fff" }}
        />
      </Stack>
    </>
  );
}

export default CardList;
