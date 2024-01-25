import { Form, useNavigation } from "react-router-dom";

export default function SearchForm() {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Form>
      <input type="search" name="search" defaultValue="vodka" />
      <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Searching...' : 'Search'}</button>
    </Form>
  );
}
