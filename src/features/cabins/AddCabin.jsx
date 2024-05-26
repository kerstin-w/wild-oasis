import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';

/**
 * The AddCabin function renders a Modal component with options to add a new cabin or show a table.
 * @returns A function named AddCabin is being returned. This function renders a Modal component with two sets of Modal.Open and Modal.Window components. The first set allows the user to add a new cabin using a CreateCabinForm component when clicking on a Button labeled "Add new cabin". The second set allows the user to show a table of cabins using a CabinTable component when clicking on a Button labeled "table"
 */
function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
