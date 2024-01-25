import { Form, useNavigation } from "react-router-dom";

export default function SearchForm({ searchTerm }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="flex justify-center items-center">
      <input
        type="search"
        name="search"
        defaultValue={searchTerm}
        className="border border-black px-2 py-1"
        placeholder="Search..."
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="border border-black bg-yellow-300 px-4 py-1"
      >
        {isSubmitting ? "Searching..." : "Search"}
      </button>
    </Form>
  );
}
