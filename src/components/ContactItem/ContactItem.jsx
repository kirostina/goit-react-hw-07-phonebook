import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      {name}: {number}
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </>
  );
};
