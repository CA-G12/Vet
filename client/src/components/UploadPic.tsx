interface Props{
  setFile:Function
}

const UploadPic = ({ setFile }:Props) => {
  // State to store uploaded file
  // Handle file upload event and update state
  function handleChange(event:any) {
    setFile(event.target.files[0]);
  }
  return (
    <div>
      <input type="file" onChange={handleChange} accept="/image/*" />
    </div>
  );
};
export default UploadPic;
