export default function Footer({ length }) {
  return (
    <footer>
      {length} List Items
      <a
        href="https://github.com/marta0220/groceries-list"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Open-source link to GitHub <i class="fa-brands fa-github"></i>
      </a>
    </footer>
  );
}
