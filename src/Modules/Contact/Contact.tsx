import LocationMap from "../location/LocationMap";
import Phones from "./Phones/Phones";
import TableContact from "./TableContact.tsx/TableContact";

const Contact = () => {
  return (
    <>
      <TableContact />
      <Phones />
    <LocationMap/>
    </>
  );
};

export default Contact;
