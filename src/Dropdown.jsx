import Dropdown from 'react-bootstrap/Dropdown';

function BasicDropdown({setAtmMode, setValidTransaction, setIsDeposit }) {
    const handleChangeMode = (event) => {
        console.log(event.target.value);
        setAtmMode(event.target.value);
        setValidTransaction(false);
        if (event.target.value === 'Deposit') {
          setIsDeposit(true);
        } else { setIsDeposit (false);}
        event.preventDefault();
      };
  return (
    <Dropdown  onChange={(e) => handleChangeMode(e)}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select one
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2" value="Deposit">
            Deposit</Dropdown.Item>
        <Dropdown.Item href="#/action-3" value="Cash Back">
            Cash Back
          </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicDropdown;