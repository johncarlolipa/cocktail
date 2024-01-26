import { Form, useNavigation } from "react-router-dom";

export default function SearchForm({ searchTerm }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="flex justify-center items-center my-10">
      <input
        type="search"
        name="search"
        defaultValue={searchTerm}
        className="border border-black px-4 py-2 w-full md:w-[400px]  focus:outline-none"
        placeholder="Search..."
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="border border-black bg-yellow-500 text-white px-6 py-2 transition duration-300 ease-in-out transform hover:scale-105"
      >
        {isSubmitting ? "Searching..." : "Search"}
      </button>
    </Form>
  );
}
