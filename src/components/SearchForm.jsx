import { Form, useNavigation } from "react-router-dom";

export default function SearchForm({searchTerm}) {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Form>
      <input type="search" name="search" defaultValue={searchTerm} />
      <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Searching...' : 'Search'}</button>
    </Form>
  );
}
