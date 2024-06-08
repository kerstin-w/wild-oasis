import React from 'react';

import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm';
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';

import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Collapse from '../ui/Collapse';

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Collapse heading="Update user data" expanded={true}>
          <UpdateUserDataForm />
        </Collapse>
      </Row>

      <Row>
        <Collapse heading="Update password" expanded={false}>
          <UpdatePasswordForm />
        </Collapse>
      </Row>
    </>
  );
}

export default Account;
