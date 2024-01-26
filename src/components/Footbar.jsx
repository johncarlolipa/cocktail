export default function Footer() {
  return (
    <footer className="bg-yellow-700 text-white p-10 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cocktail Smoky. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
