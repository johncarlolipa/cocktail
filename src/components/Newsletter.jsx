import { Form } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return null;
};

export default function Newsletter() {
  return (
    <Form method="POST">
      <h4>Our Newsletter</h4>
      {/* name */}
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" defaultValue="Juan" required />
      </div>
      {/* last name */}
      <div>
        <label htmlFor="lastname">Last Name: </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          defaultValue="Dela Cruz"
          required
        />
      </div>
      {/* email address */}
      <div>
        <label htmlFor="email">Email Address: </label>
        <input
          type="text"
          id="email"
          name="email"
          defaultValue="juandelacruz@email.com"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </Form>
  );
}
