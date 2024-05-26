import { useState } from 'react';

import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';

/* The `AddCabin` function is a component that renders a button labeled "Add new cabin". When this button is clicked, it toggles the state of `isOpenModal` using the `setIsOpenModal` function. If `isOpenModal` is true, it renders a `Modal` component with a `CreateCabinForm` component inside
it. The `Modal` component has a prop `onClose` which sets `isOpenModal` to false when the modal is closed. The `CreateCabinForm` component also has a prop `onCloseModal` which sets `isOpenModal` to false when the form is closed. This setup allows the user to open and close a modal for creating a new cabin. */
function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
