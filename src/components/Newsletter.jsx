import { Form, redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const response = await axios.post(newsletterUrl, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.error(error);
    toast.error("Failed to subscribe to the newsletter");
  }

  return null;
};

export default function Newsletter() {
  return (
    <Form
      method="POST"
      className="max-w-md mx-auto p-4 bg-white  rounded-md my-28"
    >
      <h4 className="text-3xl font-bold mb-4 text-center">
        Subscribe to Our Newsletter
      </h4>

      <div className="grid grid-cols-2 gap-4 mb-4 mt-10">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue="Juan"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="lastname"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            defaultValue="Dela Cruz"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-600"
      >
        Email Address:
      </label>
      <input
        type="text"
        id="email"
        name="email"
        defaultValue="juandelacruz@email.com"
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-300"
      >
        Subscribe
      </button>
    </Form>
  );
}
