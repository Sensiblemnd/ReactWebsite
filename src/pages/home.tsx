import Checkbox from "@mui/material/Checkbox";

const Home = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  /*
"When the user clicks the checkbox, alert the value of the checkbox."
*/
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //alert(event.target.checked);
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
        checked={false}
        value={2}
        onChange={handleChange}
      />
    </div>
  );
};

export default Home;
