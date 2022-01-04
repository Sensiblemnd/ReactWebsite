import Checkbox from "@mui/material/Checkbox";

const Home = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    alert(event.target.checked);
  };

  return (
    <div>
      HOME
      <Checkbox
        {...label}
        defaultChecked
        size="small"
        value={1}
        onChange={handleChange}
      />
      <Checkbox {...label} defaultChecked value={2} onChange={handleChange} />
      <Checkbox
        {...label}
        defaultChecked
        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
      />
    </div>
  );
};

export default Home;
