export default function Footer() {
  return (
    <footer className="bg-dark-500 text-center text-white text-sm p-4">
      © {new Date().getFullYear()} Powered by{" "}
      <a
        className="text-white text-md font-bold hover:underline"
        href="mailto:sterogam@gmail.com"
      >
        S-Digital
      </a>{" "}
      | Todos los derechos reservados
    </footer>
  );
}
