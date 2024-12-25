const TableContact = () => {
  return (
    <>
      <div className="Table">
        <div className="container d-flex justify-content-center">
          <table className="table table-striped my-5">
            <thead>
              <tr>
                <th scope="col">Days</th>
                <th scope="col">Times</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>
                  {" "}
                  <i className="fa fa-circle" style={{ color: "green" }}></i> 9
                  AM - 5 PM
                </td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>
                  {" "}
                  <i className="fa fa-circle" style={{ color: "green" }}></i> 9
                  AM - 5 PM
                </td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>
                  {" "}
                  <i className="fa fa-circle" style={{ color: "green" }}></i> 9
                  AM - 5 PM
                </td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>
                  {" "}
                  <i className="fa fa-circle" style={{ color: "green" }}></i> 9
                  AM - 5 PM
                </td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>
                  {" "}
                  <i
                    style={{ color: "red" }}
                    className="fa-regular fa-circle-xmark"
                  ></i>{" "}
                  Closed
                </td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>
                  {" "}
                  <i className="fa fa-circle" style={{ color: "green" }}></i> 9
                  AM - 5 PM
                </td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>
                  {" "}
                  <i className="fa fa-circle" style={{ color: "green" }}></i> 9
                  AM - 5 PM
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableContact;
