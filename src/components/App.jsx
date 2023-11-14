import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';


export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

 
  return (
    <div>
      <section title="Phonebook">
        <ContactForm />
      </section>
      <section title="Contacts">
        {isLoading && <Loader />}
        {!isLoading && contacts.length !== 0 && <Filter />}
        {!isLoading && contacts.length !== 0 && <ContactList />}
      </section>
    </div>
  );
};
